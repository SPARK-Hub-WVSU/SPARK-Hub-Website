import {
  AcademicCapIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

import { ClipboardIcon } from "@heroicons/react/24/outline";

import ReactClipboard from "react-clipboardjs-copy";

import Forms from "@/components/ui/ContactForm";

export default function Contact_Info() {
  return (
    <section
      id="Contact_Info"
      className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-24 gap-12 max-w-[1175px] lg:mx-auto"
    >
      <div className="flex flex-col lg:gap-10 gap-5">
        {/* Address */}
        <div className="flex gap-5">
          <AcademicCapIcon
            width={28}
            height={24}
            color="var(--accent-metallic)"
            className="mt-[.250rem]"
          />
          <div className="flex flex-col">
            <h3 className="lg:text-xl md:text-lg text-base text-accent-metallic lg:leading-relaxed leading-snug">
              <span className="font-bold bg-gradient-to-r from-[var(--accent-metallic)] to-primary-light bg-clip-text text-transparent">
                West Visayas State University - Main Campus
              </span>
              <br></br>
              <span className="font-medium">Luna St. La Paz, Iloilo City</span>
            </h3>
          </div>
        </div>

        {/* Hours */}
        <div className="flex gap-5">
          <ClockIcon
            width={28}
            height={24}
            color="var(--accent-metallic)"
            className="mt-[.250rem]"
          />
          <div className="flex flex-col">
            <h3 className="lg:text-xl md:text-lg text-base text-[var(--accent-metallic)] lg:leading-relaxed leading-snug">
              <span className="font-bold bg-gradient-to-r from-[var(--accent-metallic)] to-primary-light bg-clip-text text-transparent">
                Office Hours
              </span>
              <br></br>
              <span className="font-medium">
                Monday - Friday <br></br> 8 AM - 5 PM{" "}
              </span>
            </h3>
          </div>
        </div>

        {/* Number */}
        <div className="flex gap-5">
          <PhoneIcon
            width={28}
            height={24}
            color="var(--accent-metallic)"
            className="mt-[.250rem]"
          />
          <div className="flex flex-col">
            <h3 className="lg:text-xl md:text-lg text-base text-[var(--accent-metallic)] lg:leading-relaxed leading-snug">
              <span className="font-bold bg-gradient-to-r from-[var(--accent-metallic)] to-primary-light bg-clip-text text-transparent">
                Contact No.
              </span>
              <br></br>
              <span className="font-medium">
                <ReactClipboard
                  text="Text Copied"
                  onSuccess={() => {}}
                  onError={() => {}}
                >
                  <button
                    onClick={() => {
                      console.log("0999 999 999");
                    }}
                    className="flex gap-2 font-medium items-center"
                  >
                    0999 999 999
                    <ClipboardIcon
                      width={16}
                      height={16}
                      color="var(--accent-metallic)"
                      className="opacity-60"
                    />
                  </button>
                </ReactClipboard>
                <ReactClipboard
                  text="Text Copied"
                  onSuccess={() => {}}
                  onError={() => {}}
                >
                  <button
                    onClick={() => {
                      console.log("0988 888 888");
                    }}
                    className="flex gap-2 font-medium items-center"
                  >
                    0988 888 888
                    <ClipboardIcon
                      width={16}
                      height={16}
                      color="var(--accent-matallic)"
                      className="opacity-60"
                    />
                  </button>
                </ReactClipboard>
              </span>
            </h3>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-5">
          <EnvelopeIcon
            width={28}
            height={24}
            color="var(--accent-metallic)"
            className="mt-[.250rem]"
          />
          <div className="flex flex-col">
            <h3 className="lg:text-xl md:text-lg text-base text-[var(--accent-metallic)] lg:leading-relaxed leading-snug">
              <span className="font-bold bg-gradient-to-r from-[var(--accent-metallic)] to-primary-light bg-clip-text text-transparent">
                Email Address
              </span>
              <br></br>
              <ReactClipboard
                text="Text Copied"
                onSuccess={() => {}}
                onError={() => {}}
              >
                <button
                  onClick={() => {
                    console.log("spark.hub@wvsu.edu.ph");
                  }}
                  className="flex gap-2 font-medium items-center"
                >
                  spark.hub@wvsu.edu.ph
                  <ClipboardIcon
                    width={16}
                    height={16}
                    color="var(--accent-metallic)"
                    className="opacity-60"
                  />
                </button>
              </ReactClipboard>
            </h3>
          </div>
        </div>
      </div>

      <Forms />
    </section>
  );
}
