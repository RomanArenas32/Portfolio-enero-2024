import html5 from '../assets/tecnologies/html-5.png';
import css3 from '../assets/tecnologies/css-3.png';
import javascript from '../assets/tecnologies/js.png';
import react from '../assets/tecnologies/reactjs.png';
import reactNative from '../assets/tecnologies/react-native-1.png';
import bootstrap from '../assets/tecnologies/bootstrap-logo.png';
import sass from '../assets/tecnologies/sass.png';

import reactTestingLibrary from '../assets/tecnologies/react-testing-library.png';
import jest from '../assets/tecnologies/jest.png';
import tailwind from '../assets/tecnologies/tailwindcss.png';
import node from '../assets/tecnologies/nodejs.svg';
import express from '../assets/tecnologies/express.png';
import mongo from '../assets/tecnologies/Mongo-db-logo.png';
import atlas from '../assets/tecnologies/atlas.webp';

import postgresql from '../assets/tecnologies/postgresql.png';
import mysql from '../assets/tecnologies/mysql.jpg';
import firebase from '../assets/tecnologies/firebase.png';
import { Skill } from '../utils/Skill';


export const Technologie = () => {

  return (
    <div
      name="Experience"
      className=" w-full flex flex-col items-center justify-center"
    >
      <div className=' bg-[--color2-l] p-2 m-8'>
        <h2 className="text-center text-3xl font-bold mb-10 text-[--color5-l] shadow-2xl py-3">Technologies</h2>
        <div className="w-screen content-center justify-center  flex flex-wrap gap-3 p-10 tecnologies">
          <Skill img={{ src: html5, "alt": "html5" }} />
          <Skill img={{ src: css3, "alt": "css3" }} />
          <Skill img={{ src: javascript, "alt": "javascript" }} />
          <Skill img={{ src: react, "alt": "react js" }} />
          <Skill img={{ src: reactNative, "alt": "react Native" }} />
          <Skill img={{ src: reactTestingLibrary, "alt": "reactTestingLibrary" }} />
          <Skill img={{ src: jest, "alt": "jest" }} />
          <Skill img={{ src: tailwind, "alt": "tailwind" }} />
          <Skill img={{ src: bootstrap, "alt": "bootstrap" }} />
          <Skill img={{ src: sass, "alt": "sass" }} />
          <Skill img={{ src: node, "alt": "node" }} />
          <Skill img={{ src: express, "alt": "express" }} />
          <Skill img={{ src: mongo, "alt": "mongo" }} />
          <Skill img={{ src: atlas, "alt": "atlas" }} />
          <Skill img={{ src: postgresql, "alt": "postgresql" }} />
          <Skill img={{ src: mysql, "alt": "mysql" }} />
          <Skill img={{ src: firebase, "alt": "firebase" }} />
        </div>
      </div>

    </div>
  );
};

