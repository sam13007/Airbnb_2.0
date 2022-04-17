import React from 'react';
import hero from '../assets/photo-grid.png';
function Hero() {
  return (
    <section className="p-7 flex flex-col">
      <img
        src={hero}
        alt=""
        className="max-w-full sm:max-w-9xl self-center mb-4"
      />
      <h1 className="text-2xl mb-4 font-bold">Online Experiences</h1>
      <p className="">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
