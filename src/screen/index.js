import React from "react";

const index = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* <div className="preloader">
          <div className="custom-loader" />
        </div> */}
        <header className="main-header white-menu menu-absolute">
          <div className="header-upper">
            <div className="container-fluid clearfix">
              <div className="header-inner rel d-flex align-items-center">
                <div className="logo-outer">
                  <div className="logo">
                    <a href="index-2.html">
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
                        <a href="index-2.html">
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
                        <li className="dropdown">
                          <a href="#">Home</a>
                          <ul>
                            <li>
                              <a href="index-2.html">Home Restauran</a>
                            </li>
                            <li>
                              <a href="index2.html">Home Pizza</a>
                            </li>
                            <li>
                              <a href="index3.html">Home Burger</a>
                            </li>
                            <li>
                              <a href="index4.html">Home Chiken</a>
                            </li>
                            <li>
                              <a href="index5.html">Juice &amp; Drinks</a>
                            </li>
                            <li>
                              <a href="index6.html">Home Grill</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Menu</a>
                          <ul>
                            <li>
                              <a href="menu-restaurant.html">Menu Restaurant</a>
                            </li>
                            <li>
                              <a href="menu-pizza.html">Menu Pizza</a>
                            </li>
                            <li>
                              <a href="menu-grill.html">Menu Gril</a>
                            </li>
                            <li>
                              <a href="menu-burger.html">Menu Burger</a>
                            </li>
                            <li>
                              <a href="menu-sea-food.html">Menu Sea Food</a>
                            </li>
                            <li>
                              <a href="menu-chicken.html">Menu Chicken</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">pages</a>
                          <ul>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="history.html">Our History</a>
                            </li>
                            <li>
                              <a href="faq.html">faqs</a>
                            </li>
                            <li className="dropdown">
                              <a href="#">chefs</a>
                              <ul>
                                <li>
                                  <a href="chefs.html">Our chefs</a>
                                </li>
                                <li>
                                  <a href="chef-details.html">chef Details</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="gallery.html">Gallery</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">blog</a>
                          <ul>
                            <li>
                              <a href="blog.html">blog standard</a>
                            </li>
                            <li>
                              <a href="blog-details.html">blog details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">shop</a>
                          <ul>
                            <li>
                              <a href="shop.html">Products</a>
                            </li>
                            <li>
                              <a href="product-details.html">Product Details</a>
                            </li>
                            <li>
                              <a href="cart.html">Shopping Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout Page</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="header-number">
                  <i className="far fa-phone" />
                  Call :{"{"}" "{"}"}
                  <a href="callto:+88012345688">+880 123 456 88</a>
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
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div className="menu-btns">
                  <button>
                    <i className="far fa-shopping-cart" /> <span>2</span>
                  </button>
                  <a href="contact.html" className="theme-btn">
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
        <div className="form-back-drop" />
        <section className="hidden-bar">
          <div className="inner-box text-center">
            <div className="cross-icon">
              <span className="fa fa-times" />
            </div>
            <div className="title">
              <h4>Get Appointment</h4>
            </div>
            <div className="appointment-form">
              <form
                method="post"
                action="https://webtendtheme.net/html/2024/wellfood/contact.html"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="text"
                    defaultValue=""
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows={5} defaultValue={""} />
                </div>
                <div className="form-group">
                  <button type="submit" className="theme-btn style-two">
                    Submit now
                  </button>
                </div>
              </form>
            </div>
            <div className="social-style-one">
              <a href="contact.html">
                <i className="fab fa-twitter" />
              </a>
              <a href="contact.html">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="contact.html">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
          </div>
        </section>
        <section
          className="hero-area bgs-cover pt-180 rpt-150 pb-100 rel z-1"
          style={{ backgroundImage: "url(assets/images/background/hero.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="hero-content text-white"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title mb-35">
                    <i className="far fa-hamburger" /> Start price Only $25
                  </span>
                  <h1>delicious food near your town</h1>
                  <p>
                    Welcome to our culinary sanctuary, where every dish tells a
                    story every bite is an adventure at our food website, we
                    invite
                  </p>
                  <a href="menu-chicken.html" className="theme-btn">
                    View All Menu <i className="far fa-arrow-alt-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="hero-images rmt-60">
                  <img src="assets/images/hero/hero-right.png" alt="Hero" />
                  <div className="price">
                    <img src="assets/images/hero/price.png" alt="Hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-shapes">
            <div className="shape one">
              <img
                src="assets/images/shapes/hero-shape1.png"
                alt="Hero Shape"
              />
            </div>
            <div className="shape two">
              <img
                src="assets/images/shapes/hero-shape2.png"
                alt="Hero Shape"
              />
            </div>
            <div className="shape three">
              <img
                src="assets/images/shapes/hero-shape3.png"
                alt="Hero Shape"
              />
            </div>
            <div className="shape four">
              <img
                src="assets/images/shapes/hero-shape4.png"
                alt="Hero Shape"
              />
            </div>
            <div className="shape five">
              <img
                src="assets/images/shapes/hero-shape5.png"
                alt="Hero Shape"
              />
            </div>
          </div>
        </section>
        <div className="headline-area pt-120 rpt-90 rel z-1">
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              <span className="marquee-item">Italian pizza</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">delicious foods</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">burger king</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Italian pizza</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">delicious foods</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">burger king</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Italian pizza</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">delicious foods</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">burger king</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
            </span>
          </span>
          <div className="headline-shapes">
            <div className="shape one">
              <img src="assets/images/shapes/chillies.png" alt="Shape" />
            </div>
            <div className="shape two">
              <img src="assets/images/shapes/tomato.png" alt="Shape" />
            </div>
          </div>
        </div>
        <section className="about-us-area pt-130 rpt-85 pb-100 rpb-70 rel z-1">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div
                  className="about-image-part mb-30 rmb-55"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                >
                  <div className="food-review">
                    <div className="author">
                      <img
                        src="assets/images/about/review-author.png"
                        alt="Author"
                      />
                    </div>
                    <span className="text">Very good food</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <img src="assets/images/about/about.jpg" alt="About" />
                  <div
                    className="quality-food"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/about-star.png)",
                    }}
                  >
                    <span className="for-border" />
                    <span className="text">
                      quality <br />
                      food
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="about-us-content"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                >
                  <div className="section-title mb-25">
                    <span className="sub-title mb-5">learn About wellfood</span>
                    <h2>the amazing &amp; Quality food for your good health</h2>
                  </div>
                  <p>
                    Welcome too restaurant, where culinary excellence meets warm
                    hospitality in every dish we serve. Nestled in the heart of
                    City Name our eatery invites you on a journey
                  </p>
                  <div className="about-btn-author pt-5 mb-45">
                    <a href="about.html" className="theme-btn style-two">
                      learn more us <i className="far fa-arrow-alt-right" />
                    </a>
                    <a href="about.html" className="read-more">
                      Explore popular menu{"{"}" "{"}"}
                      <i className="far fa-arrow-alt-right" />
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="service-item style-two">
                        <div className="icon">
                          <i className="flaticon-high-quality" />
                        </div>
                        <h5>
                          <a href="menu-burger.html">Best Quality Food</a>
                        </h5>
                        <p>
                          Our talented chefs craft each dish precision sourcing
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="service-item style-two">
                        <div className="icon">
                          <i className="flaticon-chef" />
                        </div>
                        <h5>
                          <a href="menu-burger.html">Experience our Chefs</a>
                        </h5>
                        <p>
                          Our talented chefs craft each dish precision sourcing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-shapes">
            <div className="shape one">
              <img src="assets/images/shapes/pizza-three.png" alt="Shape" />
            </div>
          </div>
        </section>
        <div className="offer-card-area">
          <div className="row no-gap row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div
              className="col"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="offer-card-item">
                <img src="assets/images/offer/good-food.png" alt="Good Food" />
                <div className="badge">Hot</div>
                <div className="image">
                  <img src="assets/images/offer/offer-card1.png" alt="Food" />
                </div>
                <span className="title">Burger</span>
                <span className="available-item">35+ Burger menu items</span>
                <div className="bg-text">
                  <span>Burger</span> <span>Burger</span> <span>Burger</span>
                </div>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="offer-card-item style-two">
                <img src="assets/images/offer/good-food.png" alt="Good Food" />
                <div className="badge">-10%</div>
                <div className="image">
                  <img src="assets/images/offer/offer-card2.png" alt="Food" />
                </div>
                <span className="title">Pizza</span>
                <span className="available-item">35+ Burger menu items</span>
                <div className="bg-text">
                  <span>Pizza</span> <span>Pizza</span> <span>Pizza</span>
                </div>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="offer-card-item">
                <img src="assets/images/offer/good-food.png" alt="Good Food" />
                <div className="badge">Hot</div>
                <div className="image">
                  <img src="assets/images/offer/offer-card3.png" alt="Food" />
                </div>
                <span className="title">hotdog</span>
                <span className="available-item">35+ Burger menu items</span>
                <div className="bg-text">
                  <span>hotdog</span> <span>hotdog</span> <span>hotdog</span>
                </div>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="offer-card-item style-two">
                <img src="assets/images/offer/good-food.png" alt="Good Food" />
                <div className="badge">-15%</div>
                <div className="image">
                  <img src="assets/images/offer/offer-card4.png" alt="Food" />
                </div>
                <span className="title">chickens</span>
                <span className="available-item">35+ Burger menu items</span>
                <div className="bg-text">
                  <span>chickens</span> <span>chickens</span>
                  {"{"}" "{"}"}
                  <span>chickens</span>
                </div>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="offer-card-item">
                <img src="assets/images/offer/good-food.png" alt="Good Food" />
                <div className="badge">Hot</div>
                <div className="image">
                  <img src="assets/images/offer/offer-card5.png" alt="Food" />
                </div>
                <span className="title">seafood</span>
                <span className="available-item">35+ Burger menu items</span>
                <div className="bg-text">
                  <span>seafood</span> <span>seafood</span> <span>seafood</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="offer-area bgc-black pt-160 rpt-100 pb-150 rpb-120 rel z-1"
          style={{
            backgroundImage: "url(assets/images/background/offer-dot-bg.png)",
          }}
        >
          <span className="marquee-wrap style-two text-white">
            <span className="marquee-inner left">special deal</span>
            <span className="marquee-inner left">special deal</span>
            <span className="marquee-inner left">special deal</span>
          </span>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="offer-content text-white rmb-55"
                  data-aos="fade-left"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="assets/images/offer/delicious.png" alt="Image" />
                  <h2>Special deal offer for this week</h2>
                  <h3>
                    grilled beef meat only <span>$59</span>
                  </h3>
                  <p>
                    Restaurant, where culinary excellence meets warm hospitality
                    in every dish we serve nestled in the heart of city
                  </p>
                  <a href="shop.html" className="theme-btn">
                    order now <i className="far fa-arrow-alt-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="offer-image"
                  data-aos="fade-right"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/offer/offer-img.png"
                    alt="Offer Image"
                  />
                  <div
                    className="offer-badge"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/offer-circle-shape.png)",
                    }}
                  >
                    <span>
                      only <br />
                      <span className="price">$59</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offer-shapes">
            <div className="shape one">
              <img src="assets/images/shapes/offer-shape1.png" alt="Shape" />
            </div>
            <div className="shape two">
              <img src="assets/images/shapes/offer-shape2.png" alt="Shape" />
            </div>
            <div className="shape three">
              <img src="assets/images/shapes/offer-shape3.png" alt="Shape" />
            </div>
          </div>
        </section>
        <div className="headline-area pt-120 rpt-90 rel z-1">
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              <span className="marquee-item">Italian pizza</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">delicious foods</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">burger king</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Italian pizza</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">delicious foods</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">burger king</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Italian pizza</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">delicious foods</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">burger king</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
            </span>
          </span>
          <div className="headline-shapes">
            <div className="shape one">
              <img src="assets/images/shapes/chillies.png" alt="Shape" />
            </div>
            <div className="shape two">
              <img src="assets/images/shapes/tomato.png" alt="Shape" />
            </div>
          </div>
        </div>
        <section className="popular-menu-area pt-105 rpt-85 pb-100 rpb-70 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div
                  className="section-title text-center mb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title mb-5">popular menu</span>
                  <h2>
                    we provide exclusive food based on usa explore our popular
                    food
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-xl-4 col-lg-6 z-3"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Red king Crab</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$25</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Alaskan king Crab</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$10</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Pizza</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$22</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Hamburger</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$43</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item mb-30">
                  <div className="content">
                    <div className="name-desc">
                      <h5>chicken soup</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$77</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 z-2"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Red king Crab</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$25</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Alaskan king Crab</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$10</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Pizza</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$22</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Hamburger</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$43</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item mb-30">
                  <div className="content">
                    <div className="name-desc">
                      <h5>chicken soup</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$77</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 z-1"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Red king Crab</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$25</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Alaskan king Crab</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$10</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Pizza</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$22</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item">
                  <div className="content">
                    <div className="name-desc">
                      <h5>Hamburger</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$43</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
                <div className="food-item mb-30">
                  <div className="content">
                    <div className="name-desc">
                      <h5>chicken soup</h5>
                      <p>Native to the icy waters of the Pacific</p>
                    </div>
                    <div className="price">
                      <span>$77</span>
                    </div>
                  </div>
                  <div className="image">
                    <img src="assets/images/food/food1.png" alt="Food Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="gallery-area rel z-1">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-sm-6">
                <div
                  className="gallery-item"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="gallery-image">
                    <img
                      src="assets/images/gallery/gallery1.jpg"
                      alt="Gallery"
                    />
                  </div>
                  <div className="gallery-content">
                    <h5>Spicy awesome pizza</h5>
                    <span className="category">Burger, Hamburger</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div
                  className="gallery-item"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="gallery-image">
                    <img
                      src="assets/images/gallery/gallery2.jpg"
                      alt="Gallery"
                    />
                  </div>
                  <div className="gallery-content">
                    <h5>Spicy awesome pizza</h5>
                    <span className="category">Burger, Hamburger</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div
                  className="gallery-item"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="gallery-image">
                    <img
                      src="assets/images/gallery/gallery3.jpg"
                      alt="Gallery"
                    />
                  </div>
                  <div className="gallery-content">
                    <h5>Spicy awesome pizza</h5>
                    <span className="category">Burger, Hamburger</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="why-choose-area bgc-lighter pt-240 rpt-150 pb-100 rpb-70 rel z-1">
          <span className="marquee-wrap style-two">
            <span className="marquee-inner left">Why choose Us</span>
            <span className="marquee-inner left">Why choose Us</span>
            <span className="marquee-inner left">Why choose Us</span>
          </span>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="why-choose-content rmb-30"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-25">
                    <span className="sub-title mb-5">Why choose us</span>
                    <h2>
                      We&nbsp;Offer&nbsp;quality service
                      That&nbsp;Customers&nbsp;Needs
                    </h2>
                  </div>
                  <p>
                    Welcome too restaurant, where culinary excellence meets warm
                    hospitality in every dish we serve. Nestled in the heart of
                    City Name our eatery invites you on a journey
                  </p>
                  <div className="about-btn-author mb-60">
                    <a href="about.html" className="theme-btn">
                      learn more us <i className="far fa-arrow-alt-right" />
                    </a>
                    <div className="author">
                      <img src="assets/images/about/author.jpg" alt="Author" />
                      <h6>
                        Ben A. Conners / <span>CEO &amp; Founder</span>
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-6">
                      <div className="counter-item counter-text-wrap">
                        <span
                          className="count-text k-plus"
                          data-speed={3000}
                          data-stop={34}
                        >
                          0
                        </span>
                        <span className="counter-title">Organic Planting</span>
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="counter-item counter-text-wrap">
                        <span
                          className="count-text plus"
                          data-speed={3000}
                          data-stop={356}
                        >
                          0
                        </span>
                        <span className="counter-title">Passionate Chef’s</span>
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="counter-item counter-text-wrap">
                        <span
                          className="count-text plus"
                          data-speed={3000}
                          data-stop={853}
                        >
                          0
                        </span>
                        <span className="counter-title">Favourite Dishes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div
                    className="col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="service-item">
                      <div className="icon">
                        <i className="flaticon-recommended-food" />
                      </div>
                      <h4>
                        <a href="menu-burger.html">Best Quality Food</a>
                      </h4>
                      <p>
                        Sed ut perspiciatis unde omnis este natus sit voluptatem
                      </p>
                    </div>
                    <div className="service-item">
                      <div className="icon">
                        <i className="flaticon-fast-delivery" />
                      </div>
                      <h4>
                        <a href="menu-burger.html">fast food delivery</a>
                      </h4>
                      <p>
                        Sed ut perspiciatis unde omnis este natus sit voluptatem
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="service-item mt-30 rmt-0">
                      <div className="icon">
                        <i className="flaticon-cashback" />
                      </div>
                      <h4>
                        <a href="menu-burger.html">money back guarantee</a>
                      </h4>
                      <p>
                        Sed ut perspiciatis unde omnis este natus sit voluptatem
                      </p>
                    </div>
                    <div className="service-item">
                      <div className="icon">
                        <i className="flaticon-dish" />
                      </div>
                      <h4>
                        <a href="menu-burger.html">100% natural food</a>
                      </h4>
                      <p>
                        Sed ut perspiciatis unde omnis este natus sit voluptatem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="headline-shapes">
            <div className="shape one">
              <img src="assets/images/shapes/chillies.png" alt="Shape" />
            </div>
            <div className="shape two">
              <img src="assets/images/shapes/tomato.png" alt="Shape" />
            </div>
            <div className="shape three">
              <img src="assets/images/shapes/pizza.png" alt="Shape" />
            </div>
          </div>
        </section>
        <div className="headline-area bgc-black pt-120 rpt-90 rel z-2">
          <span className="marquee-wrap white-text">
            <span className="marquee-inner left">
              <span className="marquee-item">Italian pizza</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">our Testimonials</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">burger king</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Italian pizza</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">our Testimonials</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">burger king</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Italian pizza</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">our Testimonials</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
              <span className="marquee-item">burger king</span>
              <span className="marquee-item">
                <i className="flaticon-star" />
              </span>
            </span>
          </span>
          <div className="headline-shapes">
            <div className="shape one">
              <img src="assets/images/shapes/chillies.png" alt="Shape" />
            </div>
            <div className="shape two">
              <img src="assets/images/shapes/tomato.png" alt="Shape" />
            </div>
          </div>
        </div>
        <section className="testimonials-area bgc-black pt-105 rpt-85 pb-130 rpb-100 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div
                  className="section-title text-white text-center mb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title mb-5">customer feedback</span>
                  <h2>what have lot’s off happy customer explore feedback</h2>
                </div>
              </div>
            </div>
            <div className="testimonials-active">
              <div
                className="testimonial-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  be prepared in various ways, from simple steaming or boiling
                  to elaborate preparations such as grilling incorporating
                </div>
                <div className="author">
                  <img
                    src="assets/images/testimonials/author1.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Steven H. Paxson</h5>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  be prepared in various ways, from simple steaming or boiling
                  to elaborate preparations such as grilling incorporating
                </div>
                <div className="author">
                  <img
                    src="assets/images/testimonials/author2.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Steven H. Paxson</h5>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  be prepared in various ways, from simple steaming or boiling
                  to elaborate preparations such as grilling incorporating
                </div>
                <div className="author">
                  <img
                    src="assets/images/testimonials/author3.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Steven H. Paxson</h5>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  be prepared in various ways, from simple steaming or boiling
                  to elaborate preparations such as grilling incorporating
                </div>
                <div className="author">
                  <img
                    src="assets/images/testimonials/author1.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Steven H. Paxson</h5>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  be prepared in various ways, from simple steaming or boiling
                  to elaborate preparations such as grilling incorporating
                </div>
                <div className="author">
                  <img
                    src="assets/images/testimonials/author2.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Steven H. Paxson</h5>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="quote">
                  <i className="flaticon-quote" />
                </div>
                <div className="text">
                  Renowned for its versatility in the kitchen, Red King Crab can
                  be prepared in various ways, from simple steaming or boiling
                  to elaborate preparations such as grilling incorporating
                </div>
                <div className="author">
                  <img
                    src="assets/images/testimonials/author3.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Steven H. Paxson</h5>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-shapes">
            <div className="shape one">
              <img src="assets/images/shapes/hero-shape4.png" alt="Shape" />
            </div>
            <div className="shape two">
              <img src="assets/images/shapes/tomato.png" alt="Shape" />
            </div>
          </div>
        </section>
        <section className="cta-area py-100 rel z-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-8">
                <div className="cta-content">
                  <div className="section-title text-white mb-20">
                    <span className="sub-title mb-5">Need any food?</span>
                    <h2>Looking for best quality food or restaurant?</h2>
                  </div>
                  <a href="contact.html" className="theme-btn style-two">
                    get a quote <i className="far fa-arrow-alt-right" />
                  </a>
                  <div
                    className="cta-badge"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/cta-shape.png)",
                    }}
                  >
                    <span>
                      quality
                      <br /> food
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="cta-bg"
            style={{ backgroundImage: "url(assets/images/background/cta.jpg)" }}
          />
        </section>
        <section className="dishes-area pt-130 rpt-100 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  className="section-title text-center mb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title mb-5">popular dishes</span>
                  <h2>explore popular menus</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-xl-3 col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="product-item-two">
                  <div className="image">
                    <img src="assets/images/dishes/dish1.png" alt="Dish" />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>(5k)</span>
                    </div>
                    <h5>
                      <a href="product-details.html">fresh chicken burger</a>
                    </h5>
                    <span className="price">
                      <del>$50</del> $25
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="product-item-two">
                  <div className="image">
                    <img src="assets/images/dishes/dish2.png" alt="Dish" />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>(5k)</span>
                    </div>
                    <h5>
                      <a href="product-details.html">pizza with mushrooms</a>
                    </h5>
                    <span className="price">
                      <del>$50</del> $25
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="product-item-two">
                  <div className="image">
                    <img src="assets/images/dishes/dish3.png" alt="Dish" />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>(5k)</span>
                    </div>
                    <h5>
                      <a href="product-details.html">
                        double burger &amp; fries
                      </a>
                    </h5>
                    <span className="price">
                      <del>$50</del> $25
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="product-item-two">
                  <div className="image">
                    <img src="assets/images/dishes/dish4.png" alt="Dish" />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>(5k)</span>
                    </div>
                    <h5>
                      <a href="product-details.html">fried chicken french</a>
                    </h5>
                    <span className="price">
                      <del>$50</del> $25
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-area pt-100 rpt-70 pb-90 rpb-60 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  className="section-title text-center mb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title mb-5">latest news &amp; blog</span>
                  <h2>get every single updates latest</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6">
                <div
                  className="blog-item"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                    <ul className="blog-meta">
                      <li>
                        <a href="#">Quality Food</a>
                      </li>
                      <li>
                        <a href="#">March 25, 2024</a>
                      </li>
                      <li>
                        <a href="#">comments (5)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="content">
                    <h4>
                      <a href="blog-details.html">
                        Culinary Chronicles Exploring Gastronomic Wonders at
                        foodking Restaurant
                      </a>
                    </h4>
                    <p>
                      Restaurant where culinary excellence meets hospitality in
                      every dish we serve settled in the heart
                    </p>
                    <a href="blog-details.html" className="read-more">
                      Read more <i className="far fa-arrow-alt-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div
                  className="blog-item"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                    <ul className="blog-meta">
                      <li>
                        <a href="#">Quality Food</a>
                      </li>
                      <li>
                        <a href="#">March 25, 2024</a>
                      </li>
                      <li>
                        <a href="#">comments (5)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="content">
                    <h4>
                      <a href="blog-details.html">
                        Culinary Chronicles Exploring Gastronomic Wonders at
                        foodking Restaurant
                      </a>
                    </h4>
                    <p>
                      Restaurant where culinary excellence meets hospitality in
                      every dish we serve settled in the heart
                    </p>
                    <a href="blog-details.html" className="read-more">
                      Read more <i className="far fa-arrow-alt-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div
                  className="blog-item"
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                    <ul className="blog-meta">
                      <li>
                        <a href="#">Quality Food</a>
                      </li>
                      <li>
                        <a href="#">March 25, 2024</a>
                      </li>
                      <li>
                        <a href="#">comments (5)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="content">
                    <h4>
                      <a href="blog-details.html">
                        Culinary Chronicles Exploring Gastronomic Wonders at
                        foodking Restaurant
                      </a>
                    </h4>
                    <p>
                      Restaurant where culinary excellence meets hospitality in
                      every dish we serve settled in the heart
                    </p>
                    <a href="blog-details.html" className="read-more">
                      Read more <i className="far fa-arrow-alt-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer
          className="main-footer bgc-black rel z-1"
          style={{
            backgroundImage: "url(assets/images/background/footer-bg.png)",
          }}
        >
          <div className="footer-top py-130 rpy-100">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-xl-7 col-lg-9"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title text-white text-center mb-35">
                    <span className="sub-title mb-10">join our newsletter</span>
                    <h2>subscribe follow our newsletter to get more updates</h2>
                  </div>
                  <form className="newsletter-form" action="#">
                    <label htmlFor="news-email">
                      <i className="fas fa-envelope" />
                    </label>
                    <input
                      id="news-email"
                      type="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <button className="theme-btn" type="submit">
                      Subscribe <i className="far fa-arrow-alt-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-area pb-70">
            <div className="container">
              <div className="row justify-content-between">
                <div
                  className="col-xl-3 col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={0}
                >
                  <div className="footer-widget footer-text">
                    <div className="footer-logo mb-25">
                      <a href="index-2.html">
                        <img src="assets/images/logos/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <p>
                      Temporibus autem quibusdam officiis aut rerum
                      necessitatibus eveniet voluta repudiandae molestiae
                      recusandae
                    </p>
                    <div className="social-style-one mt-15">
                      <a href="contact.html">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="contact.html">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="contact.html">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="contact.html">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-5 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={0}
                >
                  <div className="footer-widget footer-links">
                    <div className="footer-title">
                      <h5>popular food</h5>
                    </div>
                    <ul className="two-column">
                      <li>
                        <a href="product-details.html">Hamburger</a>
                      </li>
                      <li>
                        <a href="product-details.html">French fries</a>
                      </li>
                      <li>
                        <a href="product-details.html">Chicken pizza</a>
                      </li>
                      <li>
                        <a href="product-details.html">Onion rings</a>
                      </li>
                      <li>
                        <a href="product-details.html">Vegetable roll</a>
                      </li>
                      <li>
                        <a href="product-details.html">Chicken nuggets</a>
                      </li>
                      <li>
                        <a href="product-details.html">Sea fish</a>
                      </li>
                      <li>
                        <a href="product-details.html">Tacos Pizza</a>
                      </li>
                      <li>
                        <a href="product-details.html">Fried chicken</a>
                      </li>
                      <li>
                        <a href="product-details.html">Hot Dogs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="row justify-content-between">
                    <div
                      className="col-xl-6 col-lg-5 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={0}
                    >
                      <div className="footer-widget footer-contact">
                        <div className="footer-title">
                          <h5>contact us</h5>
                        </div>
                        <ul>
                          <li>
                            1403 Washington Ave, New Orlea ns, LA 70130, United
                            States
                          </li>
                          <li>
                            <a href="mailto:wellfood@gmail.com">
                              <u>wellfood@gmail.com</u>
                            </a>
                          </li>
                          <li>
                            <a href="callto:+(1)0987654321">
                              +(1) 098 765 4321
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="col-xl-6 col-lg-5 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={150}
                      data-aos-duration={1500}
                      data-aos-offset={0}
                    >
                      <div className="footer-widget opening-hour">
                        <div className="footer-title">
                          <h5>opening hour</h5>
                        </div>
                        <ul>
                          <li>
                            Monday – Friday: <span>8am – 4pm</span>
                          </li>
                          <li>
                            Saturday: <span>8am – 12am</span>
                          </li>
                        </ul>
                        <div className="any-question mt-20">
                          <h5>Have any questions?</h5>
                          <a href="#" className="theme-btn style-two">
                            let’s talk us{" "}
                            <i className="far fa-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom pt-30 pb-15">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="copyright-text text-center text-lg-start">
                    <p>
                      Copyright 2024 <a href="index-2.html">Wellfood</a>. All
                      Rights Reserved{"{"}" "{"}"}
                    </p>
                  </div>
                </div>
                <div className="col-lg-7 text-center text-lg-end">
                  <ul className="footer-bottom-nav">
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Condition</a>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                className="scroll-top scroll-to-target"
                data-target="html"
              >
                <i className="fas fa-arrow-alt-up" />
              </button>
            </div>
          </div>
          <div className="footer-shapes">
            <div className="shape one">
              <img src="assets/images/shapes/hero-shape5.png" alt="Shape" />
            </div>
            <div className="shape two">
              <img src="assets/images/shapes/tomato.png" alt="Shape" />
            </div>
            <div className="shape three">
              <img src="assets/images/shapes/pizza-two.png" alt="Shape" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default index;
