import Footer from "../../common/footer/Footer";
import Navbar from "../../common/navbar/Navbar";
import OpenAccount from "../../common/openaccount/OpenAccount";
import Awards from "./Awards";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Education from "./Education";

function Home() {
    return ( 
        <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        </> 
    );
}

export default Home;