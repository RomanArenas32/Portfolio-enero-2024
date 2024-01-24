import bookUsers from "../assets/projects/bookUsers.PNG";
import veterinaria from "../assets/projects/veterinaria.PNG";
import openpy from "../assets/projects/openpy.PNG";
import javascript1 from '../assets/projects/javascript-vol1.PNG';
import javascript2 from '../assets/projects/javascript-vol2.PNG';
import nodeRedusers from '../assets/projects/node-redusers.PNG';


import { Proyect } from "../utils";

export const Projects = () => {


  return (
    <div
      name="Projects"
      className=" flex flex-col flex-wrap mt-3"
    >
      <h2 className="text-center text-3xl font-bold mb-10 text-[--color5-l] shadow-2xl py-3">Projects</h2>
      <div className="   gap-4  flex flex-wrap justify-center">
        <Proyect propiedades={{
          description:
            "In this project, published as a technology article on the 'redUsers' company website, I demonstrate various ways to consume a third-party API using the native JavaScript fetch API and other external packages such as Axios and Superagent. It consists of four applications.",
          projectsImageSrc: javascript1,
          githubLinkF: "https://github.com/RomanArenas32/superagent-tinUsers",
          deployLink: "https://www.redusers.com/noticias/publicaciones/consumo-de-datos-con-javascript/",
          
        }} />
        <Proyect propiedades={{
          description:
            "This is the second installment of the digital book collection where I teach how to build a full-stack application with React, Node, and a cloud database with MongoDB.",
          projectsImageSrc: javascript2,
          githubLinkF: "https://github.com/RomanArenas32/bookUs-frontend",
          githubLinkB: "https://github.com/RomanArenas32/bookHub",
          deployLink: "https://www.redusers.com/noticias/publicaciones/aplicacion-web-con-javascript/",
          
        }} />
        <Proyect propiedades={{
          description:
            "In this project, I teach how to create a RESTful API using Node.js from scratch. This app includes the database connection and a fully functioning CRUD. Additionally, I explain how to use Postman, a popular backend development tool.",
          projectsImageSrc: nodeRedusers,
          githubLinkB: "https://github.com/RomanArenas32/Restserver-Node-MongoAtlas",
          deployLink: "https://www.redusers.com/noticias/publicaciones/api-con-node-js/",
          
        }} />
        <Proyect propiedades={{
          description:
            "This project allows users to share and download books for free. It uses React for creating user interfaces. Node and Express are employed for creating endpoints, and a cloud-based database is built using MongoDB with the Mongoose package.",
          projectsImageSrc: bookUsers,
          githubLinkF: "https://github.com/RomanArenas32/bookUs-frontend",
          githubLinkB: "https://github.com/RomanArenas32/bookHub",
          deployLink: "https://thunderous-valkyrie-50cc39.netlify.app/",
          letterColor: "text-[--color1-l]"
        }} />
        <Proyect propiedades={{
          description:
            "Administrator panel for veterinary patients that uses React and Tailwind for the user interface, and Node with Express and MongoDB in the backend.",
          projectsImageSrc: veterinaria,
          githubLinkF: "https://github.com/RomanArenas32/bookUs-frontend",
          githubLinkB: "https://github.com/RomanArenas32/panel_administrador_veterinaria_backend",
          deployLink: "https://github.com/RomanArenas32/panel_administrador_veterinaria_frontend",
          
        }} />
        <Proyect propiedades={{
          description:
            "In this project, I use the OpenPyxls library in Python to generate balance sheets for expenses in various schools. It was developed for the company redUsers and featured in a technology article.",
          projectsImageSrc: openpy,
          githubLinkB: "https://github.com/RomanArenas32/calculosPy",
          deployLink: "https://www.redusers.com/noticias/publicaciones/python-con-openpyxl/",
        }} />

      </div>
    </div>
  );
};

