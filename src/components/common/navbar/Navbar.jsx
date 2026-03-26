function Navbar() {
  return (
    <>

    

      <nav
        class="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#fff" }}
      >
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="media/images/TRADEFLOW-LOGO.png"
              style={{ width: "25%" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">

            <form class="d-flex " role="search">
                
              <ul class="navbar-nav me-auto my-2 my-lg-0 " >
                
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Signup
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Product
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Support
                  </a>
                </li>

                
                
              </ul>
            </form>


          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
