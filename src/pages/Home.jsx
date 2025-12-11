import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import "../../index.css";
import { useEffect } from "react";

const Home = () => {
   useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 25,
        size: { min: 15, max: 50, pulse: 0 },
        speed: { x: { min: 0, max: 0.8 }, y: { min: 0, max: 0.2 } },
        colors: {
          background: "#15182e",
          particles: ["#ffc8c8", "#87ddfe", "#acaaff", "#3b4cca"]
        },
        blending: "overlay",
        opacity: { center: 1, edge: 1 },
        skew: -3,
        shapes: ["s","c"]
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <div className="header finisher-header z-1 absolute w-[100vw] h-[100vh]"></div>
        <div className="content ">
            <Introduction />
            <Profile />
        </div>
      </div>
      <div className="bg-soft-white">
        <Profession />
      </div>
      <div>
        <Portfolio />
      </div>
      <div className="bg-[#15182e]">
        <WorkTogether />
      </div>
    </div>
  );
};

export default Home;
