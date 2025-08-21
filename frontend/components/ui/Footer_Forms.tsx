export default function Forms() {
  return (
    <form className="mb-12 bg-[url('/bg/footer_forms_gradient.png')] bg-cover bg-center bg-no-repeat rounded-[2rem]">
        <div id="Blur" className="backdrop-blur-[90px] px-8 lg:px-4 py-6 border border-white border-opacity-80 rounded-[2rem]">
        <div id="Prompt">
            <p className="text-gray-200 text-center lg:text-left text-4xl lg:text-xl pb-2 font-medium"> Send a Message!</p>
            <p className="text-white text-center lg:text-left text-xl lg:text-base text-opacity-80 pb-6 font-medium"> Fill out the fields below</p>
        </div>

        <div id="Fill_Up" className="flex flex-col lg:flex-row gap-5 lg:gap-5">
            <div id="Name_Email" className="flex flex-col gap-4 w-full lg:w-auto"> 
                <div id="Name" className="flex flex-col gap-2">
                    <p className="text-accent text-2xl lg:text-lg font-medium">Name</p>
                    <input type="text" placeholder="Juan Dela Cruz" 
                    className="focus:text-white text-white focus:outline-none border border-white border-opacity-60 rounded-xl h-15 p-3 placeholder-white placeholder-opacity-75 text-xl lg:text-base bg-transparent font-medium w-full lg:w-64"></input>
                </div>
                <div id="Email" className="flex flex-col gap-2">
                    <p className="text-accent text-2xl lg:text-lg font-medium">Email</p>
                    <input type="text" placeholder="juan@wvsu.edu.ph" 
                    className="focus:text-white text-white focus:outline-none border border-white border-opacity-60 rounded-xl h-15 p-3 placeholder-white placeholder-opacity-75 text-xl lg:text-base bg-transparent font-medium w-full lg:w-64"></input>
                </div>
            </div>

            <div id="Message" className="flex flex-col gap-2 w-full lg:w-auto">
                <p className="text-accent text-2xl lg:text-lg font-medium">Message</p>
                <textarea placeholder="Enter Message..." 
                className="resize-none border border-white border-opacity-60 rounded-xl h-56 lg:h-32 p-3 placeholder-white placeholder-opacity-75 text-xl lg:text-base bg-transparent font-medium w-full lg:w-72
                text-white focus:outline-none"/>
            </div>
        </div>  

        <button className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105 font-semibold text-lg text-white bg-gradient-to-r from-cyan-600 to-teal-400 mt-4 w-full rounded-xl py-3">
            Submit
        </button>

        </div>
    </form>
  );
}