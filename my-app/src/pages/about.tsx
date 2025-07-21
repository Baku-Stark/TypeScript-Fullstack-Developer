import Link from "next/link";

export default function About() {
  return (
    <div className="font-sans min-h-screen p-8 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="text-lg text-gray-600">Esta é a página About feita com Next.js Pages Router.</p>
      <Link href="/" className="text-blue-500 underline">
        Voltar para Home
      </Link>
    </div>
  );
}