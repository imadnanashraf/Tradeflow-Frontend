import Brokerage from "./Brokerage";
import Hero from "./Hero";
import OpenAccount from "../../common/openaccount/OpenAccount"

function Pricing() {
    return ( 
        <>
        <Hero />
        <OpenAccount />
        <Brokerage />
        </>
     );
}

export default Pricing;