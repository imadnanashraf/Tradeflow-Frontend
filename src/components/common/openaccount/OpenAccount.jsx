import { Link  } from "react-router";

function OpenAccount(){

    return (
        <>
          <div className="container p-5 mb-5" >

                <div className="row text-center ">

                    

                    <h1 className="mt-5">
                        Open a Tradeflow account
                    </h1>

                    <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

                    <Link to="/signup"><button  className="btn btn-primary fs-5 mb-5 hero-btn">Sign up for free</button></Link>
                    

                </div>

            </div>
        </>
    );
}

export default OpenAccount;