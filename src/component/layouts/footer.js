import React from "react";

const Footer = () => {
  return (
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
                  <a href="/">
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </a>
                </div>
                <p>
                  Temporibus autem quibusdam officiis aut rerum necessitatibus
                  eveniet voluta repudiandae molestiae recusandae
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
                        <a href="callto:+(1)0987654321">+(1) 098 765 4321</a>
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
                        let’s talk us <i className="far fa-arrow-alt-right" />
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
                  Copyright 2024 <a href="index-2.html">Wellfood</a>. All Rights
                  Reserved{"{"}" "{"}"}
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
          <button className="scroll-top scroll-to-target" data-target="html">
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
  );
};

export default Footer;
