import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "You are not logged in" }),
      { status: 401 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email ?? '',
      },
    });

    return NextResponse.json({
      user
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}


export async function PUT(req: any) {
  const session = await getServerSession(authOptions);

  try {
    const { payload } = await req.json(); // Parsear el cuerpo del payload
    console.log("payload", payload);
    if (!payload) {
      return NextResponse.json(
        JSON.stringify({
          status: "error",
          message: "Payload is missing or malformed",
        }),
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: {
        email: session?.user?.email ?? '',
      },
      data: payload, // Los campos que deseas actualizar
    });

    return NextResponse.json({
      user: updatedUser,
      message: "User data updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}