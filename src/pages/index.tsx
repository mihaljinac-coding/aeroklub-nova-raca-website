import Head from "next/head";
import { NotificationsList } from "@/features/notifications/list-notifications/ui/NotificationsList";
import { MembersList } from "@/features/members/list-members/ui/MembersList";
import { Header } from "@/widgets/header/ui/Header";

export default function HomePage() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <Header />
      <Head>
        <title>Aeroklub Nova Rača</title>
      </Head>
      <main className="pt-[13vh]">
        <section id="aeroklub" className="flex scroll-mt-[13vh] h-[62vh] bg-hero-pattern bg-cover bg-center">
          <div className="flex flex-col justify-center pt-8 pb-8 pl-24 pr-24 gap-8">
            <h1 className="font-extralight text-7xl text-dark-blue">AEROKLUB NOVA RAČA</h1>
            <p className="text-dark-blue font-normal text-xl">Operator površine za uzlijetanje i slijetanje Nova Rača.</p>
          </div>
        </section>
        <section id="o-aeroklubu" className="min-h-screen bg-red-500 scroll-mt-[13vh]">
          <h2 className="text-2xl font-bold mb-4">O aeroklubu</h2>
          <p>Informacije o aeroklubu...</p>
        </section>

        <section id="novosti" className="min-h-screen bg-white scroll-mt-[13vh]" >
          <h2 className="text-2xl font-bold mb-4">Novosti</h2>
          <p>Najnovije vijesti i događanja...</p>
        </section>

        <section id="clanstvo" className="min-h-screen bg-gray-100 scroll-mt-[13vh]">
          <h2 className="text-2xl font-bold mb-4">Članstvo</h2>
          <p>Kako se učlaniti...</p>
        </section>

        <section id="zracno-pristaniste" className="min-h-screen bg-white scroll-mt-[13vh]">
          <h2 className="text-2xl font-bold mb-4">Zračno pristanište</h2>
          <p>Detalji o pisti, dozvolama...</p>
        </section>

        <section id="galerija" className="min-h-screen bg-gray-100 scroll-mt-[13vh]">
          <h2 className="text-2xl font-bold mb-4">Galerija</h2>
          <p>Slike i video zapisi...</p>
        </section>

        <section id="linkovi" className="min-h-screen bg-white scroll-mt-[13vh]">
          <h2 className="text-2xl font-bold mb-4">Linkovi</h2>
          <p>Korisne poveznice...</p>
        </section>

        <section id="kontakt" className="min-h-screen bg-gray-100 scroll-mt-[13vh]">
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p>Kontakt informacije...</p>
        </section>

        <NotificationsList />
        <MembersList/>
      </main>
    </div>
    </>
  );
}