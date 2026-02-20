"use client";
import {
  AcademicCapIcon,
  ClockIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import ReactClipboard from "react-clipboardjs-copy";

export default function Contact() {
  return (
    <section className="flex flex-col gap-20 lg:px-32 px-9">
      {/* Contact Info */}
      <section className="max-w-[1175px] lg:mx-auto px-4 py-16">
        {/* Grid Container: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--accent-metallic)] transition-all duration-300 shadow-lg flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-[var(--accent-metallic)]/10 mb-6 group-hover:scale-110 transition-transform duration-300">
              <AcademicCapIcon
                width={32}
                height={32}
                className="text-[var(--accent-metallic)]"
              />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[var(--accent-metallic)] to-primary-light bg-clip-text text-transparent mb-3">
              Location
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              West Visayas State University <br />
              Main Campus <br />
              Luna St. La Paz, Iloilo City
            </p>
          </div>

          {/* Hours Card */}
          <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--accent-metallic)] transition-all duration-300 shadow-lg flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-[var(--accent-metallic)]/10 mb-6 group-hover:scale-110 transition-transform duration-300">
              <ClockIcon
                width={32}
                height={32}
                className="text-[var(--accent-metallic)]"
              />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[var(--accent-metallic)] to-primary-light bg-clip-text text-transparent mb-3">
              Office Hours
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Monday - Friday <br />
              8:00 AM - 5:00 PM
            </p>
          </div>

          {/* Email Card - Spans 2 cols on tablet for better balance, 1 on desktop */}
          <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--accent-metallic)] transition-all duration-300 shadow-lg flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
            <div className="p-4 rounded-full bg-[var(--accent-metallic)]/10 mb-6 group-hover:scale-110 transition-transform duration-300">
              <EnvelopeIcon
                width={32}
                height={32}
                className="text-[var(--accent-metallic)]"
              />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-[var(--accent-metallic)] to-primary-light bg-clip-text text-transparent mb-3">
              Email Address
            </h3>
            <ReactClipboard
              text="spark.hub@wvsu.edu.ph"
              onSuccess={() => alert("Copied to clipboard!")}
            >
              <button className="flex gap-2 font-medium items-center text-gray-400 hover:text-[var(--accent-metallic)] transition-colors group/btn">
                spark.hub@wvsu.edu.ph
                <ClipboardIcon
                  width={18}
                  height={18}
                  className="opacity-60 group-hover/btn:opacity-100"
                />
              </button>
            </ReactClipboard>
          </div>
        </div>
      </section>

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
