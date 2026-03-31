import { Link } from "react-router";

function NotFound(){

    return (
        <>
          <div className="container p-5 mb-5" >

                <div className="row  ">

                    

                    <h1 className="mt-5">
                        404 Not Found
                    </h1>

                    <p>We couldn’t find the page you were looking for.</p>

                    <p>Visit Tradeflow's <Link to="/" style={{textDecoration : "none"}}>home page</Link></p>

                    

                </div>

            </div>
        </>
    );
}

export default NotFound;