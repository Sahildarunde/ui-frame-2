"use client";

import { ChangeEvent, useState } from 'react';
import Navbar from "./Navbar";
import HeroComp from './HeroComp';


export default function Main({selectedImage, handleImageChange}: any) {

    return (
        <div className="h-screen w-screen">
            <Navbar selectedImage={selectedImage} />
            <HeroComp selectedImage={selectedImage} onImageChange={handleImageChange} />
        </div>
    );
}
