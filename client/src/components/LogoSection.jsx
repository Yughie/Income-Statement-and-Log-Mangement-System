import { Fade } from "react-awesome-reveal";
import logo from "../assets/logo.png";
import Login from "./Login";

function LogoSection() {
  return (
    <>
      <div className="flex items-center justify-center  bg-black pb-40  w-screen h-screen min-h-screen text-slate-300">
        {/* IMAGE */}

        <div className="min-h-screen flex-col items-center justify-center">
          <img
            src={logo}
            alt="Your Image"
            className="mx-auto px-10 pt-40 md:px-16"
          ></img>

          <Login />
          <Fade down cascade damping={0.9}></Fade>
        </div>
      </div>
    </>
  );
}

export default LogoSection;
