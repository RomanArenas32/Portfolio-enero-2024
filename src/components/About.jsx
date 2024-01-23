import React, { useState } from "react";

export const About = () => {

  const [showText, setShowText] = useState(false)



  return (
    <div
      name="About"
      className=" flex flex-col items-center  w-screen "
    >
      <h2 className="font-semibold text-3xl p-2 ">About</h2>

      <div className="flex flex-col items-center justify-center w-screen bg-[--color5-l] p-10 text-justify">

        <p className="text-[--color1-l] text-xl">
          Hello! 👋 I'm Roman, a passionate full-stack web developer specializing in JavaScript technologies. My mission is to transform creative ideas into interactive and functional experiences.
          <br />
          With a solid background in both client and server-side development, I've worked on a variety of projects ranging from eye-catching websites to robust applications. I leverage the latest JavaScript tools and frameworks to create scalable and efficient solutions.
          <br />
          {
            showText && 
              <p className="text-[--color1-l] text-xl">
              On the client side, I excel in developing engaging and responsive user interfaces using modern libraries like React. On the server side, I specialize in Node.js and Express to build secure and efficient APIs.
              <br />
              My approach goes beyond just writing code. I strive to understand the specific needs of my clients and end-users to deliver solutions that not only meet requirements but also provide an exceptional experience.
              <br />
              In addition to my technical expertise, I'm a constant learner and always exploring new technologies and best practices. I believe in collaboration and effective communication to achieve outstanding results on every project.
              <br />
              Estoy emocionado de seguir creciendo como desarrollador y contribuir al éxito de futuros proyectos. ¡Conversemos y descubramos cómo puedo ayudarte a alcanzar tus metas tecnológicas!
              </p>
          }
          <br />
          {
            (showText) ?
              <p className="underline cursor-pointer" onClick={() => setShowText(false)}>show less...</p>
              :
              <p className="underline cursor-pointer" onClick={() => setShowText(true)}>show more...</p>
          }

        </p>
      </div>
    </div>
  );
};

