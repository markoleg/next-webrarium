"use client";
// import { LottiePlayer } from "@lottiefiles/lottie-player";
import { useEffect, useRef } from "react";

export default function LP({ index }: { index: number }) {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  // const ref = useRef<LottiePlayer>(null);
  const ref = useRef(null);

  return (
    <div>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        // controls
        loop
        mode="normal"
        src={`/servicenumslottie/${index + 1}.json`}
        style={{ width: "90px", height: "90px" }}
      ></lottie-player>
    </div>
  );
}
