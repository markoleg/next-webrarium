"use client";
// import { LottiePlayer } from "@lottiefiles/lottie-player";
import { useEffect, useRef } from "react";

export default function LP({ index }: { index: number }) {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  // const ref = useRef<LottiePlayer>(null);
  const ref = useRef(null);
  //   add html element
  // useEffect(() => {
  //   const lottie = document.createElement("lottie-player");
  //   lottie.setAttribute("src", "/2.json");
  //   lottie.setAttribute("background", "transparent");
  //   lottie.setAttribute("mode", "normal");
  //   lottie.setAttribute("autoplay", "true");
  //   lottie.setAttribute("loop", "true");
  //   lottie.setAttribute("style", "width: 100%; height: 100%;");
  //   document.body.appendChild(lottie);
  //   //   add event listener
  //   lottie.addEventListener("loadeddata", () => {
  //     ref.current = lottie as LottiePlayer;
  //   });
  // }, []);
  // const ref2 = useRef(null);

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
