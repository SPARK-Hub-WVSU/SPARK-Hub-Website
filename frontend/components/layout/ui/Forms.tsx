export default function Forms() {
  return (
    <form className="px-4 py-6 border border-white border-opacity-80 rounded-[2rem] bg-white bg-opacity-5 backdrop-blur-lg mb-24">

        <div id="Prompt">
            <p className="text-gray-200 text-3xl pb-2 font-medium"> Send a Message!</p>
            <p className="text-white text-xl text-opacity-40 pb-10 font-medium"> Fill out the fields below</p>
        </div>

        <div id="Fill_Up" className="flex flex-row gap-5">
            <div id="Name_Email" className="flex flex-col gap-6"> 
                <div id="Name" className="flex flex-col gap-3">
                    <p className="text-accent text-xl font-medium">Name*</p>
                    <input type="text" placeholder="Juan Dela Cruz" 
                    className="border border-white border-opacity-60 rounded-xl h-12 p-4 placeholder-white text-xl bg-transparent font-medium w-64"></input>
                </div>
                <div id="Email" className="flex flex-col gap-3">
                    <p className="text-accent text-xl font-medium">Email*</p>
                    <input type="text" placeholder="juan@wvsu.edu.ph" 
                    className="border border-white border-opacity-60 rounded-xl h-12 p-4 placeholder-white text-xl bg-transparent font-medium w-64"></input>
                </div>
            </div>

            <div id="Message" className="flex flex-col gap-3">
                <p className="text-accent text-xl font-medium">Message*</p>
                <textarea placeholder="Enter Message..." 
                className="resize-none border border-white border-opacity-60 rounded-xl h-40 p-4 placeholder-white text-xl bg-transparent font-medium w-72"/>
            </div>
        </div>  

        <button className="font-semibold text-xl text-white bg-cyan-500 mt-4 w-full rounded-xl py-4 ">
            Submit
        </button>
    </form>
  );
}