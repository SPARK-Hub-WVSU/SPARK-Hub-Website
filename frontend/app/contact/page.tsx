"use client";
import Contact_Info from "@/components/sections/Contact_Info";

export default function Contact() {
  return (
    <section className="flex flex-col gap-20 lg:px-32 px-9">
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-center gap-3 ">
        <span className="text-accent-metallic font-medium ">Go ahead and </span>
        <span className="font-bold bg-gradient-to-r from-[var(--accent-metallic)] to-primary-light bg-clip-text text-transparent">
          Connect With Us!
        </span>
      </h1>

      {/* Contact Info */}
      <Contact_Info />

      {/* Map Location */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.01789493495406!2d122.56025095594048!3d10.71238511361936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee500383c9f99%3A0x7d4bdd7ea220dd6a!2sBINHI!5e0!3m2!1sen!2sph!4v1765890799005!5m2!1sen!2sph"
        width="1175"
        height="640"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="flex mx-auto rounded-3xl mb-32 max-w-[1175px] w-full "
      />
    </section>
  );
}
