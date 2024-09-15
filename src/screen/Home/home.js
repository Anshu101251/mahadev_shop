import React from "react";
import HeaderFooterWrapper from "../../component/layouts/headerFooterWrapper";

const Home = () => {
  return (
    <HeaderFooterWrapper>
      {/* <div className="preloader">
          <div className="custom-loader" />
        </div> */}

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
            <a href="/#">
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
                  <i className="far fa-hamburger" /> Start price Only ₹25
                </span>
                <h1>delicious Sweet near your town</h1>
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
                <img src="assets/images/sweet/sweet-group.jpg" alt="Hero" />
                <div className="price">
                  <img src="assets/images/hero/price.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape1.png" alt="Hero Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape2.png" alt="Hero Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/hero-shape3.png" alt="Hero Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/hero-shape4.png" alt="Hero Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/hero-shape5.png" alt="Hero Shape" />
          </div>
        </div>
      </section>

      <>
        <section className="pood-filter-area bgc-lighter pt-30 rpt-80 pb-100 rpb-70 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9">
                <div className="section-title text-center mb-50">
                  <span className="sub-title mb-5">product gallery</span>
                  <h2>explore latest product gallery</h2>
                </div>
              </div>
            </div>
            <ul
              className="nav product-filter-nav filter-btns-one justify-content-center mb-40"
              role="tablist"
            >
              <li className="active" data-filter="*">
                Show All
              </li>
              <li data-filter=".juice">Matka Sweet</li>
              <li data-filter=".shakes">Rasagulla</li>
              <li data-filter=".coffee">Rasmalai</li>
              <li data-filter=".ice-cream">Burfi</li>
            </ul>
            <div className="row product-filter-active">
              <div className="col-xl-3 col-lg-4 col-sm-6 item shakes ice-cream">
                <div className="product-item-two">
                  <div className="image">
                    <img src="assets/images/sweet/rasmalai.png" alt="Food" />
                    <span className="pizza-badge">-10%</span>
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
                      <a href="product-details.html">Yellow Rasmalai</a>
                    </h5>
                    <span className="price">
                      <del>₹50</del> ₹25
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 item juice coffee">
                <div className="product-item-two">
                  <div className="image">
                    <img
                      src="assets/images/sweet/kaju-katli.webp"
                      alt="Food"
                      height="152px"
                    />
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
                      <a href="product-details.html">Kaju Katli</a>
                    </h5>
                    <span className="price">
                      <del>₹50</del> ₹25
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 item shakes coffee ice-cream">
                <div className="product-item-two">
                  <div className="image">
                    <img src="assets/images/sweet/Rasagulla.png" alt="Food" />
                    <span className="pizza-badge">hot</span>
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
                      <a href="product-details.html">White Rasagulla</a>
                    </h5>
                    <span className="price">
                      <del>₹50</del> ₹25
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 item juice ice-cream">
                <div className="product-item-two">
                  <div className="image">
                    <img
                      src="assets/images/sweet/gulab-janum.jpg"
                      alt="Food"
                      height="152px"
                    />
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
                      <a href="product-details.html">Gulab Jamun</a>
                    </h5>
                    <span className="price">
                      <del>₹50</del> ₹25
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 item shakes">
                <div className="product-item-two">
                  <div className="image">
                    <img
                      src="assets/images/sweet/khoya-burfi.webp"
                      alt="Food"
                      height="152px"
                    />
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
                      <a href="product-details.html">Khoya Burfi</a>
                    </h5>
                    <span className="price">
                      <del>₹50</del> ₹25
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 item juice coffee">
                <div className="product-item-two">
                  <div className="image">
                    <img
                      src="assets/images/sweet/milk-cake.webp"
                      alt="Food"
                      height="152px"
                    />
                    <span className="pizza-badge">-10%</span>
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
                      <a href="product-details.html">Milk Cake</a>
                    </h5>
                    <span className="price">
                      <del>₹50</del> ₹25
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 item ice-cream juice">
                <div className="product-item-two">
                  <div className="image">
                    <img
                      src="assets/images/sweet/motichur-laddu.png"
                      alt="Food"
                    />
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
                      <a href="product-details.html">Motichur Laddu</a>
                    </h5>
                    <span className="price">
                      <del>₹50</del> ₹25
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 item coffee shakes">
                <div className="product-item-two">
                  <div className="image">
                    <img
                      src="assets/images/sweet/matka-kulfi.jpg"
                      alt="Food"
                      height="152px"
                    />
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
                      <a href="product-details.html">Matka Kulfi</a>
                    </h5>
                    <span className="price">
                      <del>₹50</del> ₹25
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Filtarabe Food Area end */}
      </>

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
                <img src="assets/images/about/about.png" alt="About" />
                <div
                  className="quality-food"
                  style={{
                    backgroundImage: "url(assets/images/shapes/about-star.png)",
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
                  <a href="/about" className="theme-btn style-two">
                    learn more us <i className="far fa-arrow-alt-right" />
                  </a>
                  <a href="/about" className="read-more">
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
                <img
                  src="assets/images/sweet/sweets.png"
                  alt="Food"
                  width="230px"
                  height="220px"
                />
              </div>
              <span className="title">Sweets</span>
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
                <img src="assets/images/sweet/samosa.png" alt="Food" />
              </div>
              <span className="title">Samosa</span>
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
                <img src="assets/images/sweet/chowmein.png" alt="Food" />
              </div>
              <span className="title">Chowmein</span>
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
                <img src="assets/images/offer/delicious.png" alt="delicious" />
                <h2>Special deal offer for this week</h2>
                <h3>
                  Hot Fresh Samosa and Jalebi <span>₹59</span>
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
                <img src="assets/images/sweet/samosa-jalebi.png" alt="Offer" />
                <div
                  className="offer-badge"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/offer-circle-shape.png)",
                  }}
                >
                  <span>
                    only <br />
                    <span className="price">₹59</span>
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
                    <span>₹25</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Alaskan king Crab</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹10</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Pizza</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹22</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Hamburger</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹43</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item mb-30">
                <div className="content">
                  <div className="name-desc">
                    <h5>chicken soup</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹77</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
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
                    <span>₹25</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Alaskan king Crab</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹10</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Pizza</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹22</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Hamburger</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹43</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item mb-30">
                <div className="content">
                  <div className="name-desc">
                    <h5>chicken soup</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹77</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
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
                    <span>₹25</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Alaskan king Crab</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹10</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Pizza</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹22</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item">
                <div className="content">
                  <div className="name-desc">
                    <h5>Hamburger</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹43</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
              <div className="food-item mb-30">
                <div className="content">
                  <div className="name-desc">
                    <h5>chicken soup</h5>
                    <p>Native to the icy waters of the Pacific</p>
                  </div>
                  <div className="price">
                    <span>₹77</span>
                  </div>
                </div>
                <div className="image">
                  <img src="assets/images/food/food1.png" alt="Food" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <a href="/about" className="theme-btn">
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
    </HeaderFooterWrapper>
  );
};

export default Home;
