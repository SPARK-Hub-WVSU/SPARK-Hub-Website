import React from 'react'
import OfficersGrid from '@/components/ui/Officers_grid';

export default function Officers() {
  return (
    <>
      <div className="relative sm:min-h-screen w-full">
        <div className="absolute inset-0 bg-[url('/bg/officers_bg.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>

        <section className="flex justify-center text-center py-24 sm:py-52 md:py-72">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl text-white">
            Meet the <br />
            <strong className="text-accent">TEAM</strong>
          </h1>
        </section>
      </div>

      <div className="relative min-h-screen w-full bg-white py-14">
        <img
          src="/bg/excom-top_bg.webp"
          className="absolute inset-0 w-full h-auto"
          alt="excom bg"
        />
        <header className="relative flex justify-center text-center">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl text-metallic">
            EXCOM <br />
            <strong className="text-accent font-sarina font-normal">2025</strong>
          </h1>
        </header>
        <OfficersGrid />

      </div> 
    </>
  );
}