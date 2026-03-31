function RaiseTickets() {
  const sections = [
    {
      title: "Account Opening",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Tradeflow Account",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      items: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      items: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {sections.map((section, index) => (
          <div className="col-4 p-5 mt-2 mb-2" key={index}>
            <h4>
              <i className="fa fa-plus-circle"></i> {section.title}
            </h4>

            {section.items.map((item, i) => (
              <div key={i}>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    lineHeight: "2.5",
                  }}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RaiseTickets;

