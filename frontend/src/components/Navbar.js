import React from "react";
import { Link } from "react-router-dom";
// import cartLogo from '/assets/shopping-cart.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
// import PizzerialLogo from '/assets/PizzerialLogo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <p className='text-secondary'>pizza</p> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-light h4">
              <Link className="nav-link" to="/">
                <p style={{ paddingTop: "10px" }}>Pizzeria</p>
              </Link>
            </li>
            <li className="nav-item" style={{ paddingTop: "5px" }}>
              <Link className="nav-link" to="/">
                <img
                  src="/assets/PizzeriaLogo.png"
                  alt="pizzeria logo"
                  style={{ width: "50px" }}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/order-pizza">
                <p style={{ paddingTop: "10px" }}>Order Pizza</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/build-pizza">
                <p style={{ paddingTop: "10px" }}>Build Ur Pizza</p>
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to="/cart">
              <button
                className="btn btn-warning text-light cart-button"
                type="submit"
              >
                <img
                  src="/assets/shopping-cart.svg"
                  alt="cart logo"
                  width="30px"
                />
                Shoping cart
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
