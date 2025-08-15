"use client";
import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

export default function PixiCanvas() {
  const containerRef = useRef(null);
  const appRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px]"
      style={{ position: "relative" }}
    />
  );
}
