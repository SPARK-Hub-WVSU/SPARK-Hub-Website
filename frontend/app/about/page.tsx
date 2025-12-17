import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="bg-primary-dark bg-[url('/bg/officers_bg.webp')] bg-cover bg-center bg-no-repeat sm:min-h-screen lg:-mt-30 -mt-40 px-3">
        <div className="flex flex-col gap-y-20 justify-center text-center py-24 sm:py-52 md:py-72">
          <h1 className="font-bold justify-center text-center text-5xl md:text-8xl gap-x-2 md:gap-x-5 md:mt-0 mt-16 flex flex-row">
            <span className="text-white flex flex-row justify-center items-center">
              AB
              <div className="relative size-16 md:size-32">
                <Image
                  src="/vectors/hero_logo.svg"
                  alt="Hero Logo"
                  fill
                  className="object-contain"
                />
              </div>
              UT
            </span>
            <span className="text-accent flex flex-row justify-center items-center">
              US
            </span>
          </h1>
          <p className="text-white font-bold md:text-xl sm:text-xs text-md">
            <i>SPARK Hub is the technopreneurship center at WVSU.</i>
          </p>
        </div>
      </section>
    </>
  );
}
