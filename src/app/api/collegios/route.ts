// api/schools.js
export default function handler(req: any, res: any) {
    const allSchools = [
      { name: "Colegio A" },
      { name: "Colegio B" },
      { name: "Colegio C" },
      // Agrega más colegios
    ];
  
    const searchTerm = req.query.term.toLowerCase();
  
    const filteredSchools = allSchools.filter((school) =>
      school.name.toLowerCase().includes(searchTerm)
    );
  
    res.status(200).json(filteredSchools);
  }
  