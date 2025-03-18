import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    ["#o-aeroklubu", "O aeroklubu"],
    ["#novosti", "Novosti"],
    ["#clanstvo", "Članstvo"],
    ["#zracno-pristaniste", "Zračno pristanište"],
    ["#galerija", "Galerija"],
    ["#linkovi", "Linkovi"],
    ["#kontakt", "Kontakt"],
  ];

  // Automatsko zatvaranje menija kad se klikne izvan njega
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="w-full bg-white md:h-[165px] shadow-md shadow-light-blue/25 fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center" ref={menuRef}>
          <div className="flex items-center justify-between md:justify-center w-full pt-4 pb-4">
            <a href="#aeroklub">
              <img
                src="images/avio-logo.svg"
                alt="Avio Logo"
                className="h-[4.5rem] w-auto"
              />
            </a>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-8 w-8 text-dark-blue" />
              ) : (
                <Menu className="h-8 w-8 text-dark-blue" />
              )}
            </button>
          </div>

          <div className="hidden md:flex flex-row items-center pb-4 w-full justify-center">
            <nav>
              <ul className="flex flex-row gap-6 space-x-8">
                {navItems.map(([href, label]) => (
                  <li className="text-xl" key={label}>
                    <a
                      href={href}
                      className="text-dark-blue hover:border-b-4 border-light-blue"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {mobileMenuOpen && (
            <div className="flex flex-col items-start w-full bg-white pr-0 pl-0 pb-4 md:hidden animate-fade-in">
              {navItems.map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-2 py-2 text-xl text-dark-blue hover:text-light-blue transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
};
