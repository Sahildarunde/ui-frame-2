"use client"

import HeroComp from "./HeroComp";
import Navbar from "./Navbar";

export default function Main(){
    return (
        <div className="h-screen w-screen">
            <div>
                <Navbar />
            </div>
            <div>
                <HeroComp />
            </div>
        </div>
    );
}