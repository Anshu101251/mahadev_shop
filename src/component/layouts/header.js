import React from "react";

const Header = () => {
  return (
    <header className="main-header white-menu menu-absolute">
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <a href="/">
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </div>
            </div>
            <div className="nav-outer ms-lg-5 ps-xxl-4 clearfix">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header py-10">
                  <div className="mobile-logo">
                    <a href="/">
                      <img
                        src="assets/images/logos/logo.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </div>
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li className="">
                      <a href="/menu">Menu</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">shop</a>
                      <ul>
                        <li>
                          <a href="/product">Products</a>
                        </li>
                        <li>
                          <a href="/product-details">Product Details</a>
                        </li>
                        <li>
                          <a href="/cart">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="/checkout">Checkout Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="header-number">
              <i className="far fa-phone" />
              Call : <a href="#"> +91 98072 73961</a>
            </div>
            <div className="nav-search py-10">
              <button className="far fa-search" />
              <form action="#" className="hide">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required=""
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
            </div>
            <div className="menu-btns">
              <button>
                <i className="far fa-shopping-cart" /> <span>2</span>
              </button>
              <a href="/contact" className="theme-btn">
                Book now <i className="far fa-arrow-alt-right" />
              </a>
              <div className="menu-sidebar">
                <button className="bg-transparent" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;
