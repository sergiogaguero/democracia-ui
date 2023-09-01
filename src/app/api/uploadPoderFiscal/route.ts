import { authOptions } from '@/lib/auth';
import prisma from '../../lib/prisma'; // Importa tu instancia de Prisma
import fs from 'fs/promises';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export default async (req: NextRequest, res: any) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(
      JSON.stringify({
        error: 'No estás autenticado.'
      }),
      { status: 401 }
    );
  }
  const userEmail = session?.user?.email;
  const userId = session?.user?.id;

  if (!session || !userEmail) {
    return new NextResponse(
      JSON.stringify({
        error: 'No estás autenticado.'
      }),
      { status: 401 }
    );
  }
  try {
    const {  image } = await req.json();
    if (!session || !userEmail) {
      return new NextResponse(
        JSON.stringify({
          error: 'No enviaste ninguna imagen.'
        }),
        { status: 400 }
      );
    }
    

    // Guarda la imagen en el sistema de archivos o en tu sistema de almacenamiento preferido
    const imagePath = path.join(__dirname, '../../uploads', `${userId}_foto_poder_fiscal.jpg`);
    
    await fs.writeFile(imagePath, image, 'base64');

    // Actualiza la columna 'foto_poder_fiscal' en la base de datos utilizando Prisma
    await prisma.fiscales.update({
      where: { 
        user: {
          email: userEmail,
        },
       },
      data: { foto_poder_fiscal: imagePath },
    });

    res.status(200).json({ message: 'Imagen actualizada con éxito' });
  } catch (error) {
    console.error('Error al actualizar la imagen:', error);
    res.status(500).json({ error: 'Error al actualizar la imagen' });
  }
};