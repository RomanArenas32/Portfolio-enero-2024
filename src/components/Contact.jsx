import { useState } from "react";
import { Alerta } from "../utils";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import whhatsapp from '../assets/tecnologies/whatsapp.webp'

const initialState = {
  name: '',
  email: '',
  message: ''
}


export const Contact = () => {


  const form = useRef();

  const [formData, setFormData] = useState(initialState);

  const [alerta, setAlerta] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }


  const sendEmail = (e) => {
    e.preventDefault();
    if ([formData.name, formData.email, formData.message].includes("")) {
      setAlerta({ msg: 'Fields cannot be empty', error: true });
      setTimeout(() => {
        setAlerta({})
      }, 3000);
      return;
    }
    try {
      emailjs.sendForm('service_fuseemb', 'template_idi6hl8', form.current, 'OXtnIgHGm_7Pcc9yu')
        .then((result) => {
          if (result.text === "OK") {
            setAlerta({ msg: 'Message sent successfully', error: false });
            setFormData(initialState)
            setTimeout(() => {
              setAlerta({})
            }, 3000);
          }
        }, (error) => {
          console.log(error);
        });


    } catch (error) {
      console.log(error)
    }

  };

  const { msg } = alerta;

  return (

    <div className="text-center items-center flex flex-col justify-center my-8">
      <div id="form-container" className="bg-[--color1-l] p-10 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out lg:w-2/5">
        <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-[--color5-l] shadow-2xl p-3">Contact</h2>
        <form className="space-y-5" onSubmit={sendEmail} ref={form}>
          <input type="text" className="w-full h-12 border border-[--color5-l]  px-3 rounded-lg" name="name" placeholder="name" id="name" value={formData.name} onChange={handleInputChange} />
          <input className="w-full h-12 border border-[--color5-l]  px-3 rounded-lg" name="email" placeholder="Email" id="email" type="email" value={formData.email} onChange={handleInputChange} />
          <textarea className="w-full h-32 border border-[--color5-l] px-3 rounded-lg" placeholder="Message" id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
          <button className="w-full h-12 bg-[--color4-l] hover:bg-[--color5-l] text-[--color1-l] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase lg:w-2/3" >send message</button>
        </form>
        <div className="pt-2 w-full">
          {
            msg && <Alerta alerta={alerta} />
          }
        </div>
      </div>
      <div className="w-full p-2">
        <a href="http://api.whatsapp.com/send?phone=+542281568550&text=Hola Roman me gustaria contactar contigo"  target="_blank" className="text-right w-28"><img src={whhatsapp} alt="whatsapp" className="w-28 h-28" /></a>
      </div>

    </div>
  );
};