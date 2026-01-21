// components/Cards.tsx
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ImageCardProps {
  title: string;
  image: SanityImageSource;
}

export function ImageCard({ title, image }: ImageCardProps) {
  // Generate the URL string for the background image
  const imageUrl = image ? urlFor(image).width(800).height(1000).url() : "";

  return (
    <div
      className="relative md:w-[28rem] md:h-[31.37rem] min-w-[8.5rem] h-[15rem] rounded-3xl shadow-xl overflow-hidden p-6 flex items-end bg-cover bg-center bg-no-repeat after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-primary after:from-5% after:via-transparent after:via-35% after:to-transparent after:z-0"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="relative z-10 text-white">
        <h3 className="md:text-4xl text-base">{title}</h3>
      </div>
    </div>
  );
}

interface ArticleCardProps {
  article: string;
  href: string;
}

export function ArticleCard({ article, href }: ArticleCardProps) {
  return (
    <div className="bg-neutral-100 w-[8.5rem] h-[15rem] md:w-[20rem] md:h-[31.37rem] rounded-3xl shadow-xl flex flex-col text-center items-center md:p-20 p-10 md:gap-y-10 gap-y-4">
      <article className="max-h-[15rem] md:text-lg text-[10px] overflow-hidden line-clamp-[8]">
        {article}
      </article>
      <Link
        href={href}
        className="bg-accent w-[6rem] h-[1.5rem] md:w-[13rem] md:h-[3rem] rounded-full shadow-lg text-white md:text-xl text-xs flex items-center justify-center hover:bg-opacity-90 transition-all"
      >
        READ MORE
      </Link>
    </div>
  );
}
