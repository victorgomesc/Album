"use client";

import Header from "@/components/Header";
import PhotoCard from "@/components/PhotoCard";


export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-900 bg-[length:40px_40px] bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_76%,transparent_77%),linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_76%,transparent_77%)]">
      <Header />
      <PhotoCard />
    </div>
  );
}
