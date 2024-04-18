import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-fulll h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4">
      <form className="flex flex-col max-w-[600px] w-full" method="POST" action="https://getform.io/f/pbgxjxya">
        <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Contact</p>
            <p className="py-4">// Submit the form below or shoot me an emal - javohirxatamov2008@gmail.com</p>

        </div>
        <input className="bg-[#ccd6f6] text-black" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#ccd6f6] text-black" type="email" placeholder="Email" name="email" />
        <textarea className="bg-[#ccd6f6] text-black" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
