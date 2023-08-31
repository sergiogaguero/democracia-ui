'use client'
import Header from "@/components/header.component";
import styles from './page.module.scss'; // Importa los estilos CSS Modules
import axios from "axios";
import { useState, useEffect } from "react";

export default function Profile() {
  const [denuncias, setDenuncias] = useState<any[]>([]);

  const getDenunciasFromAxios = async () => {
    const response = await axios.get('/api/denuncia');
    return response.data
  }

  useEffect(() => {
    const fetchDenuncias = async () => {
      try {
        const denu = await getDenunciasFromAxios();
        console.log( "denu", denu)
        setDenuncias(denu);
      } catch (error) {
        // Manejar errores
      }
    };
  
    fetchDenuncias();
  }, []);

  return (
    <>
      <Header />
      <section className="bg-black  min-h-screen p-20">
        <div className={styles.settings} >
          <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md  flex justify-center items-center">
            <div>
              <p className="mb-3 pt-5 text-5xl text-center font-semibold">
                Mi Denuncia
              </p>
            </div>
            
          </div>
          <div className="p-10 max-w-4xl mx-auto bg-ct-dark-100 rounded-md  flex justify-center items-center">
              {denuncias && denuncias?.map((denuncia: any)=>{
                return (
                  <div>
                    <div> 
                      Id de Denuncia: {denuncia?.id} 
                    </div>
                    <div> 
                      Nro de Mesa: {denuncia?.nroMesa}
                    </div>
                    <div> 
                      Pregunta1: {denuncia?.pregunta1}
                    </div>
                    <div> 
                      Pregunta2: {denuncia?.pregunta2}
                    </div>
                    <div> 
                      Pregunta3: {denuncia?.pregunta3}
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
