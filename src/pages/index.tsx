import Head from "next/head";
import { NotificationsList } from "@/features/notifications/list-notifications/ui/NotificationsList";
import { MembersList } from "@/features/members/list-members/ui/MembersList";
import { Header } from "@/widgets/header/ui/Header";

export default function HomePage() {
  const images = Array.from({ length: 8 }, (_, i) => `images/galery/image copy ${i + 1}.svg`);

  return (
    <>
    <div className="flex flex-col min-h-screen">
    <Header />
      <Head>
        <title>Aeroklub Nova Rača</title>
      </Head>
      <main className="md:pt-[165px] pt-[105px]">
        <section id="aeroklub" className="relative scroll-mt-[165px] min-h-[30vh] md:min-h-[75vh] bg-hero-mobile md:bg-hero-desktop bg-no-repeat bg-cover bg-center flex items-start md:items-center">
          <div className="relative z-10 w-full px-4 md:px-24 py-10 md:py-0 flex flex-col justify-center md:justify-center gap-4 md:gap-8 text-left">
            <h1 className="font-extralight text-4xl md:text-7xl text-dark-blue">
              AEROKLUB NOVA RAČA
            </h1>
            <p className="text-dark-blue font-normal text-lg md:text-xl max-w-3xl">
              Operator površine za uzlijetanje i slijetanje Nova Rača.
            </p>
          </div>
        </section>
        <section id="o-aeroklubu" className="h-auto scroll-mt-[165px] pt-12 pb-12">
          <div className="flex justify-center pb-12">
            <h2 className="text-4xl font-alexandria font-light text-dark-blue mb-4">
              O aeroklubu
            </h2>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 pt-7 pb-7 px-6 md:px-24">
              <div className="flex flex-col justify-center w-full md:w-1/2 gap-4">
                <h3 className="text-3xl text-dark-blue font-light">O nama</h3>
                <hr className="border border-black border-opacity-20" />
                <p className="text-xl font-light text-dark-blue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat urna,
                  pulvinar ut commodo ultricies, sagittis ac neque. Vivamus non ex lorem.
                  Donec elementum dui purus, vitae dictum augue pellentesque eu.
                  Curabitur at quam convallis, varius nisi in, sodales nisl. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Praesent id placerat est.
                  Vivamus non porta arcu. Sed mattis euismod nunc non dictum. Nam
                  imperdiet a odio in ullamcorper. Donec cursus interdum pretium.
                </p>
              </div>
              <div className="flex justify-center md:justify-end w-full md:w-1/2">
                <img src="/images/avion.svg" alt="Avion" className="w-auto max-w-full" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 pt-7 pb-7 px-6 md:px-24">
              <div className="flex justify-center md:justify-start w-full md:w-1/2 order-2 md:order-1">
                <img src="/images/avion.svg" alt="Avion" className="w-auto max-w-full" />
              </div>
              <div className="flex flex-col justify-center w-full md:w-1/2 gap-4 order-1 md:order-2">
                <h3 className="text-3xl text-dark-blue font-light">Povijest</h3>
                <hr className="border border-black border-opacity-20" />
                <p className="text-xl font-light text-dark-blue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat urna,
                  pulvinar ut commodo ultricies, sagittis ac neque. Vivamus non ex lorem.
                  Donec elementum dui purus, vitae dictum augue pellentesque eu.
                  Curabitur at quam convallis, varius nisi in, sodales nisl. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Praesent id placerat est.
                  Vivamus non porta arcu. Sed mattis euismod nunc non dictum. Nam
                  imperdiet a odio in ullamcorper. Donec cursus interdum pretium.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="novosti" className="h-auto bg-background-blue scroll-mt-[165px] pt-12 pb-12">
            <div className="flex flex-row justify-center pb-12">
              <h2 className="text-4xl font-alexandria font-light text-dark-blue mb-4">Novosti</h2>
            </div>
            <NotificationsList />
        </section>

        <section id="zracno-pristaniste" className="h-auto bg-white scroll-mt-[165px] pt-12 pb-12">
            <div className="flex flex-row justify-center pb-12">
              <h2 className="text-4xl font-alexandria font-light text-dark-blue mb-4">Površina za uzlijetanje i slijetanje Nova Rača </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex md:flex-row flex-col gap-12 pt-7 pb-7 px-4 md:px-24">
                <div className="flex flex-col justify-center md:w-1/2 w-full gap-4">
                  <h3 className="text-3xl text-dark-blue font-light">General information</h3>
                  <hr className="border border-black border-opacity-20"></hr>
                  <div className="flex flex-col gap-1">                  
                    <p className="text-xl font-light text-dark-blue">Location: Nova Rača, Croatia</p>
                    <p className="text-xl font-light text-dark-blue">N 45° 47' 12.96</p>
                    <p className="text-xl font-light text-dark-blue"> E 16° 57' 49.68</p>
                    <p className="text-xl font-light text-dark-blue">Elevation 431' (131 met)</p>
                    <p className="text-xl font-light text-dark-blue">Runway: 05 - 23 , 595 x 10 met. (1952' x 33') asphalt</p>
                  </div>
                  <div className="flex flex-col gap-1">                  
                    <p className="text-xl font-light text-dark-blue">OTHER INFORMATION</p>
                    <p className="text-xl font-light text-dark-blue">Public, VFR, No fee, No customs</p>
                    <p className="text-xl font-light text-dark-blue">Time zone info:GMT+01:00 uses DST</p>
                    <p className="text-xl font-light text-dark-blue">Comunication: Nova Rača information 123,50 MHz</p>
                    <p className="text-xl font-light text-dark-blue">Operator: Aeroklub Nova Rača</p>
                    <p className="text-xl font-light text-dark-blue">Tel : +385 99 288 6912</p>
                    <p className="text-xl font-light text-dark-blue">E-mail : airport@nova-raca.hr</p>
                  </div>
                </div>
                <div className="flex flex-row md:w-1/2 w-full justify-end md:h-[500px] rounded-2xl">
                  <img src="/images/pista.jpg" alt="pista" className="w-full h-auto rounded-2xl"/>
                </div>
              </div>
          </div>
        </section>

        <section id="clanstvo" className="h-auto bg-background-blue scroll-mt-[165px] pt-12 pb-12">
            <div className="flex flex-row justify-center pb-12">
              <h2 className="text-4xl font-alexandria font-light text-dark-blue mb-4">Članovi</h2>
            </div>
            <MembersList />
        </section>

        <section id="galerija" className="h-auto bg-white scroll-mt-[165px] pt-12 pb-12">
            <div className="flex flex-row justify-center pb-12">
              <h2 className="text-4xl font-alexandria font-light text-dark-blue mb-4">Galerija</h2>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-7 pb-7 px-4 md:px-24">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slika ${index + 1}`}
                  className="rounded-xl w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              ))}
            </div>
        </section>

        <section id="linkovi" className="h-auto bg-background-blue scroll-mt-[165px] pt-12 pb-12">
            <div className="flex flex-row justify-center pb-12">
              <h2 className="text-4xl font-alexandria font-light text-dark-blue mb-4">Linkovi</h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex md:flex-row flex-col gap-12 pt-7 pb-7 px-4 md:px-24">
                <div className="flex flex-col md:w-1/2 w-full gap-4">
                  <h3 className="text-3xl text-dark-blue font-light">Domaći</h3>
                  <hr className="border border-black border-opacity-20"></hr>
                  <a href="https://aeroklubivanic.hr/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">AEROKLUB IVANIĆ GRAD</a>
                  <a href="https://aeroklubvirovitica.hr/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">AEROKLUB VIROVITICA</a>
                  <a href="https://www.zrakoplovstvo.net/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">ZRAKOPLOVSTVO NET</a>
                  <a href="https://www.air-service.hr/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">AIRSERVICE</a>
                  <a href="https://www.haps.hr/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">PADOBRANSTVO</a>
                  <a href="https://www.balonklub.hr/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">BALON KLUB</a>
                  <a href="https://www.croatiaairlines.com/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">CROATIA AIRLINES</a>
                  <a href="https://www.garmin.com/en-US/aviation/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">GARMIN</a>
                  <a href="https://meteo.hr/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">METEO</a>
                </div>
                <div className="flex flex-col md:w-1/2 w-full gap-4">
                  <h3 className="text-3xl text-dark-blue font-light">Strani</h3>
                  <hr className="border border-black border-opacity-20"></hr>
                  <a href="https://www.airnet.com/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">AIRNET</a>
                  <a href="https://www.pipistrel-aircraft.com/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">PIPISTREL</a>
                  <a href="https://www.aircreation.fr/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">AIRCREATION</a>
                  <a href="https://cosmos-ultralight.com/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">COSMOS</a>
                  <a href="https://apollo-ultralight.hu/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">APOLLO</a>
                  <a href="https://www.gt-propellers.com/" className="text-xl font-light text-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">GT-PROPELLERS</a>
                </div>
              </div>
          </div>
        </section>

        <section id="kontakt" className="h-auto bg-white scroll-mt-[165px] pt-12 pb-12">
            <div className="flex flex-row justify-center pb-12">
              <h2 className="text-4xl font-alexandria font-light text-dark-blue mb-4">Kontakt</h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex md:flex-row flex-col gap-12 pt-7 pb-7 px-4 md:px-24">
                <div className="flex flex-col justify-center md:w-1/2 w-full gap-4">
                  <h3 className="text-3xl text-dark-blue font-normal">Kontaktirajte nas na jedan od sljedećih kanala:</h3>
                  <hr className="border border-black border-opacity-20"></hr>                
                  <p className="text-xl font-light text-dark-blue">Tel : +385 99 288 6912</p>
                  <p className="text-xl font-light text-dark-blue">E-mail : airport@nova-raca.hr</p>
                </div>
                <div className="flex flex-row md:w-1/2 w-full justify-end md:h-[500px] rounded-2xl">
                  <img src="/images/map.svg" alt="map" className="w-full h-auto rounded-2xl"/>
                </div>
              </div>
          </div>
        </section>
        <section id="footer" className="h-[124px] bg-dark-blue scroll-mt-[165px] pt-12 pb-12">
          <div className="flex flex-row justify-center">
            <p className="text-xl font-light text-white">2025 Sva prava pridržava, Aeroklub Nova Rača</p>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}