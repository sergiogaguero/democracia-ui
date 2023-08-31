import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET(req: Request) {
  /* Recupera los centros electorales en base al input de busqueda*/ 
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

  try {
    const denuncias = await prisma.denuncias.findMany({
      where: {
        user: {
          email: userEmail,
        },
      },
    });

    return new NextResponse(
      JSON.stringify( denuncias),{ status: 200 }
    );
  } catch (error) {
    console.error('Error al obtener denuncias:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Ocurrió un error al obtener las denuncias.'
      }),
      { status: 500 }
    );
  }
}
