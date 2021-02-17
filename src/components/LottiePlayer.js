import React from "react";
import "@lottiefiles/lottie-player";
import { Player } from '@lottiefiles/react-lottie-player';
import Lottie from 'lottie-react-web'
const LottiePlayer = React.memo((props) => {
  return (
    <>
      <Lottie {...props}></Lottie>
    </>
  );
});

export default LottiePlayer;
