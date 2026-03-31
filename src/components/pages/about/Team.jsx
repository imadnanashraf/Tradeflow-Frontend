function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-5 pb-0  mt-5 border-top">
          <h1 className=" text-center fs-3 ">
            People
          </h1>
        </div>

        <div
          className="row  p-5 pt-0  text-muted "
          style={{ lineHeight: "1.8", fontSize: "1em" }}
        >
          <div className="col  p-5 text-center">
            
            <img src="media/images/nithinKamath.jpg" alt="" srcset="" style={{borderRadius : "100%", width : "60%"}} />

            <h5 className="mt-3">Nithin Kamath</h5>
            <h6 className="mt-3">Founder, CEO</h6>

          </div>

          <div className="col  p-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>
                Playing basketball is his zen.
            </p>

            <p>
              Connect on <a style={{textDecoration : "none"}} href="#">Homepage</a> / <a style={{textDecoration : "none"}} href="#">TradingQnA</a> / <a style={{textDecoration : "none"}} href="#">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
