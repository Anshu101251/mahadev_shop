import React from "react";
import HeaderFooterWrapper from "../../component/layouts/headerFooterWrapper";

const About = () => {
  return (
    <HeaderFooterWrapper>
      <div className="form-back-drop" />
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
              About company
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
                <li className="breadcrumb-item active">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* About Us Area start */}
      <section className="about-us-area-four pt-130 rpt-100 pb-85 rpb-55 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-us-content ms-0 rmb-25"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">learn About wellfood</span>
                  <h2>we provide best Quality food for your health</h2>
                </div>
                <p>
                  Welcome too restaurant, where culinary excellence meets warm
                  hospitality in every dish we serve. Nestled in the heart of
                  City Name our eatery invites you on a journey
                </p>
                <a href="about.html" className="theme-btn mt-25 mb-60">
                  learn more us <i className="far fa-arrow-alt-right" />
                </a>
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
            <div className="col-lg-6">
              <div
                className="about-image-four style-two mb-30"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row">
                  <div className="col">
                    <img
                      src="assets/images/about/about-four1.jpg"
                      alt="About"
                    />
                  </div>
                  <div className="col mt-80">
                    <img
                      src="assets/images/about/about-four2.jpg"
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
      {/* Food Category Area start */}
      <section className="food-category-area pb-90 rpb-65 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular food category</span>
                <h2>
                  we provide amazing &amp; Quality food for your good health
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="featured-item">
                <div className="icon">
                  <i className="flaticon-recommended-food" />
                </div>
                <div className="content">
                  <h4>
                    <a href="menu-restaurant.html">Best Quality Food</a>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis este natus sit voluptatem
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="featured-item">
                <div className="icon">
                  <i className="flaticon-fast-delivery" />
                </div>
                <div className="content">
                  <h4>
                    <a href="menu-restaurant.html">fast food delivery</a>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis este natus sit voluptatem
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="featured-item">
                <div className="icon">
                  <i className="flaticon-cashback" />
                </div>
                <div className="content">
                  <h4>
                    <a href="menu-restaurant.html">money back guarantee</a>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis este natus sit voluptatem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Category Area end */}
      {/* Booking Table Area start */}
      <section
        className="booking-table-area-two bgs-cover py-100 rel z-1 overlay"
        style={{
          backgroundImage:
            "url(assets/images/background/booking-table-two.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="booking-table-form mb-0"
                style={{
                  backgroundImage: "url(assets/images/background/form-bg.png)",
                }}
              >
                <div className="section-title">
                  <h2>book a table</h2>
                </div>
                <p>Enjoy your food to book your table</p>
                <form
                  id="booking-form"
                  className="booking-form mt-25"
                  name="booking-form"
                  method="post"
                >
                  <div className="row gap-20">
                    <div className="col-md-12 mb-20">
                      <div className="form-group">
                        <select name="person" id="person">
                          <option value="option2">2 Person</option>
                          <option value="option3">3 Person</option>
                          <option value="option4">4 Person</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="date">
                          <i className="far fa-calendar-alt" />
                        </label>
                        <input
                          type="text"
                          id="date"
                          name="date"
                          className="form-control"
                          defaultValue=""
                          placeholder="Date"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="time">
                          <i className="far fa-clock" />
                        </label>
                        <input
                          type="text"
                          id="time"
                          name="time"
                          className="form-control"
                          defaultValue=""
                          placeholder="Time"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          book your table{" "}
                          <i className="far fa-arrow-alt-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="booking-table-content style-two rmt-55">
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
                <div className="section-title mt-50 text-white mb-50">
                  <h2>
                    We&nbsp;Offer&nbsp;quality service That&nbsp;Customers Needs
                    for health food
                  </h2>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Table Area end */}
      {/* Chefs Area start */}
      <section className="chefs-area pt-130 rpt-100 pb-55 rpb-30 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">professional chefs</span>
                <h2>we have professionals team member meet our expert chefs</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef1.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <a href="chef-details.html">Nolan E. Barrera</a>
                  </h5>
                  <span>Senior Chef</span>
                  <a href="chef-details.html" className="more-btn">
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef2.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <a href="chef-details.html">William B. Nguyen</a>
                  </h5>
                  <span>Senior Chef</span>
                  <a href="chef-details.html" className="more-btn">
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef3.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <a href="chef-details.html">Michael A. Coulson</a>
                  </h5>
                  <span>Senior Chef</span>
                  <a href="chef-details.html" className="more-btn">
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="chefs-item"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/chefs/chef4.jpg" alt="Chef" />
                </div>
                <div className="description">
                  <h5>
                    <a href="chef-details.html">Brent M. Powers</a>
                  </h5>
                  <span>Senior Chef</span>
                  <a href="chef-details.html" className="more-btn">
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Chefs Area end */}
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
      {/* Features Two area start */}
      <div className="feature-two-area pb-130 rpb-100">
        <div className="container-fluid">
          <div className="row no-gap">
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature1.jpg" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Private dining</h3>
                <p>
                  The duration of a consulting engagement varies depending on
                  the scope and complexity of the project.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Testy and quality food</li>
                  <li>Fast food delivery</li>
                  <li>Awards winning restuarent</li>
                </ul>
                <a href="shop.html" className="theme-btn style-two">
                  book now <i className="far fa-arrow-alt-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 offset-xl-4">
              <div
                className="feature-two-image"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature2.jpg" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>The Raw Bar</h3>
                <p>
                  The duration of a consulting engagement varies depending on
                  the scope and complexity of the project.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Testy and quality food</li>
                  <li>Fast food delivery</li>
                  <li>Awards winning restuarent</li>
                </ul>
                <a href="shop.html" className="theme-btn style-two">
                  book now <i className="far fa-arrow-alt-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/features/feature3.jpg" alt="Feature" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="feature-two-content"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>Outdoor catering</h3>
                <p>
                  The duration of a consulting engagement varies depending on
                  the scope and complexity of the project.
                </p>
                <ul className="list-style-one pt-5 mb-30">
                  <li>Testy and quality food</li>
                  <li>Fast food delivery</li>
                  <li>Awards winning restuarent</li>
                </ul>
                <a href="shop.html" className="theme-btn style-two">
                  book now <i className="far fa-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Two area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-lighter pt-120 rpt-90 rel z-2">
        <span className="marquee-wrap">
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
      {/* Headline Area end */}
      {/* Testimonials Area start */}
      <section className="testimonials-area bgc-lighter pt-105 rpt-85 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
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
                be prepared in various ways, from simple steaming or boiling to
                elaborate preparations such as grilling incorporating
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
                be prepared in various ways, from simple steaming or boiling to
                elaborate preparations such as grilling incorporating
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
                be prepared in various ways, from simple steaming or boiling to
                elaborate preparations such as grilling incorporating
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
                be prepared in various ways, from simple steaming or boiling to
                elaborate preparations such as grilling incorporating
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
                be prepared in various ways, from simple steaming or boiling to
                elaborate preparations such as grilling incorporating
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
                be prepared in various ways, from simple steaming or boiling to
                elaborate preparations such as grilling incorporating
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
    </HeaderFooterWrapper>
  );
};

export default About;
