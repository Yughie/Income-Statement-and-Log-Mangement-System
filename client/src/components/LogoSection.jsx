import { Fade } from "react-awesome-reveal";
import logo from "../assets/logo.png";

function LogoSection() {
    return (
        <>
        <div className="flex-col items-center justify-center text-center  w-screen text-slate-300">
            {/* IMAGE */}
            <Fade down cascade damping={.90}>
                <img src={logo} alt="Your Image" className="mx-auto px-10 pt-40 md:px-16"></img>
            </Fade>
        </div>
        </>
    )
}

export default LogoSection;