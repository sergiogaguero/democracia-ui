import Header from "@/components/header.component";

export default async function Home() {
  return (
    <>
      <Header />
      <section className="bg-black min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            Bienvenido a Democracia
          </p>
        </div>
      </section>
    </>
  );
}
