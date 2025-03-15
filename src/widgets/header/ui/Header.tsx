import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full h-[165px] bg-white shadow-md shadow-light-blue/25 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between">
        <div className="flex items-center pt-4 pb-4">
        <a href="#aeroklub">
          <img
            src="/images/avio-logo.svg"
            alt="Avio Logo"
            className="h-[4.5rem] w-auto"
          />
        </a>

        </div>
        <div className="flex flex-row items-center pt-4 pb-4">
          <nav>
              <ul className="flex flex-row gap-6 space-x-8">
                <li className="text-xl">
                  <a
                    href="#o-aeroklubu"
                    className="text-dark-blue hover:border-b-4 border-light-blue"
                  >
                    O aeroklubu
                  </a>
                </li>
                <li className="text-xl">
                  <a
                    href="#novosti"
                    className="text-dark-blue hover:border-b-4 border-light-blue"
                  >
                    Novosti
                  </a>
                </li>
                <li className="text-xl">
                  <a
                    href="#clanstvo"
                    className="text-dark-blue hover:border-b-4 border-light-blue"
                  >
                    Članstvo
                  </a>
                </li>
                <li className="text-xl">
                  <a
                    href="#zracno-pristaniste"
                    className="text-dark-blue hover:border-b-4 border-light-blue"
                  >
                    Zračno pristanište
                  </a>
                </li>
                <li className="text-xl">
                  <a
                    href="#galerija"
                    className="text-dark-blue hover:border-b-4 border-light-blue"
                  >
                    Galerija
                  </a>
                </li>
                <li className="text-xl">
                  <a
                    href="#linkovi"
                    className="text-dark-blue hover:border-b-4 border-light-blue"
                  >
                    Linkovi
                  </a>
                </li>
                <li className="text-xl">
                  <a
                    href="#kontakt"
                    className="text-dark-blue hover:border-b-4 border-light-blue">
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </header>
  );
};
