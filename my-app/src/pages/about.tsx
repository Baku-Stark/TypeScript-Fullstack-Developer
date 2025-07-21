import { useSearchParams } from "next/navigation";

export default function AboutPage() {
  const searchParams = useSearchParams();
  const name = searchParams?.get("name");
  const company = searchParams?.get("company");

  console.log(searchParams);

  return (
    <div>
      <h1>About</h1>
      <p>Nome: {name}</p>
      <p>Empresa: {company}</p>
    </div>
  );
}
