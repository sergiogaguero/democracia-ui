import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

/* Recupera los datos del fiscal logueado*/ 
export async function GET(req: Request) {
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
    const fiscales = await prisma.fiscales.findMany({
      where: {
        user: {
          email: userEmail,
        },
      },
    });

    return new NextResponse(
      JSON.stringify( fiscales),{ status: 200 }
    );
  } catch (error) {
    console.error('Error al obtener fiscal:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Ocurrió un error al obtener la data del fiscal.'
      }),
      { status: 500 }
    );
  }
}

/* actualizar datos del fiscal por usuario logueadoa*/
export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(
      JSON.stringify({
        error: 'No estás autenticado.'
      }),
      { status: 401 }
    );
  }

  try {
    const { payload } = await req.json(); // Parsear el cuerpo del payload
    console.log("payload", payload);
    if (!payload) {
      return NextResponse.json(
        JSON.stringify({
          error: "Payload is missing or malformed",
        }),
        { status: 400 }
      );
    }

    const updatedFiscal = await prisma.fiscales.update({
      where: {
        id: payload.id,
      },
      data: payload, // Los campos que deseas actualizar
    });

    return new NextResponse(
      JSON.stringify(updatedFiscal),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al actualizar denuncia:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Ocurrió un error al actualizar la denuncia.'
      }),
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return new NextResponse(
      JSON.stringify({
        error: 'No estás autenticado.'
      }),
      { status: 401 }
    );
  }

  try {
    const { payload } = await req.json();
    if (!payload) {
      return NextResponse.json(
        JSON.stringify({
          error: "Payload is missing or malformed",
        }),
        { status: 400 }
      );
    }

    // Obtener el userId del correo electrónico de la sesión
    const userEmail = session?.user?.email;
    const user = await prisma.user.findUnique({
      where: { email: userEmail ?? 'noUser' },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          error: 'No se encontró el usuario.',
        }),
        { status: 404 }
      );
    }

    // Asociar el userId al nuevo fiscal
    const newDenuncia = await prisma.fiscales.create({
      data: {
        ...payload,
        userId: user.id,
      },
    });

    return new NextResponse(
      JSON.stringify(newDenuncia),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al crear el fiscal:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Ocurrió un error al crear el fiscal en nuestra base de datos.'
      }),
      { status: 500 }
    );
  }
}
