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


export const Technologie = () => {

  return (
    <div
      name="Experience"
      className=" w-full flex flex-col items-center justify-center"
    >
      <div className=' bg-[--color2-l] p-2 m-8'>
        <h2 className="font-semibold text-3xl text-[--color5-l] text-center p-3  shadow-md">Technologies</h2>
        <div className="w-screen content-center justify-center  flex flex-wrap gap-3 p-10 tecnologies">
          <img src={html5} alt="html5" />
          <img src={css3} alt="css3" />
          <img src={javascript} alt="js" />
          <img src={react} alt="react" />
          <img src={reactNative} alt="native" />
          <img src={reactTestingLibrary} alt="reactTestingLibrary" />
          <img src={jest} alt="jest" />
          <img src={tailwind} alt="tailwind" />
          <img src={bootstrap} alt="boostrap" />
          <img src={sass} alt="sass" />
          <img src={node} alt="node" />
          <img src={express} alt="express" />
          <img src={mongo} alt="mongo" />
          <img src={atlas} alt="atlas" />
          <img src={postgresql} alt="postgresql" />
          <img src={mysql} alt="mysql" />
          <img src={firebase} alt="firebase" />
        </div>
      </div>

    </div>
  );
};

