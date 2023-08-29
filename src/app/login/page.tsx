import { LoginForm } from "./form";
import Header from "@/components/header.component";

export default function LoginPage() {
  return (
    <>
      <Header />
      <section className="bg-black min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
