import Link from "next/link";
import Forms from "@/components/layout/ui/Forms";

export default function Footer() {
  return (
    <footer className="bg-primary-dark">

      <nav className="text-white text-xl w-auto h-auto flex flex-row justify-between py-20 px-36">
        
        <div id="Logo" className="flex flex-col gap-6">
          <img src="/vectors/footer_logo.svg"/>
          <p className="font-medium"> 
            IGNITING INNOVATION <br></br> INNOVATING THE FUTURE
          </p>
        </div>

        <div id="Links" className="flex flex-row gap-20 justify-center max-w-xl">

          <div id="Home" className="flex flex-col gap-4">
            <div className="font-semibold">
              <Link href=""> Home </Link>
            </div>
              <div className="flex flex-col gap-4">
                <Link href="" > Mission </Link>
                <Link href="" > Vision </Link>
                <Link href=""> Recent <br></br>News</Link>
              </div>
          </div>

          <div id="About" className="flex flex-col gap-4">
            <div className="font-semibold">
              <Link href=""> About Us </Link>
            </div>
              <div className="flex flex-col gap-4">
                <Link href="" > Section </Link>
                <Link href="" > Section </Link>
              </div>
          </div>

          <div id="Contact" className="flex flex-col gap-4">
            <div className="font-semibold">
              <Link href=""> Contacts </Link>
            </div>
              <div className="flex flex-col gap-4">
                <Link href="" > Facebook </Link>
                <Link href="" > Email </Link>
              </div>
          </div>

          <div id="Team" className="flex flex-col gap-4">
            <div className="font-semibold">
              <Link href=""> Team </Link>
            </div>
          </div>

        </div>

      </nav>

      <hr id="Line" className="flex border-t-1 border-white border-opacity-40 py-12 mx-36" >
      </hr>

      <section id="Connect" className="flex flex-row justify-between px-36">

        <div id="Stay" className="flex flex-col gap-8">
          <h1 className="text-accent text-6xl font-semibold"> Stay in <br></br> Touch!</h1>
          <p className= "text-white">
            Ready to spark innovation? <br></br> Get in Touch!
          </p>
        </div>

        <Forms/>

      </section>

      <section id="Copy_Right" className="flex flex-row justify-between items-center mx-36 mb-40">
        <p className="text-white font-medium text-xl"> © 2025 SPARK HUB. All rights reserved</p>

        <div id="FB_GM" className="flex flex-row gap-10">
          <Link href=""> <img src="/icons/facebook.svg" className="shadow-2xl"/></Link>
          <Link href=""> <img src="/icons/gmail.svg" className="shadow-2xl"/></Link>
        </div>
      </section>


    </footer>

  );
}
