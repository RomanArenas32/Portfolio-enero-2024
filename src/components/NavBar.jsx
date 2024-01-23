import { useState } from "react";
import { ButtonBurguer } from "./";
import { LinksNavegacion } from "../utils";
export const NavBar = () => {
  const [isMenuopen, setIsMenuOpen] = useState(false);


  return (
    <nav className={[!isMenuopen
      ? " h-20 md:hidden w-full p-2 bg-[--color5-l]"
      : " items-start p-2 flex flex-col z-[300]  w-screen h-screen bg-[--color5-l]",
    ]}
    >
      <ButtonBurguer
        isMenuOpen={isMenuopen}
        handleMenu={() => setIsMenuOpen(!isMenuopen)}
      />

      {isMenuopen &&
        <ul onClick={() => setIsMenuOpen(false)} className="flex flex-col pb-5 h-screen gap-7 w-screen justify-evenly text-center">
          <LinksNavegacion nombre={"About"} direccion={"About"} />
          <LinksNavegacion nombre={"Projects"} direccion={"Projects"} />
          <LinksNavegacion nombre={"Experience"} direccion={"Experience"} />
          <LinksNavegacion nombre={"Contact"} direccion={"Contact"} />
        </ul>
      }
    </nav>
  );
};

