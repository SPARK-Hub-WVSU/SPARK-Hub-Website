import Link from "next/link";
export default function Header() {
  return (
    <nav className="text-white bg-primary-dark min-w-full h-16 flex flex-row items-center gap-x-10">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/officers">Officers</Link>
    </nav>
  );
}
