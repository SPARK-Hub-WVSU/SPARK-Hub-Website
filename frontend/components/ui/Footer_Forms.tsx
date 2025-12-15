// TODO: Enable the footer forms to successfully send emails on SPARK Hub's official email
export default function Forms() {
  return (
    <form className="mb-12 bg-[url('/bg/footer_forms_gradient.webp')] bg-cover bg-center bg-no-repeat rounded-[2rem]">
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
