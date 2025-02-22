import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/avio-logo.svg"
            alt="Avio Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#o-aeroklubu"
                className="text-gray-700 hover:text-gray-900"
              >
                O aeroklubu
              </a>
            </li>
            <li>
              <a
                href="#novosti"
                className="text-gray-700 hover:text-gray-900"
              >
                Novosti
              </a>
            </li>
            <li>
              <a
                href="#clanstvo"
                className="text-gray-700 hover:text-gray-900"
              >
                Članstvo
              </a>
            </li>
            <li>
              <a
                href="#zracno-pristaniste"
                className="text-gray-700 hover:text-gray-900"
              >
                Zračno pristanište
              </a>
            </li>
            <li>
              <a
                href="#galerija"
                className="text-gray-700 hover:text-gray-900"
              >
                Galerija
              </a>
            </li>
            <li>
              <a
                href="#linkovi"
                className="text-gray-700 hover:text-gray-900"
              >
                Linkovi
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="text-gray-700 hover:text-gray-900"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
