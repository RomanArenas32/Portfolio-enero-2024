import { useState } from "react";
import { Alerta } from "../utils";




export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alerta, setAlerta] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([formData.name, formData.email, formData.message].includes("")) {
      setAlerta({ msg: 'Fields cannot be empty', error: true });
      setTimeout(() => {
        setAlerta({})
      }, 3000);
      return;
    }
    try {
      setAlerta({ msg: 'Message sent successfully', error: false });
      setTimeout(() => {
        setAlerta({})
      }, 3000);
    } catch (error) {
      console.log(error)
    }
  }


  const { msg } = alerta;

  return (

    <div className="text-center items-center flex flex-col justify-center my-8">
      <div id="form-container" className="bg-[--color1-l] p-10 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out lg:w-2/5">
        <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-[--color5-l] shadow-2xl p-3">Contact</h2>
        <form className="space-y-5">
          <input type="text" className="w-full h-12 border border-[--color5-l]  px-3 rounded-lg" placeholder="name" id="name" value={formData.name} onChange={handleInputChange} />
          <input className="w-full h-12 border border-[--color5-l]  px-3 rounded-lg" placeholder="Email" id="email" name="" type="email" value={formData.email} onChange={handleInputChange} />
          <textarea className="w-full h-32 border border-[--color5-l] px-3 rounded-lg" placeholder="Message" id="message" name="" value={formData.message} onChange={handleInputChange}></textarea>
          <button className="w-full h-12 bg-[--color4-l] hover:bg-[--color5-l] text-[--color1-l] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase" onClick={handleSubmit}>send message</button>
        </form>
        <div className="pt-2 w-full">
          {
            msg && <Alerta alerta={alerta} />
          }
        </div>
      </div>
    </div>
  );
};