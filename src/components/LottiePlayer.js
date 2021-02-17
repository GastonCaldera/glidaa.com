import React from "react";
import "@lottiefiles/lottie-player";

const LottiePlayer = React.memo((props) => {
  return (
    <>
      <lottie-player {...props}></lottie-player>
    </>
  );
});

export default LottiePlayer;
