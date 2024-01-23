import { useState } from "react";
import { Alerta } from "../utils";




export const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alerta, setAlerta] = useState({});



  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("first")
    if (name.trim() !== "" || email.trim() !== "" || message.trim() !== "") {
      console.log("first")
      setAlerta({
        msg: "No puede haber campos vacios",
        error: true
      })
      return
    }

  }


  const { error } = alerta;

  return (

    <div className="text-center items-center flex flex-col justify-center my-8">
      <div id="form-container" className="bg-[--color1-l] p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out">
        <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-[--color5-l]">Contact</h2>
        <form className="space-y-5">
          <input type="text" className="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
          <input className="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="Email" id="email" name="" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea className="w-full h-32 border border-gray-800 px-3 rounded-lg" placeholder="Message" id="message" name="" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase" onClick={handleSubmit}>send</button>
        </form>
        <div>
          {
            error && <Alerta/>
          }
        </div>
      </div>
    </div>
  );
};