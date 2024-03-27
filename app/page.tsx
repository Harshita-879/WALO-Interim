"use client"
import React from "react";
import { useState } from 'react'
import Hero from "@/components/Hero/Hero";
import Hero2 from "@/components/Hero2/swiper.js";
import Footer from "@/components/Footer/Footer";

export default function Home() {

   const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  }

  return (
    <main className=" font-mplus">
      <Hero />
      <Hero2 />
      <Footer/>
    </main>
  );
}
