"use client";

import { CompanyAccount } from "@/class/CompanyAccount";
import { PeopleAccount } from "@/class/PeopleAccount";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();


  const peopleAccount : PeopleAccount = new PeopleAccount(1, "Wallace", 10);
  console.log(peopleAccount);
  peopleAccount.deposit();

  const companyAccount : CompanyAccount = new CompanyAccount("Thanatos", 100);
  companyAccount.deposit();
  console.log(companyAccount);

  const linksList = [
    {
      "router": "/about",
      "name": "About Page"
    }
  ]

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold">Home Page</h1>

      {/* <h2>Cliente: {peopleAccount.getName()} | Company Account: {companyAccount.getName()}</h2> */}

      <p className="text-lg text-gray-600 text-center max-w-md">
        Este é um projeto Next.js com TypeScript, utilizando o App Router.
        A navegação é feita usando componentes Client Side.
      </p>
      
      <pre className="bg-gray-700 p-4 rounded text-sm overflow-x-auto">
        <code>
          console.log("Hello World");
        </code>
      </pre>
      
      {
        linksList.map((link, index) => (
          <button
            key={index}
            onClick={() => router.push(`${link.router}?name=${peopleAccount.getName()}&company=${companyAccount.getName()}`)}
            className="px-4 py-2 bg-blue-500 text-white rounded m-1"
          >
            {link.name}
          </button>
        ))
      }

    </div>
  );
}
