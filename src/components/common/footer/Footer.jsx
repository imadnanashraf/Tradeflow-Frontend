function Footer(){

    return (
      <>
        <footer style={{ backgroundColor: "#fbfbfb" }}>
          <div className="container border-top mt-5">
            <div className="row mt-5 footer-links-row">
              <div className="col">
                <img
                  src="media/images/TRADEFLOW-LOGO.png"
                  style={{ width: "50%" }}
                />
                <p>
                  {" "}
                  &copy; 2010 - 2026, Tradeflow Broking Ltd. All rights
                  reserved.{" "}
                </p>
              </div>
              <div className="col">
                <p className="fs-5">Company</p>
                <a href="#">About</a> <br />
                <a href="#">Products</a> <br />
                <a href="#">Pricing</a> <br />
                <a href="#">Referral programme</a> <br />
                <a href="#">Careers</a> <br />
                <a href="#">Tradeflow. tech</a> <br />
                <a href="#">Press & media</a> <br />
                <a href="#">Tradeflow cares (CSR)</a> <br />
              </div>

              <div className="col">
                <p className="fs-5">Support</p>
                <a href="#">Contact</a> <br />
                <a href="#">Support Portal</a> <br />
                <a href="#">Z-Connect blog</a> <br />
                <a href="#">List of charges</a> <br />
                <a href="#">Downloads & resources</a> <br />
              </div>

              <div className="col">
                <p className="fs-5">Account</p>
                <a href="#">Open an account</a> <br />
                <a href="#">Fund transfer</a> <br />
                <a href="#">60 day challenge</a> <br />
              </div>
            </div>

            <div
              className="para-info mt-5"
              style={{ fontSize: ".65rem", color : "#9b9b9b" }}
            >
              <p>
                Tradeflow Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI –
                SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository
                services through Tradeflow Broking Ltd. – SEBI Registration no.:
                IN-DP-431-2019 Registered Address: Tradeflow Broking Ltd.,
                #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
                India. For any complaints pertaining to securities broking
                please write to complaints@tradeflow.com , for DP related to
                dp@tradeflow.com. Please ensure you carefully read the Risk
                Disclosure Document as prescribed by SEBI | ICF
              </p>
              <p>
                Procedure to file a complaint on SEBI SCORES : Register on
                SCORES portal. Mandatory details for filing complaints on
                SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
                Effective Communication, Speedy redressal of the grievances
              </p>
              <p>
                Smart Online Dispute Resolution | Grievances Redressal Mechanism
              </p>
              <p>
                Investments in securities market are subject to market risks;
                read all the related documents carefully before investing.
              </p>
              <p>
                Attention investors: 1) Stock brokers can accept securities as
                margins from clients only by way of pledge in the depository
                system w.e.f September 01, 2020. 2) Update your e-mail and phone
                number with your stock broker / depository participant and
                receive OTP directly from depository on your e-mail and/or
                mobile number to create pledge. 3) Check your securities / MF /
                bonds in the consolidated account statement issued by NSDL/CDSL
                every month.
              </p>
              <p>
                India's largest broker based on networth as per NSE. NSE broker
                factsheet
              </p>
              <p>
                "Prevent unauthorised transactions in your account. Update your
                mobile numbers/email IDs with your stock brokers. Receive
                information of your transactions directly from Exchange on your
                mobile/email at the end of the day. Issued in the interest of
                investors. KYC is one time exercise while dealing in securities
                markets - once KYC is done through a SEBI registered
                intermediary (broker, DP, Mutual Fund etc.), you need not
                undergo the same process again when you approach another
                intermediary." Dear Investor, if you are subscribing to an IPO,
                there is no need to issue a cheque. Please write the Bank
                account number and sign the IPO application form to authorize
                your bank to make payment in case of allotment. In case of non
                allotment the funds will remain in your bank account. As a
                business we don't give stock tips, and have not authorized
                anyone to trade on behalf of others. If you find anyone claiming
                to be part of Tradeflow and offering such services, please
                create a ticket here.
              </p>
              <p>
                *Customers availing insurance advisory services offered by Ditto
                (Tacterial Consulting Private Limited | IRDAI Registered
                Corporate Agent (Composite) License No CA0738) will not have
                access to the exchange investor grievance redressal forum, SEBI
                SCORES/ODR, or arbitration mechanism for such products.
              </p>
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer;