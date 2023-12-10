import { Fade } from "react-awesome-reveal";
import logo from "../assets/logo.png";
import Login from "./Login";

function LogoSection() {
  return (
    <>
      <div className="flex-col items-center justify-center  bg-black w-screen h-screen text-slate-300">
        {/* IMAGE */}
        <Fade down cascade damping={0.9}>
          <img
            src={logo}
            alt="Your Image"
            className="mx-auto px-10 pt-40 md:px-16"
          ></img>

          <Login />
        </Fade>
      </div>
    </>
  );
}

export default LogoSection;
