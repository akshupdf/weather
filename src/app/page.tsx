"use client";
import Navbar from "../app/Navbar";
import { useState } from 'react';
import Weather from "../app/weather-modal";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
 
  };

  return (
   
      <div className="w-[100%] h-screen bg-[url(https://wallpapers.com/images/featured/sky-mvehfqz6w2ges2dj.jpg)] " >
        <div>
        <Navbar />
        </div>
        <div className="justify-center items-center flex w-[100%] mt-40">
          <div>
          <button onClick={openModal} className="border border-black p-4 rounded-xl bg-white">Check weather</button>
        <Weather isOpen={isModalOpen} onClose={closeModal}  />
          </div>
   
        </div>
        
        </div>
    
  );
}
