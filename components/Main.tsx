"use client";

import { ChangeEvent, useState } from 'react';
import Navbar from "./Navbar";
import HeroComp from './HeroComp';

export default function Main() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setSelectedImage(URL.createObjectURL(imageFile));
    }
  };

    return (
        <div className="h-screen w-screen">
            <Navbar selectedImage={selectedImage} />
            <HeroComp selectedImage={selectedImage} onImageChange={handleImageChange} />
        </div>
    );
}
