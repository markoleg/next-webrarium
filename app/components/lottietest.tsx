"use client";
// import "@lottiefiles/lottie-player";
import React, { useRef } from "react";

export default function LPT() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="container" style={{ border: "3px solid blue" }}>
      <lottie-player
        id="firstLottie"
        ref={ref}
        autoplay
        //   controls
        loop
        mode="normal"
        src="/2.json"
        style={{ width: "90px", height: "90px" }}
      ></lottie-player>
    </div>
  );
}
