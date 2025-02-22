import Head from "next/head";
import { NotificationsList } from "@/features/notifications/list-notifications/ui/NotificationsList";
import { MembersList } from "@/features/members/list-members/ui/MembersList";
import { Header } from "@/widgets/header/ui/Header";
 


 

export default function HomePage() {
  return (
    <>
      <Header />



      <Head>
        <title>Aeroklub Nova Rača</title>
      </Head>
      {/* Add padding at the top to avoid content being hidden under the fixed header */}
      <main className="pt-16">
        <section id="o-aeroklubu" className="min-h-screen bg-red-500 p-8">
          <h2 className="text-2xl font-bold mb-4">O aeroklubu</h2>
          <p>Informacije o aeroklubu...</p>
        </section>

        <section id="novosti" className="min-h-screen bg-white p-8">
          <h2 className="text-2xl font-bold mb-4">Novosti</h2>
          <p>Najnovije vijesti i događanja...</p>
        </section>

        <section id="clanstvo" className="min-h-screen bg-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-4">Članstvo</h2>
          <p>Kako se učlaniti...</p>
        </section>

        <section id="zracno-pristaniste" className="min-h-screen bg-white p-8">
          <h2 className="text-2xl font-bold mb-4">Zračno pristanište</h2>
          <p>Detalji o pisti, dozvolama...</p>
        </section>

        <section id="galerija" className="min-h-screen bg-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-4">Galerija</h2>
          <p>Slike i video zapisi...</p>
        </section>

        <section id="linkovi" className="min-h-screen bg-white p-8">
          <h2 className="text-2xl font-bold mb-4">Linkovi</h2>
          <p>Korisne poveznice...</p>
        </section>

        <section id="kontakt" className="min-h-screen bg-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p>Kontakt informacije...</p>
        </section>

        <NotificationsList />
        <MembersList/>
      </main>
    </>
  );
}