<<<<<<< HEAD
import React from "react";

export default function Forms() {
    return (
        <div className="relative mb-24 overflow-hidden">
            <div className="absolute left-[26.875rem] top-[0.1875rem] w-20 h-14 bg-yellow-400 rounded-full" />
            <div className="absolute left-[10.875rem] top-[17.875rem] w-20 h-20 bg-yellow-400 rounded-full" />
            <div className="absolute left-[26.45rem] top-[18.625rem] w-20 h-20 bg-teal-400 rounded-full" />
            <div className="absolute left-[7.45rem] top-[2.25rem] w-20 h-20 bg-teal-400 rounded-full" />
            <div className="absolute left-[0.5rem] top-[6.125rem] w-14 h-28 bg-amber-300 opacity-60 rounded-full" />

            <form className="bg-zinc-500/5 backdrop-blur-3xl rounded-2xl border border-white/80">
                <section id="Blur" className="px-4 py-6 border border-white border-opacity-80 rounded-2xl">
                    <div id="Prompt">
                        <p className="text-gray-200 text-3xl pb-2 font-medium"> Send a Message!</p>
                        <p className="text-white text-xl text-opacity-80 pb-10 font-medium"> Fill out the fields below</p>
                    </div>

                    <div id="Fill_Up" className="flex flex-row gap-5">
                        <div id="Name_Email" className="flex flex-col gap-6">
                            <div id="Name" className="flex flex-col gap-3">
                                <p className="text-accent text-xl font-medium">Name</p>
                                <input type="text" placeholder="Juan Dela Cruz"
                                    className=" focus:text-white text-white focus:outline-none border border-white border-opacity-60 rounded-xl h-12 p-4 placeholder-white placeholder-opacity-75 text-xl bg-transparent font-medium w-64"></input>
                            </div>
                            <div id="Email" className="flex flex-col gap-3">
                                <p className="text-accent text-xl font-medium">Email</p>
                                <input type="text" placeholder="juan@wvsu.edu.ph"
                                    className=" focus:text-white text-white focus:outline-none border border-white border-opacity-60 rounded-xl h-12 p-4 placeholder-white placeholder-opacity-75 text-xl bg-transparent font-medium w-64"></input>
                            </div>
                        </div>

                        <div id="Message" className="flex flex-col gap-3">
                            <p className="text-accent text-xl font-medium">Message</p>
                            <textarea placeholder="Enter Message..."
                                className="resize-none border border-white border-opacity-60 rounded-xl h-40 p-4 placeholder-white placeholder-opacity-75 text-xl bg-transparent font-medium w-72
                    text-white focus:outline-none"/>
                        </div>
                    </div>

                    <button className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105 font-semibold text-xl text-white bg-gradient-to-r from-cyan-600 to-teal-400 mt-4 w-full rounded-xl py-4 ">
                        Submit
                    </button>
                </section>
            </form>
        </div>
    );
}
=======
// TODO: Enable the footer forms to successfully send emails on SPARK Hub's official email
export default function Forms() {
  return (
    <form className="mb-12 bg-[url('/bg/footer_forms_gradient.png')] bg-cover bg-center bg-no-repeat rounded-[2rem]">
      <div
        id="Blur"
        className="backdrop-blur-[90px] px-8 lg:px-4 py-6 border border-white border-opacity-80 rounded-[2rem]"
      >
        <div id="Prompt">
          <p className="text-gray-200 text-center lg:text-left text-2xl lg:text-xl pb-2 font-medium">
            {" "}
            Send a Message!
          </p>
          <p className="text-white text-center lg:text-left text-lg lg:text-base text-opacity-80 pb-6 font-medium">
            Fill out the fields below
          </p>
        </div>

        <div id="Fill_Up" className="flex flex-col lg:flex-row gap-5 lg:gap-5">
          <div id="Name_Email" className="flex flex-col gap-4 w-full lg:w-auto">
            {/* Name */}
            <div id="Name" className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-accent lg:text-2xl text-lg sm:font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="focus:text-white text-white focus:outline-none border border-white border-opacity-60 rounded-xl h-15 p-3 text-xl lg:text-base bg-transparent font-medium w-full lg:w-64"
              />
            </div>

            {/* Email */}
            <div id="Email" className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-accent lg:text-2xl text-lg sm:font-medium"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="focus:text-white text-white focus:outline-none border border-white border-opacity-60 rounded-xl h-15 p-3 text-xl lg:text-base bg-transparent font-medium w-full lg:w-64"
              />
            </div>
          </div>

          {/* Message */}
          <div id="Message" className="flex flex-col gap-2 w-full lg:w-auto">
            <label
              htmlFor="message"
              className="text-accent lg:text-2xl text-lg sm:font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="resize-none border border-white border-opacity-60 rounded-xl lg:h-full p-3 text-xl lg:text-base bg-transparent font-medium w-full lg:w-72
                text-white focus:outline-none"
            />
          </div>
        </div>

        <button className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105 font-semibold text-lg text-white bg-gradient-to-r from-cyan-600 to-teal-400 mt-4 w-full rounded-xl py-3">
          Submit
        </button>
      </div>
    </form>
  );
}
>>>>>>> bbd80decbe52faa3fd3ca8a3921358b93373f98a
