import { getServerSession } from "next-auth";
import Header from "@/components/header.component";
import { authOptions } from "@/lib/auth";
import styles from './page.module.scss'; // Importa los estilos CSS Modules
import axios from "axios";
import { useState } from "react";
import { AddWalletForm } from "./form";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log('user', user)
  return (
    <>
      <Header />
      <section className="bg-black  min-h-screen p-20">
        <div className={styles.settings} >
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md  flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Pagina de usuario
            </p>
            {!user ? (
              <p>Loading...</p>
            ) : (
              <div className="flex p-10 items-center gap-8">
                <div>
                  <img
                    src={user.image ? user.image : "/images/default.png"}
                    className="max-h-36"
                    alt={`profile photo of ${user.name}`}
                  />
                </div>
                <div>
                  <div className="mt-8">
                    {/* <p className="mb-3">Nombre: {user.name}</p>
                    <p className="mb-3">Wallet: {user.email}</p>
                    <p className="mb-3">Email: {user.email}</p> */}
                    {JSON.stringify(user)}
                  </div>
                  <div className="mt-8">
                    <AddWalletForm/>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        </div>
      </section>
    </>
  );
}
