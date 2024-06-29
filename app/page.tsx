'use client'

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import {ChangeEvent, useState} from 'react'
import Main from '../components/Main'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setSelectedImage(URL.createObjectURL(imageFile));
      }
  };
  return (
    <div className="flex">
      <button
        className="block md:hidden p-2 bg-slate-500 rounded-lg text-white fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <Close/> : <Menu />}
      </button>

      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block w-1/4 md:w-1/12 bg-[#2e3440] h-screen fixed md:static z-40 md:z-auto`}
      >
        <Sidebar selectedImage={selectedImage}/>
      </div>


      <Main selectedImage={selectedImage} handleImageChange={handleImageChange}/>
    </div>
  );
}


function Menu(){
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>

}

function Close(){
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>

}