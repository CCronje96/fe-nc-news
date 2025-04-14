import Lottie from "lottie-react";
import Loading from "../assets/Animation - 1744649421581.json";


export default function LoadingAnimation() {
    return (
      <Lottie
        animationData={Loading}
        loop={true}
        style={{ justifySelf: "center", alignSelf: "center" }}
      />
    );
  }