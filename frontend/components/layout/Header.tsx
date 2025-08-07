import Link from "next/link";
import ContactBtn from "@/components/layout/ui/ContactBtn";

export default function Header() {
  return (
    <header className="bg-primary-dark">
      <nav className="text-white text-2xl w-full h-auto flex flex-row items-center justify-between py-3 px-36">
          
          <div id="Home" className="mb-2">
            <Link href="/">
              <img src="/vectors/nav_logo.svg" alt = "SPARK Hub Logo"/>
            </Link>
          </div>

          <div id="Content"className="flex flex-row gap-10 justify-center items-center">
            <Link href="/about">About Us</Link>
            <Link href="/team"> Team</Link>
            <Link href=""><ContactBtn /></Link>
          </div>

        </nav>
    </header>

  );
}
