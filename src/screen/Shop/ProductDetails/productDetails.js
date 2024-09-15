import HeaderFooterWrapper from "../../../component/layouts/headerFooterWrapper";

const ProductDetail = () => {
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
                single product
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
                  <li className="breadcrumb-item active">single product</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* Product Details Start */}
        <section className="product-details pb-10 pt-130 rpt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="product-details-image rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/products/product-details.jpg"
                    alt="Product Details"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="product-details-content"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title">
                    <h2>Italian beef pizza</h2>
                  </div>
                  <span className="price mb-15">$58.63</span>
                  <div className="ratting mb-40">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>4.9(Customer Reivews)</span>
                  </div>
                  <p>
                    Quis ipsum sed et proin sit aliquet in quis aliqu
                    ullamcorper sollicitudin quis ut sedorbi dui porttitor duis
                    porttitore fringilla. Estauris purus vita volutpat. Estorem
                    felis mau libero nisi. Rhoncus phasellus facilisi praesent
                    venenatis
                  </p>
                  <form action="#" className="add-to-cart py-25">
                    <h5>Quantity</h5>
                    <input
                      type="number"
                      defaultValue={2}
                      min={1}
                      max={20}
                      onchange="if(parseInt(this.value,10)<10)this.value='0'+this.value;"
                      required=""
                    />
                    <button type="submit" className="theme-btn mb-15">
                      Add to Cart <i className="far fa-arrow-alt-right" />
                    </button>
                  </form>
                  <ul className="category-tags pt-20 pb-30">
                    <li>
                      <h6>Categories</h6> :<a href="#">Restaurant</a>
                    </li>
                    <li>
                      <h6>Tags </h6> :<a href="#">Pizza</a>
                      <a href="#">Burger</a>
                      <a href="#">Soup</a>
                    </li>
                  </ul>
                  <div className="social-style-one">
                    <h5>Share</h5>
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
              </div>
            </div>
            <ul
              className="nav nav tab-style-one mt-125 rmt-95 mb-40"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li>
                <a href="#details" data-bs-toggle="tab" className="active show">
                  Descrptions
                </a>
              </li>
              <li>
                <a href="#information" data-bs-toggle="tab">
                  Additional Information's
                </a>
              </li>
              <li>
                <a href="#reviews" data-bs-toggle="tab">
                  Reviews(3)
                </a>
              </li>
            </ul>
            <div
              className="tab-content pb-60"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="tab-pane fade active show" id="details">
                <p>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor nulla id sit neque scelerisque pulvinar. Mus amet
                  interdum turpis consequat adipiscing. Elementum feugiat sed
                  duis consectetur varius et cras mattis. Lobortis auctor sit in
                  eu nisl fusce augue venenatis, dui. Phasellus eget sagittis
                  mauris, nibh augue cursus pellentesque amet elementum.
                  Tristique amet sollicitudin sit nulla aliquam, imperdiet sed
                  ut diam. Suspendisse ipsum rhoncus nulla lectus. Id neque in
                  urna neque non amet. Tortor sed aliquam in faucibus enim,
                  posuere. Sed et accumsan, neque posuere tempus in cras. Ornare
                  lectus pretium, est eget purus, enim quam purus netus. Turpis
                  nunc
                </p>
                <p>
                  Dictum ultrices et suspendisse amet mattis in pellentesque.
                  Vulputate arcu, consectetur odio donec nec duis ultrices
                  facilisi. Mauris cursus elit diam, urna suspendisse et, amet.
                  Vitae ligula ultrices nulla justo, enim lorem duis. Volutpat
                  sit et neque, aliquam, diam at at neque. Lacus augue
                </p>
              </div>
              <div className="tab-pane fade" id="information">
                <p>
                  Circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us
                  ever undertakes laborious physical exercise, except to obtain
                  some advantage from it? But who has any right to find fault
                  with a man who chooses
                </p>
                <ul className="list-style-one mt-20 mb-15">
                  <li>Fresh Chicken Burger</li>
                  <li>Pizza With Mushrooms</li>
                  <li>Double Burger &amp; Fries</li>
                </ul>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </p>
              </div>
              <div className="tab-pane fade" id="reviews">
                <h5>Reviews (3)</h5>
                <div className="comments rattings mt-25">
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/products/product-comment1.jpg"
                        alt="Author"
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
                      <ul className="comment-header">
                        <li>
                          <h6>Daniel A. Hayes</h6>
                        </li>
                        <li>15 Jan 2024</li>
                      </ul>
                      <p>
                        SaaS, or Software as a Service, is a cloud-based
                        software delivery model where applications are hosted by
                        a third-party provider and accessed via the internet. It
                        offers benefits such as scalability, cost-effectiveness
                      </p>
                    </div>
                  </div>
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/products/product-comment2.jpg"
                        alt="Author"
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
                      <ul className="comment-header">
                        <li>
                          <h6>Daniel A. Hayes</h6>
                        </li>
                        <li>15 Jan 2024</li>
                      </ul>
                      <p>
                        SaaS, or Software as a Service, is a cloud-based
                        software delivery model where applications are hosted by
                        a third-party provider and accessed via the internet. It
                        offers benefits such as scalability, cost-effectiveness
                      </p>
                    </div>
                  </div>
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/products/product-comment3.jpg"
                        alt="Author"
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
                      <ul className="comment-header">
                        <li>
                          <h6>Daniel A. Hayes</h6>
                        </li>
                        <li>15 Jan 2024</li>
                      </ul>
                      <p>
                        SaaS, or Software as a Service, is a cloud-based
                        software delivery model where applications are hosted by
                        a third-party provider and accessed via the internet. It
                        offers benefits such as scalability, cost-effectiveness
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Details End */}
        {/* Review Form Start */}
        <section className="review-form-area">
          <div className="container">
            <form
              id="review-form"
              className="review-form z-1 rel"
              name="review-form"
              action="#"
              method="post"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5>Add a review</h5>
              <p>3 reviews for&nbsp;Blue Stripes &amp; Stone Earrings</p>
              <div className="row mt-25">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      className="form-control"
                      defaultValue=""
                      placeholder="Full Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email-address"
                      name="email"
                      className="form-control"
                      defaultValue=""
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      defaultValue=""
                      placeholder="Phone Number"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={4}
                      placeholder="Write Message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-0">
                    <div className="ratting d-flex mb-25">
                      <b>Add Reviews</b>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <button type="submit" className="theme-btn">
                      Send Reviews <i className="fas fa-angle-double-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* Review Form End */}
        {/* Related Products Area start */}
        <section className="related-products-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  className="section-title text-center mb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2>Related Product</h2>
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
        {/* Related Products Area end */}
      </>
    </HeaderFooterWrapper>
  );
};

export default ProductDetail;
