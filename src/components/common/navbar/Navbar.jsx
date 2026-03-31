import { Link, NavLink  } from "react-router";

function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#fff" }}
      >
        <div class="container">
          <NavLink class="navbar-brand" to="/">
            <img
              src="media/images/TRADEFLOW-LOGO.png"
              style={{ width: "25%" }}
            />
          </NavLink>
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
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarScroll"
          >
            <form class="d-flex " role="search">
              <ul class="navbar-nav me-auto my-2 my-lg-0 ">
                <li class="nav-item">
                  <NavLink className={ ({ isActive })  => isActive ? "nav-link  active-link" : "nav-link" }  aria-current="page" to="/signup">
                    Signup
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink className={ ({ isActive })  => isActive ? "nav-link  active-link" : "nav-link" } aria-current="page" to="/about">
                    About
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink className={ ({ isActive })  => isActive ? "nav-link  active-link" : "nav-link" } aria-current="page" to="/product">
                    Product
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink className={ ({ isActive })  => isActive ? "nav-link  active-link" : "nav-link" } aria-current="page" to="/pricing">
                    Pricing
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink className={ ({ isActive })  => isActive ? "nav-link  active-link" : "nav-link" } aria-current="page" to="/support">
                    Support
                  </NavLink>
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
