import HeaderFooterWrapper from "../../../component/layouts/headerFooterWrapper";

const Cart = () => {
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
                Shopping Cart
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
                  <li className="breadcrumb-item active">Shopping Cart</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* Shopping Cart Area start */}
        <section className="shopping-cart-area py-130 rel z-1">
          <div className="container">
            <div className="shoping-table mb-50 wow fadeInUp delay-0-2s">
              <table>
                <thead>
                  <tr>
                    <th>Images</th>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="assets/images/widgets/news1.jpg"
                        alt="Product"
                      />
                    </td>
                    <td>
                      <span className="title">Shopping Cart</span>
                    </td>
                    <td>
                      <span className="price">70</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button className="quantity-down">--</button>
                        <input
                          className="quantity"
                          type="text"
                          defaultValue={1}
                          name="quantity"
                        />
                        <button className="quantity-up">+</button>
                      </div>
                    </td>
                    <td>
                      <b className="price">70</b>
                    </td>
                    <td>
                      <button type="button" className="close">
                        ×
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="assets/images/widgets/news2.jpg"
                        alt="Product"
                      />
                    </td>
                    <td>
                      <span className="title">Chicken Soup</span>
                    </td>
                    <td>
                      <span className="price">65</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button className="quantity-down">--</button>
                        <input
                          className="quantity"
                          type="text"
                          defaultValue={2}
                          name="quantity"
                        />
                        <button className="quantity-up">+</button>
                      </div>
                    </td>
                    <td>
                      <b className="price">130</b>
                    </td>
                    <td>
                      <button type="button" className="close">
                        ×
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="assets/images/widgets/news3.jpg"
                        alt="Product"
                      />
                    </td>
                    <td>
                      <span className="title">Red king Crab</span>
                    </td>
                    <td>
                      <span className="price">80</span>
                    </td>
                    <td>
                      <div className="quantity-input">
                        <button className="quantity-down">--</button>
                        <input
                          className="quantity"
                          type="text"
                          defaultValue={3}
                          name="quantity"
                        />
                        <button className="quantity-up">+</button>
                      </div>
                    </td>
                    <td>
                      <b className="price">80</b>
                    </td>
                    <td>
                      <button type="button" className="close">
                        ×
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row text-center text-lg-left align-items-center">
              <div className="col-lg-6">
                <div className="discount-wrapper mb-30 wow fadeInLeft delay-0-2s">
                  <form
                    action="#"
                    className="d-sm-flex justify-content-center justify-content-lg-start"
                  >
                    <input type="text" placeholder="Coupon Code" required="" />
                    <button className="theme-btn flex-none" type="submit">
                      apply Coupon <i className="fas fa-angle-double-right" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="update-shopping mb-30 text-lg-end wow fadeInRight delay-0-2s">
                  <a href="shop.html" className="theme-btn style-two my-5">
                    shopping <i className="fas fa-angle-double-right" />
                  </a>
                  <a href="shop.html" className="theme-btn my-5">
                    update cart <i className="fas fa-angle-double-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="shoping-cart-total pt-20 wow fadeInUp delay-0-2s">
                  <h4 className="form-title mb-25 text-center">Cart Totals</h4>
                  <table>
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>
                          <span className="price">280</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Shipping Fee</td>
                        <td>
                          <span className="price">10.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Vat</td>
                        <td>$0.00</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <b className="price">290</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    href="checkout.html"
                    className="theme-btn style-two mt-25 w-100"
                  >
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Shopping Cart Area start */}
      </>
    </HeaderFooterWrapper>
  );
};

export default Cart;
