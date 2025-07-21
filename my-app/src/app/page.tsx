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

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold">Home</h1>

      <h2>Cliente: {peopleAccount.getName()} | Company Account: {companyAccount.getName()}</h2>
      <button
        onClick={() => router.push("/about")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go to About
      </button>
    </div>
  );
}
