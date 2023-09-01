import { getServerSession } from "next-auth";
import Header from "@/components/header.component";
import { authOptions } from "@/lib/auth";
import styles from './page.module.scss'; // Importa los estilos CSS Modules
import axios from "axios";
import { useState } from "react";
import { UserDataForm } from "./UserDataForm";
import { FiscalRegisterForm } from "./FiscalRegisterForm";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log('user', user)
  return (
    <>
      <Header />
      <section className="bg-black  min-h-screen p-20">
        <div className={styles.settings} >
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md flex flex-col justify-center items-center">
          <div className="w-full flex justify-between items-center p-10 " >
            <div>
              <p className="mb-3 text-5xl text-center font-semibold">
                Pagina de usuario
              </p>
            </div>
            <div>
              <img
                src={user?.image ? user.image : "/images/default.png"}
                className="max-h-36"
                alt={`profile photo of ${user?.name || "user"}`}
              />
            </div>
          </div>
          {!user ? (
            <p>Loading...</p>
          ) : (
            <div className="flex p-10 items-center gap-10 w-full">
              <div className="w-1/2 h-full self-start">
                <UserDataForm user={user}/>
              </div>
              <div className="w-1/2 h-full">
                <FiscalRegisterForm/>
              </div>
            </div>
          )}
        </div>

        </div>
      </section>
    </>
  );
}
