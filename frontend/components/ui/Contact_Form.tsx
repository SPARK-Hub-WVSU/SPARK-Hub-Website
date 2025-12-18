// TODO: Enable the footer forms to successfully send emails on SPARK Hub's official email
import React from "react";

export type Variant = "default" | "footer";

export type FormConfig = {
  bg: string;
  prompt: string;
  subprompt: string;
  layout: string;
  input: string;
  message: string;
};

const designVariations: Record<Variant, FormConfig> = {
  default: {
    bg: "mb-12 bg-[url('/bg/forms_gradient.webp')] bg-cover bg-center bg-no-repeat rounded-[2rem]",
    prompt:
      "text-gray-200 xl:text-4xl lg:text-3xl md:text-2xl text-xl pb-2 font-semibold",
    subprompt:
      "text-white lg:text-xl lg:text-base text-opacity-80 pb-6 font-medium",
    layout: "flex flex-col gap-5 lg:gap-5",
    input:
      "focus:text-white text-white focus:outline-none border border-white border-opacity-60 md:rounded-xl rounded-lg h-15 p-3 md:text-xl text-sm lg:text-base bg-transparent font-medium w-full",
    message:
      "resize-none border border-white border-opacity-60 rounded-xl p-3  lg:text-xl text-sm bg-transparent font-medium w-full text-white focus:outline-none",
  },
  footer: {
    bg: "mb-12 bg-[url('/bg/footer_forms_gradient.webp')] bg-cover bg-center bg-no-repeat rounded-[2rem]",
    prompt:
      "text-gray-200 text-center lg:text-left text-2xl lg:text-xl pb-2 font-medium",
    subprompt:
      "text-white text-center lg:text-left text-lg lg:text-base text-opacity-80 pb-6 font-medium",
    layout: "flex flex-col lg:flex-row gap-5 lg:gap-5",
    input:
      "focus:text-white text-white focus:outline-none border border-white border-opacity-60 rounded-xl h-15 p-3 text-xl lg:text-base bg-transparent font-medium w-full lg:w-64",
    message:
      "resize-none border border-white border-opacity-60 rounded-xl lg:h-full p-3 lg:text-xl text-sm bg-transparent font-medium w-full lg:w-72text-white focus:outline-none",
  },
};

interface FormsProps {
  variant?: Variant;
}

export default function Forms({ variant = "default" }: FormsProps) {
  const styles = designVariations[variant];
  return (
    <form className={styles.bg}>
      <div
        id="Blur"
        className="backdrop-blur-[90px] px-4 py-5 border border-white border-opacity-80 rounded-[2rem]"
      >
        <div id="Prompt">
          <p className={styles.prompt}>Send a Message!</p>
          <p className={styles.subprompt}>Fill out the fields below</p>
        </div>

        <div id="Fill_Up" className={styles.layout}>
          <div id="Name_Email" className="flex flex-col gap-4 w-full lg:w-auto">
            {/* Name */}
            <div id="Name" className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-accent lg:text-2xl md:text-lg text-sm sm:font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
              />
            </div>

            {/* Email */}
            <div id="Email" className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-accent lg:text-2xl md:text-lg text-sm  sm:font-medium"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className={styles.input}
              />
            </div>
          </div>

          {/* Message */}
          <div id="Message" className="flex flex-col gap-2 w-full lg:w-auto">
            <label
              htmlFor="message"
              className="text-accent lg:text-2xl md:text-lg text-sm  sm:font-medium"
            >
              Message
            </label>
            <textarea id="message" name="message" className={styles.message} />
          </div>
        </div>

        <button className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105 font-semibold text-lg text-white bg-gradient-to-r from-cyan-600 to-teal-400 mt-4 w-full rounded-xl py-3">
          Submit
        </button>
      </div>
    </form>
  );
}
