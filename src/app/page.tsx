import Image from "next/image";
import Page from "@/features/home/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Page />
    </main>
  );
}
