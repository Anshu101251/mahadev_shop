import React from "react";
import HeaderFooterWrapper from "../../component/layouts/headerFooterWrapper";

const Contact = () => {
  return (
    <HeaderFooterWrapper>
      <>
        {/*Form Back Drop*/}
        <div className="form-back-drop" />
        {/* Hidden Sidebar */}
        <section className="hidden-bar">
          <div className="inner-box text-center">
            <div className="cross-icon">
              <span className="fa fa-times" />
            </div>
            <div className="title">
              <h4>Get Appointment</h4>
            </div>
            {/*Appointment Form*/}
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
            {/*Social Icons*/}
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
        {/*End Hidden Sidebar */}
        {/* Page Banner Start */}
        <section
          className="page-banner-area overlay pt-215 rpt-150 pb-160 rpb-120 rel z-1 bgs-cover text-center"
          style={{
            backgroundImage: "url(assets/images/background/banner.jpg)",
          }}
        >
          <div className="container">
            <div className="banner-inner text-white">
              <h1
                className="page-title"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Menu Fried Chicken
              </h1>
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Menu Fried Chicken</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* About Us Area start */}
        <section className="about-us-area pt-130 rpt-100 pb-90 rpb-60 rel z-1">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div
                  className="about-image-four style-two mb-30"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="row">
                    <div className="col">
                      <img
                        src="assets/images/about/menu-chicken1.jpg"
                        alt="About"
                      />
                    </div>
                    <div className="col mt-80">
                      <img
                        src="assets/images/about/menu-chicken2.jpg"
                        alt="About"
                      />
                    </div>
                  </div>
                  <div className="badge">
                    <img
                      src="assets/images/about/about-four-badge.jpg"
                      alt="Badge"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="about-us-content"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
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
                  <div className="about-btn-author pt-5 mb-60">
                    <a href="about.html" className="theme-btn style-two">
                      learn more us <i className="far fa-arrow-alt-right" />
                    </a>
                    <a href="about.html" className="read-more">
                      Explore popular menu{" "}
                      <i className="far fa-arrow-alt-right" />
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-6">
                      <div className="counter-item style-two counter-text-wrap">
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
                      <div className="counter-item style-two counter-text-wrap">
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
                      <div className="counter-item style-two counter-text-wrap">
                        <span
                          className="count-text plus"
                          data-speed={3000}
                          data-stop={8534}
                        >
                          0
                        </span>
                        <span className="counter-title">Favourite Dishes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Us Area end */}
        {/* Headline area start */}
        <div className="headline-area mb-105 rmb-85 rel z-1">
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
              <img src="assets/images/shapes/tomato.png" alt="Shape" />
            </div>
            <div className="shape two">
              <img src="assets/images/shapes/burger.png" alt="Shape" />
            </div>
          </div>
        </div>
        {/* Headline Area end */}
        {/* Restaurant Menu Area start */}
        <section className="restaurant-menu-area pb-130 rpb-100 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9">
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
            <ul
              className="nav food-menu-tab mb-40"
              role="tablist"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li>
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#food-tab1"
                >
                  <i className="flaticon-cupcake" />
                  <span>dessert</span>
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#food-tab2"
                >
                  <i className="flaticon-broccoli" />
                  <span>vegetarian</span>
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#food-tab3"
                >
                  <i className="flaticon-fried-potatoes" />
                  <span>potatoes</span>
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#food-tab4"
                >
                  <i className="flaticon-crab" />
                  <span>seafood</span>
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#food-tab5"
                >
                  <i className="flaticon-poinsettia" />
                  <span>drinks</span>
                </button>
              </li>
            </ul>
            <div className="food-menu-tab-content tab-content">
              <div className="tab-pane fade show active" id="food-tab1">
                <div className="row no-gap">
                  <div
                    className="col-lg-6"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu1.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu2.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu3.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">chicken steak</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu4.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu5.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu6.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu7.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu8.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu9.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu10.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="food-tab2">
                <div className="row no-gap">
                  <div className="col-lg-6">
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu9.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu2.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu1.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu3.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">chicken steak</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu4.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu10.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu6.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu5.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">red crawfish</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu7.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu8.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="food-tab3">
                <div className="row no-gap">
                  <div className="col-lg-6">
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu3.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">chicken steak</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu1.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu10.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu2.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu4.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu7.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu5.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">red crawfish</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu9.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu6.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu8.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="food-tab4">
                <div className="row no-gap">
                  <div className="col-lg-6">
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu4.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu1.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu2.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu3.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">chicken steak</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu9.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu8.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu5.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">red crawfish</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu6.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu7.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu10.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="food-tab5">
                <div className="row no-gap">
                  <div className="col-lg-6">
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu7.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu10.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu1.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu2.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu4.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Chicken baked</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="popular-menu-wrap">
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu3.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">chicken steak</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu9.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu5.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">red crawfish</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu6.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Fried chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                      <div className="food-menu-item style-two">
                        <div className="image">
                          <img
                            src="assets/images/food/chicken-menu8.png"
                            alt="Burger Menu"
                          />
                        </div>
                        <div className="content">
                          <h5>
                            <span className="title">Grille chicken</span>{" "}
                            <span className="dots" />{" "}
                            <span className="price">$25</span>
                          </h5>
                          <p>Diverse menu features array of delectable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-shapes">
            <div className="shape one">
              <img src="assets/images/shapes/chicken-menu1.png" alt="Shape" />
            </div>
            <div className="shape two">
              <img src="assets/images/shapes/chicken-menu2.png" alt="Shape" />
            </div>
          </div>
        </section>
        {/* Restaurant Menu Area end */}
        {/* Offer Card Area start */}
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
                  <span>chickens</span> <span>chickens</span>{" "}
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
        {/* Offer Card Area end */}
      </>
    </HeaderFooterWrapper>
  );
};

export default Contact;
