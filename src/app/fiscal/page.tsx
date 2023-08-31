'use client'
import Header from "@/components/header.component";
import styles from './page.module.scss'; // Importa los estilos CSS Modules
import axios from "axios";
import { useState, useEffect } from "react";

export default function Profile() {
  const [fiscal, setFiscal] = useState<any[]>([]);

  const nuevaDenuncia = async () => {
    /* EJEMPLO DE COMO CREAR UN FISCAL */
    const response = await axios.post('/api/fiscal', {
      payload: {
        dni: 33333333,
        idPartido: "1",
      }
    });
  }

  const getFiscalDataFromAxios = async () => {
    const response = await axios.get('/api/fiscal');
    return response.data
  }

  useEffect(() => {
    const fetchFiscal = async () => {
      try {
        const denu = await getFiscalDataFromAxios();
        setFiscal(denu);
      } catch (error) {
        // Manejar errores
      }
    };
  
    fetchFiscal();
  }, []);

  return (
    <>
      <Header />
      <section className="bg-black  min-h-screen p-20">
        <div className={styles.settings} >
          <div className="max-w-4xl mx-auto bg-ct-dark-100  py-5 px-10 rounded-md  flex justify-center items-center">
            <div>
              <p className="mb-3 pt-5 text-5xl text-center font-semibold">
                Registro de fiscal de un partido
              </p>
              <p>
                Regístrate aquí para el programa de incentivos de fiscales de mesa a través de la DAO Democracia 3.0. Reconocemos tu labor en el proceso electoral y queremos recompensar tu participación.
              </p>
              <button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                  onClick={nuevaDenuncia}> nueva fiscal de prueba</button>

            </div>
            
          </div>
          <div className="p-10 max-w-4xl mx-auto bg-ct-dark-100 rounded-md  flex justify-center items-center">
              {fiscal && fiscal?.map((fiscal: any)=>{
                return (
                  <div key={fiscal?.id}>
                    <div> 
                      dni: {fiscal?.dni} 
                    </div>
                    <div> 
                      Partido: {fiscal?.idPartido}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </>
  );
}
