import HeaderFooterWrapper from "../../../component/layouts/headerFooterWrapper";

const Checkout = () => {
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
                Checkout
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
                  <li className="breadcrumb-item active">Checkout</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* Checkout Form Area Start */}
        <div className="checkout-form-area py-130">
          <div className="container">
            <div className="checkout-faqs" id="checkout-faqs">
              <div className="alert bgc-lighter wow fadeInUp delay-0-2s">
                <h6>
                  Returning customer?{" "}
                  <a
                    href="#"
                    className="collapsed card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse0"
                    aria-expanded="false"
                    aria-controls="collapse0"
                  >
                    Click here to login
                  </a>
                </h6>
                <div id="collapse0" className="collapse content">
                  <form action="#">
                    <p>Please login your accont.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email-address"
                            name="email-address"
                            className="form-control"
                            defaultValue=""
                            placeholder="Your Email Address"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            defaultValue=""
                            placeholder="Your Password"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-footer">
                      <button type="submit" className="theme-btn style-two">
                        login <i className="fas fa-angle-double-right" />
                      </button>
                      <input
                        type="checkbox"
                        name="loss-passowrd"
                        id="loss-passowrd"
                        required=""
                      />
                      <label htmlFor="loss-passowrd">Remember me</label>
                    </div>
                    <a href="#">Lost your password?</a>
                  </form>
                </div>
              </div>
              <div className="alert bgc-lighter wow fadeInUp delay-0-3s">
                <h6>
                  Have a coupon?{" "}
                  <a
                    href="#"
                    className="collapsed card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    Click here to enter your code
                  </a>
                </h6>
                <div id="collapse3" className="collapse content">
                  <form action="#">
                    <p>If you have a coupon code, please apply it below.</p>
                    <div className="form-group">
                      <input
                        type="text"
                        id="coupon-code"
                        name="coupon-code"
                        className="form-control"
                        defaultValue=""
                        placeholder="Coupon Code"
                        required=""
                      />
                    </div>
                    <button type="submit" className="theme-btn style-two">
                      apply coupon <i className="fas fa-angle-double-right" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="alert bgc-lighter wow fadeInUp delay-0-4s">
                <h6>
                  Billing Address{" "}
                  <a
                    href="#"
                    className="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse4"
                  >
                    {" "}
                    Enter here
                  </a>
                </h6>
                <div id="collapse4" className="collapse content show">
                  <form
                    id="checkout-form"
                    className="checkout-form"
                    name="checkout-form"
                    action="#"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-lg-12 pt-15">
                        <h5>Personal Information</h5>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="First Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Last Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="number"
                            name="number"
                            className="form-control"
                            defaultValue=""
                            placeholder="Phone Number"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            defaultValue=""
                            placeholder="Email Address"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="company-name"
                            name="company-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Company name (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="company-address"
                            name="company-address"
                            className="form-control"
                            defaultValue=""
                            placeholder="Company Address (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h5>Your Address</h5>
                      </div>
                      <div className="col-md-6 mb-30">
                        <div className="form-group">
                          <select name="country" id="country">
                            <option value="value1">Select Country</option>
                            <option value="value2">Australia</option>
                            <option value="value3">Canada</option>
                            <option value="value4">China</option>
                            <option value="value5">Morocco</option>
                            <option value="value6">Saudi Arabia</option>
                            <option value="value7">United Kingdom (UK)</option>
                            <option value="value8">United States (US)</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="city"
                            name="city"
                            className="form-control"
                            defaultValue=""
                            placeholder="City"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="state"
                            name="state"
                            className="form-control"
                            defaultValue=""
                            placeholder="State"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            className="form-control"
                            defaultValue=""
                            placeholder="Zip"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="street-name"
                            name="street-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="House, street name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="apartment-name"
                            name="apartment-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h5>Order Notes (optional)</h5>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <textarea
                            name="order-note"
                            id="order-note"
                            className="form-control"
                            rows={5}
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="alert bgc-lighter wow fadeInUp delay-0-2s">
                <h6>
                  Select Your{" "}
                  <a
                    href="#"
                    className="collapsed card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    {" "}
                    Payment Method
                  </a>
                </h6>
                <div id="collapse5" className="collapse content">
                  <div className="payment-cart-total pt-25">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                        <div className="payment-method rmb-30">
                          <h5 className="mb-20">Payment Method</h5>
                          <ul id="paymentMethod" className="mb-30">
                            {/* Default unchecked */}
                            <li className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="methodone"
                                name="defaultExampleRadios"
                                defaultChecked=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="methodone"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-controls="collapseOne"
                              >
                                Direct Bank Transfer{" "}
                                <i className="fas fa-money-check" />
                              </label>
                              <div
                                id="collapseOne"
                                className="collapse show"
                                data-bs-parent="#paymentMethod"
                                style={{}}
                              >
                                <p>
                                  Make your payment directly into our bank
                                  account. Please use your Order ID as the
                                  payment reference. Your order will not be
                                  shipped our account.
                                </p>
                              </div>
                            </li>
                            {/* Default unchecked */}
                            <li className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="methodtwo"
                                name="defaultExampleRadios"
                              />
                              <label
                                className="custom-control-label collapsed"
                                htmlFor="methodtwo"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-controls="collapseTwo"
                              >
                                Cash On Delivery <i className="fas fa-truck" />
                              </label>
                              <div
                                id="collapseTwo"
                                className="collapse"
                                data-bs-parent="#paymentMethod"
                                style={{}}
                              >
                                <p>Pay with cash upon delivery.</p>
                              </div>
                            </li>
                            {/* Default unchecked */}
                            <li className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="methodthree"
                                name="defaultExampleRadios"
                              />
                              <label
                                className="custom-control-label collapsed"
                                htmlFor="methodthree"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsethree"
                                aria-controls="collapsethree"
                              >
                                Paypal <i className="fab fa-cc-paypal" />
                              </label>
                              <div
                                id="collapsethree"
                                className="collapse"
                                data-bs-parent="#paymentMethod"
                                style={{}}
                              >
                                <p>
                                  Pay via PayPal; you can pay with your credit
                                  card if you don’t have a PayPal account.
                                </p>
                              </div>
                            </li>
                          </ul>
                          <p>
                            Your personal data will be used to process your
                            order, support your experience throughout this
                            website, and for other purposes described in our
                            privacy policy.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="shoping-cart-total text-left mb-20">
                          <h5 className="text-center mb-20">Cart Totals</h5>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  Chicken Soup <strong>× 1</strong>
                                </td>
                                <td>$70.00</td>
                              </tr>
                              <tr>
                                <td>
                                  Alaskan Crab <strong>× 2</strong>
                                </td>
                                <td>$130.00</td>
                              </tr>
                              <tr>
                                <td>Shipping Fee</td>
                                <td>$10.00</td>
                              </tr>
                              <tr>
                                <td>Vat</td>
                                <td>$5.00</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Order Total</strong>
                                </td>
                                <td>
                                  <strong>$225.00</strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="theme-btn w-100">
                Place order <i className="fas fa-angle-double-right" />
              </button>
            </div>
          </div>
        </div>
        {/* Checkout Form Area End */}
      </>
    </HeaderFooterWrapper>
  );
};

export default Checkout;
