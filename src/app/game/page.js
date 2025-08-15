"use client";
import dynamic from "next/dynamic";

const PixiCanvas = dynamic(
  () => import("@/components/game-components/PixiCanvas"),
  {
    ssr: false,
  }
);

import Header from "@/components/game-components/Header";
import Footer from "@/components/game-components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header money={10000} />
      <div className="flex-1 w-full">
        <PixiCanvas />
      </div>
      <Footer />
    </div>
  );
}
