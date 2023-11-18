import React, { useState } from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const renderLinkGroup = (links: string[]) => (
    <div className="flex w-full justify-between gap-5">
      <div className={`flex grow basis-[0%] flex-col items-stretch ${isMenuOpen ? "visible" : "hidden"}`}>
        {links.map((link, index) => (
          <a key={index} href="#" className="text-gray-700 text-xs font-light leading-5 whitespace-nowrap mt-1.5">
            {link}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section>
      <header className="flex max-md:flex-col max-md:items-stretch max-md:gap-0 gap-5 justify-between">
        <div className="flex flex-col items-stretch w-[72%] max-md:w-full max-md:ml-0 mt-6">
          <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
            <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="flex grow basis-[0%] flex-col">
                <h1 className="text-zinc-900 text-lg leading-7 self-stretch whitespace-nowrap font-bold">AlPatrn</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0 mt-6">
          <div className="flex flex-row items-stretch gap-10">
            {renderLinkGroup(["Home page", "Generator", "Pricing-plan", "Blog - News"])}
            {renderLinkGroup(["About us", "Features", "Collection-2023", "Career"])}
            <div className="">
              <button
                onClick={toggleMenu}
                className="text-black text-base leading-7 rounded-full border-solid border-gray-600 border-2 px-6 py-2 border-opacity-50 max-md:px-5 hover:text-white hover:bg-black hover:scale-125 transition"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
