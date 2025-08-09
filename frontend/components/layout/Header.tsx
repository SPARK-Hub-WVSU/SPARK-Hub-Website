import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary-dark">
      <nav className="text-white text-2xl w-full h-auto flex flex-row items-center justify-between py-3 px-36">
          
          <div id="Home" className="mb-2">
            <Link href="" className="font-semibold text-3xl flex items-center gap-8">
              <img className="absolute" src="/vectors/nav_logo.svg" alt = "SPARK Hub Logo"/>
              <img id="Logo_Glow" className="relative blur-sm opacity-60" src="/vectors/nav_logo.svg" alt = "SPARK Hub Logo"/> 
              SPARK HUB
            </Link>
          </div>

          <div id="Content"className="flex flex-row gap-10 justify-center items-center">
            <Link href="/about" className="transform transition-all duration-300 ease-in-out hover:glow-2xl hover:glow-white"> About Us </Link>
            <Link href="/team" className="transform transition-all duration-300 ease-in-out  hover:glow-2xl hover:glow-white"> Team </Link>
            <Link id="Contact" href="" className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105">
              <button className="text-accent bg-white bg-opacity-5 backdrop-blur-3xl w-auto px-7 py-5 flex flex-row items-center gap-3 border rounded-3xl">
                <div>
                  Contact Us
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-6 items-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>

        </nav>
    </header>

  );
}
