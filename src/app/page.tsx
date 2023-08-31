import Header from "@/components/header.component";

export default async function Home() {
  return (
    <>
      <Header />
      <section className="bg-black min-h-screen p-20">
        <div className="max-w-4xl mb-5 mx-auto bg-ct-dark-100 rounded-md h-[10rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            Bienvenido a Democracia 3.0 &#128330;&#65039;
          </p>
        </div>

        <div className="max-w-4xl mb-5 mx-auto bg-ct-dark-100 rounded-md p-20 justify-center items-center">
          <p className="text-3xl mb-10 font-semibold">
            Nuestro Proyecto
          </p>
          <p className="text-base">
            En nuestra búsqueda por fortalecer la democracia y garantizar elecciones transparentes, te damos la bienvenida a nuestra iniciativa única: la creación de una DAO (Organización Autónoma Descentralizada). Nuestro propósito es claro: empoderar a los ciudadanos para que se conviertan en fiscales de mesa y jueguen un papel fundamental en el proceso electoral. A través de la colaboración y la financiación colectiva, aspiramos a construir una comunidad comprometida con la transparencia y la integridad en cada elección.
          </p>
        </div>

        <div className="max-w-4xl mb-5 mx-auto bg-ct-dark-100 rounded-md p-20 justify-center items-center">
          <p className="text-3xl mb-10 font-semibold">
            Impulsando la Participación Ciudadana
          </p>
          <p className="text-base">
            ¿Te preocupa la transparencia en el proceso electoral? ¿Deseas contribuir directamente a un cambio positivo en tu comunidad? Nuestra plataforma te brinda la oportunidad de marcar la diferencia al convertirte en un fiscal de mesa. Al unirte a nuestra DAO, podrás aportar fondos que se destinarán a incentivar a más ciudadanos a participar en el proceso electoral como fiscales de mesa. Tu contribución no solo promoverá la transparencia, sino que también fortalecerá los cimientos de nuestra democracia.
          </p>
        </div>

        <div className="max-w-4xl mb-5 mx-auto bg-ct-dark-100 rounded-md p-20 justify-center items-center">
          <p className="text-3xl mb-10 font-semibold">
            La Fuerza de la Financiación Colectiva
          </p>
          <p className="text-base">
            En este emocionante viaje hacia elecciones más transparentes, la financiación colectiva desempeña un papel crucial. Tu apoyo financiero, por modesto que sea, se suma al fondo destinado a recompensar a los fiscales de mesa. Cada contribución es un paso hacia adelante en la dirección de un proceso electoral imparcial y confiable. A través de nuestra plataforma intuitiva, puedes hacer tu aporte de manera segura y estarás siempre informado sobre cómo se utiliza cada recurso en aras de la transparencia.
          </p>
        </div>
        
        <div className="max-w-4xl mb-5 mx-auto bg-ct-dark-100 rounded-md p-20 justify-center items-center">
          <p className="text-3xl mb-10 font-semibold">
            Únete a Nuestra Misión
          </p>
          <p className="text-base">
            Te invitamos a unirte a nuestra misión de fortalecer la democracia y la transparencia electoral. Tu participación como fiscal de mesa, respaldada por la estructura autónoma y descentralizada de nuestra plataforma, marca la diferencia en la forma en que percibimos y vivimos nuestras elecciones. Juntos, estamos forjando un futuro en el que la voz de cada ciudadano cuenta y el proceso electoral se llena de confianza y claridad. Únete hoy a nuestra DAO y se parte del cambio hacia elecciones más transparentes y justas.
          </p>
        </div>
      </section>
    </>
  );
}
