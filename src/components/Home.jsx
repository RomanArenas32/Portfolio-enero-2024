import React from "react";
import developer from "../assets/Developer.png";
import { Link } from "react-scroll";
import { LinksNavegacion } from "../utils";

export const Home = () => {
  return (
    <>
      <ul className="bg-[#292626] hidden h-20 md:flex md:flex-row justify-end gap-4 hover:cursor-pointer py-2 px-6">
        <LinksNavegacion nombre={"About"} direccion={"About"} />
        <LinksNavegacion nombre={"Projects"} direccion={"Projects"} />
        <LinksNavegacion nombre={"Experience"} direccion={"Experience"} />
        <LinksNavegacion nombre={"Contact"} direccion={"Contact"} />
      </ul>


      <div className="  w-screen flex flex-col justify-center text-center p-3 gap-5 items-center md:flex-row md:justify-evenly my-20 mb-40 ">

        <img
          alt="developer"
          src={developer}
          className=" md:static rounded-full object-contain w-60 shadow-2xl md:w-72"
        />

        <div className=" w-auto flex flex-col gap-3 font-bold text-center justify-center items-center">
          <div className="text-xl md:text-3xl">
            <p> Hi! Im Roman Arenas</p>
            <p>Full stack developer</p>
          </div>

          <Link
            className="cursor-pointer text-xl  text-[--color1-l] bg-[--color4-l] mt-2 p-4 md:w-48 rounded-md"
            to="Projects"
            smooth="500"
          >
            Portfolio
          </Link>
        </div>

      </div>
    </>

  );
};

