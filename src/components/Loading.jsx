import Lottie from "lottie-react";
import Loading from "../assets/Animation - 1744649421581.json";

export default function LoadingAnimation({ className = "" }) {
  return (
    <div className="loading-animation-container">
      <Lottie
        animationData={Loading}
        loop={true}
        className={`lottie-animation ${className}`}
      />
    </div>
  );
}