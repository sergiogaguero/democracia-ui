import { COLEGIOS } from "./colegios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  /* Recupera los centros electorales en base al input de busqueda*/ 
  
  const allSchools = COLEGIOS
  const { searchParams } = new URL(req.url)
  const searchTerm = searchParams.get('term') ?? ''

  const filteredSchools = searchTerm != '' ? allSchools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return new NextResponse(
    JSON.stringify({
      colegios: filteredSchools,
    }),
    { status: 200 }
  );

}
