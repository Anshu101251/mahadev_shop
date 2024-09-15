import HeaderFooterWrapper from "../../../component/layouts/headerFooterWrapper";

const Product = () => {
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
                Shop With sidebar
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
                  <li className="breadcrumb-item active">Shop With sidebar</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* Shop Area Start */}
        <section className="shop-area py-130 rpy-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-8">
                <div className="shop-sidebar rmb-75">
                  <div
                    className="widget widget-search"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="widget-title">Search</h4>
                    <form action="#" className="default-search-form">
                      <input
                        type="text"
                        placeholder="Search here"
                        required=""
                      />
                      <button
                        type="submit"
                        className="searchbutton far fa-search"
                      />
                    </form>
                  </div>
                  <div
                    className="widget widget-category"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="widget-title">Category</h4>
                    <ul>
                      <li>
                        <a href="shop.html">
                          Beef &amp; Chicken Hamburger{" "}
                          <span className="count">8</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          Italian Pizza <span className="count">3</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          Sandwich <span className="count">5</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          Chicken Roll <span className="count">2</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          Soup <span className="count">5</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="widget widget-filter"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="widget-title">Pricing</h4>
                    <div className="price-filter-wrap">
                      <div className="" />
                      <div className="price">
                        <span>Price </span>
                        <input type="text" id="price" readOnly="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="widget widget-products"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="widget-title">Best Seller</h4>
                    <ul>
                      <li>
                        <div className="image">
                          <img
                            src="assets/images/widgets/product1.jpg"
                            alt="Product"
                          />
                        </div>
                        <div className="content">
                          <div className="ratting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <h6>
                            <a href="product-details.html">
                              Vegetable Hamburger
                            </a>
                          </h6>
                          <span className="price">$58.63</span>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <img
                            src="assets/images/widgets/product2.jpg"
                            alt="Product"
                          />
                        </div>
                        <div className="content">
                          <div className="ratting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <h6>
                            <a href="product-details.html">
                              Italian Chicken Pizza
                            </a>
                          </h6>
                          <span className="price">$83.25</span>
                        </div>
                      </li>
                      <li>
                        <div className="image">
                          <img
                            src="assets/images/widgets/product3.jpg"
                            alt="Product"
                          />
                        </div>
                        <div className="content">
                          <div className="ratting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <h6>
                            <a href="product-details.html">
                              Crab Seafood sauce
                            </a>
                          </h6>
                          <span className="price">$83.25</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="widget widget-tag-cloud"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="widget-title">Popular Tags</h4>
                    <div className="tag-coulds">
                      <a href="shop.html">Spicy</a>
                      <a href="shop.html">Seafoods</a>
                      <a href="shop.html">Burger</a>
                      <a href="shop.html">Pizza</a>
                      <a href="shop.html">Soup</a>
                      <a href="shop.html">Crap</a>
                      <a href="shop.html">Juice</a>
                      <a href="shop.html">Bread</a>
                    </div>
                  </div>
                  <div
                    className="widget widget-banner"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div
                      className="category-banner-item"
                      style={{
                        backgroundImage:
                          "url(assets/images/widgets/banner-bg.jpg)",
                      }}
                    >
                      <span className="price">only $59</span>
                      <h3>SPECIALTY PIZZAS</h3>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>(5k)</span>
                      </div>
                      <a href="shop.html" className="theme-btn style-two">
                        Order now <i className="far fa-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="shop-page-wrap">
                  <div className="shop-shorter rel z-3 mb-35">
                    <div
                      className="sort-text mb-15"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      Showing 1–12 of 27 results
                    </div>
                    <div
                      className="products-dropdown mb-15"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <select>
                        <option value="default" selected="">
                          Default Sorting
                        </option>
                        <option value="new">Newness Sorting</option>
                        <option value="old">Oldest Sorting</option>
                        <option value="hight-to-low">High To Low</option>
                        <option value="low-to-high">Low To High</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish1.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              fresh chicken burger
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish2.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              pizza with mushrooms
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish3.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              double burger &amp; fries
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish5.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              Italian beef pizza
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish6.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              fried chicken burger
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish4.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              fried chicken french
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish7.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              fried chicken french
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish8.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              fried chicken drench
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish9.png"
                            alt="Dish"
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
                            <a href="product-details.html">roasted chicken</a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish10.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              Italian beef pizza
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish11.png"
                            alt="Dish"
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
                            <a href="product-details.html">
                              Italian beef pizza
                            </a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item-two">
                        <div className="image">
                          <img
                            src="assets/images/dishes/dish12.png"
                            alt="Dish"
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
                            <a href="product-details.html">top fried chicken</a>
                          </h5>
                          <span className="price">
                            <del>$50</del> $25
                          </span>
                        </div>
                        <a href="shop.html" className="theme-btn">
                          add to cart <i className="far fa-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="pagination pt-30 flex-wrap"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <li className="page-item disabled">
                      <span className="page-link">
                        <i className="fal fa-arrow-left" />
                      </span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">
                        1<span className="sr-only">(current)</span>
                      </span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fal fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Shop Area End */}
      </>
    </HeaderFooterWrapper>
  );
};
export default Product;
