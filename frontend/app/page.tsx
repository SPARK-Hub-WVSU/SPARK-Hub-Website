import Hero from "@/components/sections/Hero_Section";
import Home_About from "@/components/sections/Home_About";

export default function Home() {
  return (
    <>
      {/* Hero Section*/}
      <section id="Hero_Section">
          <Hero />
      </section>

      {/* About Spark*/}
      <section id="Home_About">
          <Home_About />
      </section>
    </>
  );
}
