'use client'
import Header from "@/components/header.component";
import styles from './page.module.scss'; // Importa los estilos CSS Modules
import axios from "axios";
import { useState, useEffect } from "react";
import { PREGUNTAS } from "./preguntas.constants";

export default function Profile() {
  const [denuncias, setDenuncias] = useState<any[]>([]);

  const nuevaDenuncia = async () => {
    /* EJEMPLO DE COMO POSTEAR UNA DENUNCIA */
    const response = await axios.post('/api/denuncia', {
      payload: {
        nroMesa: 1,
        pregunta1: 1,
        pregunta2: 2,
        pregunta3: 1
      }
    });
  }

  const getOptionDesctiption = (optionId: string, optionNro: number) => {
    const opciones = PREGUNTAS[optionNro].opciones;
    const opcionEncontrada = opciones.find((op: any) => op.id == optionId)
    return opcionEncontrada?.texto
  }

  const getDenunciasFromAxios = async () => {
    const response = await axios.get('/api/denuncia');
    return response.data
  }

  useEffect(() => {
    const fetchDenuncias = async () => {
      try {
        const denu = await getDenunciasFromAxios();
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
              <button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={nuevaDenuncia}> nueva denuncia de prueba</button>

            </div>
            
          </div>
          <div className="p-10 max-w-4xl mx-auto bg-ct-dark-100 rounded-md  flex justify-center items-center">
              {denuncias && denuncias?.map((denuncia: any)=>{
                return (
                  <div key={denuncia?.id}>
                    <div> 
                      Id de Denuncia: {denuncia?.id} 
                    </div>
                    <div> 
                      Nro de Mesa: {denuncia?.nroMesa}
                    </div>
                    <div> 
                      {PREGUNTAS[0].pregunta}: {getOptionDesctiption(denuncia?.pregunta1, 0)}
                    </div>
                    <div> 
                      {PREGUNTAS[1].pregunta}: {getOptionDesctiption(denuncia?.pregunta2, 1)}
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
