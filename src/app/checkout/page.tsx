"use client";

import Link from "@/components/mobel/MobelLink";
import HomeLink from "@/components/mobel/HomeLink";
import { useState } from "react";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <>
      {/* Main header */}
      <section className="main-header" style={{ backgroundImage: "url(/mobel/assets/images/gallery-2.jpg)" }}>
        <header>
          <div className="container text-center">
            <h2 className="h2 title">Checkout</h2>
            <ol className="breadcrumb breadcrumb-inverted">
              <li><HomeLink><span className="icon icon-home"></span></HomeLink></li>
              <li className={step === 1 ? "active" : ""}><Link href="/checkout">Cart items</Link></li>
              <li className={step === 2 ? "active" : ""}><a href="javascript:void(0)">Delivery</a></li>
              <li className={step === 3 ? "active" : ""}><a href="javascript:void(0)">Payment</a></li>
              <li className={step === 4 ? "active" : ""}><a href="javascript:void(0)">Receipt</a></li>
            </ol>
          </div>
        </header>
      </section>

      {/* Step wrapper */}
      <div className="step-wrapper">
        <div className="container">
          <div className="stepper">
            <ul className="row">
              <li className={`col-md-3 ${step >= 1 ? "active" : ""}`}>
                <span data-text="Cart items" onClick={() => setStep(1)} style={{ cursor: "pointer" }}></span>
              </li>
              <li className={`col-md-3 ${step >= 2 ? "active" : ""}`}>
                <span data-text="Delivery" onClick={() => setStep(2)} style={{ cursor: "pointer" }}></span>
              </li>
              <li className={`col-md-3 ${step >= 3 ? "active" : ""}`}>
                <span data-text="Payment" onClick={() => setStep(3)} style={{ cursor: "pointer" }}></span>
              </li>
              <li className={`col-md-3 ${step >= 4 ? "active" : ""}`}>
                <span data-text="Receipt" onClick={() => setStep(4)} style={{ cursor: "pointer" }}></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 1: Cart */}
      {step === 1 && (
        <section className="checkout">
          <div className="container">
            <div className="cart-wrapper">
              <div className="cart-block cart-block-header clearfix">
                <div><span>Product</span></div>
                <div><span>&nbsp;</span></div>
                <div><span>Quantity</span></div>
                <div className="text-right"><span>Price</span></div>
              </div>

              <div className="clearfix">
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <Link href="/products/1"><img src="/mobel/assets/images/product-1.png" alt="" /></Link>
                  </div>
                  <div className="title">
                    <div className="h4"><Link href="/products/1">Green corner</Link></div>
                    <div>Green corner</div>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue={2} className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final h3">$ 1.998</span>
                    <span className="discount">$ 2.666</span>
                  </div>
                  <span className="icon icon-cross icon-delete"></span>
                </div>

                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <Link href="/products/2"><img src="/mobel/assets/images/product-2.png" alt="" /></Link>
                  </div>
                  <div className="title">
                    <div className="h4"><Link href="/products/2">Green corner</Link></div>
                    <div>Green corner</div>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue={2} className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final h3">$ 1.998</span>
                    <span className="discount">$ 2.666</span>
                  </div>
                  <span className="icon icon-cross icon-delete"></span>
                </div>

                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <Link href="/products/3"><img src="/mobel/assets/images/product-3.png" alt="" /></Link>
                  </div>
                  <div className="title">
                    <div className="h4"><Link href="/products/3">Green corner</Link></div>
                    <div>Green corner</div>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue={2} className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final h3">$ 1.998</span>
                    <span className="discount">$ 2.666</span>
                  </div>
                  <span className="icon icon-cross icon-delete"></span>
                </div>
              </div>

              <div className="clearfix">
                <div className="cart-block cart-block-footer clearfix">
                  <div><strong>Discount 15%</strong></div>
                  <div><span>$ 159,00</span></div>
                </div>
                <div className="cart-block cart-block-footer clearfix">
                  <div><strong>Shipping</strong></div>
                  <div><span>$ 30,00</span></div>
                </div>
                <div className="cart-block cart-block-footer clearfix">
                  <div><strong>VAT</strong></div>
                  <div><span>$ 59,00</span></div>
                </div>
              </div>

              <div className="clearfix">
                <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                  <div>
                    <span className="checkbox">
                      <input type="checkbox" id="couponCodeID" />
                      <label htmlFor="couponCodeID">Promo code</label>
                      <input type="text" className="form-control form-coupon" defaultValue="" placeholder="Enter your coupon code" />
                    </span>
                  </div>
                  <div>
                    <div className="h2 title">$ 1259,00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix">
              <div className="row">
                <div className="col-xs-6">
                  <Link href="/products" className="btn btn-clean-dark"><span className="icon icon-chevron-left"></span> Shop more</Link>
                </div>
                <div className="col-xs-6 text-right">
                  <button onClick={() => setStep(2)} className="btn btn-main"><span className="icon icon-cart"></span> Proceed to delivery</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Delivery */}
      {step === 2 && (
        <section className="checkout">
          <div className="container">
            <div className="cart-wrapper">
              <div className="note-block">
                <div className="row">
                  <div className="col-md-6">
                    <div className="login-wrapper">
                      <div className="white-block">
                        <div className="login-block login-block-signin">
                          <div className="h4">Sign in <a href="javascript:void(0);" className="btn btn-main btn-xs btn-register pull-right">create an account</a></div>
                          <hr />
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input type="text" defaultValue="" className="form-control" placeholder="User ID" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input type="password" defaultValue="" className="form-control" placeholder="Password" />
                              </div>
                            </div>
                            <div className="col-xs-6">
                              <span className="checkbox">
                                <input type="checkbox" id="checkBoxId3" />
                                <label htmlFor="checkBoxId3">Remember me</label>
                              </span>
                            </div>
                            <div className="col-xs-6 text-right">
                              <a href="#" className="btn btn-main">Login</a>
                            </div>
                          </div>
                        </div>
                        <div className="login-block login-block-signup">
                          <div className="h4">Register now <a href="javascript:void(0);" className="btn btn-main btn-xs btn-login pull-right">Log in</a></div>
                          <hr />
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" defaultValue="" className="form-control" placeholder="First name: *" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" defaultValue="" className="form-control" placeholder="Last name: *" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input type="text" defaultValue="" className="form-control" placeholder="Company name:" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <input type="text" defaultValue="" className="form-control" placeholder="Zip code: *" />
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="form-group">
                                <input type="text" defaultValue="" className="form-control" placeholder="City: *" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" defaultValue="" className="form-control" placeholder="Email: *" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" defaultValue="" className="form-control" placeholder="Phone: *" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <hr />
                              <span className="checkbox">
                                <input type="checkbox" id="checkBoxId1" />
                                <label htmlFor="checkBoxId1">I have read and accepted the <a href="#">terms</a>, as well as read and understood our terms of <a href="#">business contidions</a></label>
                              </span>
                              <span className="checkbox">
                                <input type="checkbox" id="checkBoxId2" />
                                <label htmlFor="checkBoxId2">Subscribe to exciting newsletters and great tips</label>
                              </span>
                              <hr />
                            </div>
                            <div className="col-md-12">
                              <a href="#" className="btn btn-main btn-block">Create account</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="white-block">
                      <div className="h4">Choose delivery</div>
                      <hr />
                      <span className="checkbox">
                        <input type="radio" id="deliveryId1" name="deliveryOption" />
                        <label htmlFor="deliveryId1">Delivery 1-3 Days - <strong>$50,00</strong></label>
                      </span>
                      <span className="checkbox">
                        <input type="radio" id="deliveryId2" name="deliveryOption" />
                        <label htmlFor="deliveryId2">Fast delivery - <strong>$199,00</strong></label>
                      </span>
                      <span className="checkbox">
                        <input type="radio" id="deliveryId3" name="deliveryOption" />
                        <label htmlFor="deliveryId3">Pick up in the store - <strong>Free</strong></label>
                      </span>
                      <hr />
                      <div className="clearfix">
                        <p>A frequently overlooked, powerful fulfillment option is offering local pick-up. If you have a physical location and can allow your customers to forgo paying shipping costs altogether, you should!</p>
                        <p><strong>Benefits:</strong></p>
                        <ul>
                          <li>Avoid both shipping and packaging costs</li>
                          <li>Develop a face-to-face relationship with your customers</li>
                          <li>Potential for additional purchases while customers are at your store</li>
                        </ul>
                        <p><strong>Challenges:</strong></p>
                        <ul>
                          <li>Limited business hours can sometimes make it difficult to coordinate pickup</li>
                          <li>Shoppers who cross state lines or ZIP codes may not know the sales tax rates in your area</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cart-wrapper">
                <div className="cart-block cart-block-header clearfix">
                  <div><span>Product</span></div>
                  <div><span>&nbsp;</span></div>
                  <div><span>Quantity</span></div>
                  <div className="text-right"><span>Price</span></div>
                </div>
                <div className="clearfix">
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/1"><img src="/mobel/assets/images/product-1.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/1">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/2"><img src="/mobel/assets/images/product-2.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/2">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/3"><img src="/mobel/assets/images/product-3.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/3">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/3"><img src="/mobel/assets/images/product-3.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/3">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                </div>

                <div className="clearfix">
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>Discount 15%</strong></div>
                    <div><span>$ 159,00</span></div>
                  </div>
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>Shipping</strong></div>
                    <div><span>$ 30,00</span></div>
                  </div>
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>VAT</strong></div>
                    <div><span>$ 59,00</span></div>
                  </div>
                </div>

                <div className="clearfix">
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>Promo code included!</strong></div>
                    <div><div className="h2 title">$ 1259,00</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix">
              <div className="row">
                <div className="col-xs-6">
                  <button onClick={() => setStep(1)} className="btn btn-clean-dark"><span className="icon icon-chevron-left"></span> Back to cart</button>
                </div>
                <div className="col-xs-6 text-right">
                  <button onClick={() => setStep(3)} className="btn btn-main"><span className="icon icon-cart"></span> Go to payment</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Payment */}
      {step === 3 && (
        <section className="checkout">
          <div className="container">
            <div className="cart-wrapper">
              <div className="note-block">
                <div className="row">
                  <div className="col-md-6">
                    <div className="white-block">
                      <div className="h4">Order details</div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Order no.</strong> <br />
                            <span>52522-63259226</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Transaction ID</strong> <br />
                            <span>2265996</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Order date</strong> <br />
                            <span>06/30/2017</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Shipping arrival</strong> <br />
                            <span>07/30/2017</span>
                          </div>
                        </div>
                      </div>

                      <div className="h4">Shipping info</div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Name</strong> <br />
                            <span>John Doe</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Email</strong><br />
                            <span>johndoe@company.com</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Phone</strong><br />
                            <span>+122 523 352</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Zip</strong><br />
                            <span>94107</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>City</strong><br />
                            <span>San Francisco, California</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Address</strong><br />
                            <span>795 Folsom Ave, Suite 600</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Company name</strong><br />
                            <span>Mobel Inc</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Company phone</strong><br />
                            <span>+122 333 6665</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="white-block">
                      <div className="h4">Choose payment</div>
                      <hr />
                      <span className="checkbox">
                        <input type="radio" id="paymentID1" name="paymentOption" defaultChecked={true} />
                        <label htmlFor="paymentID1">
                          <strong>Pay via credit cart</strong> <br />
                          <small>(MasterCard, Maestro, Visa, Visa Electron, JCB and American Express)</small>
                        </label>
                      </span>
                      <span className="checkbox">
                        <input type="radio" id="paymentID2" name="paymentOption" />
                        <label htmlFor="paymentID2">
                          <strong>PayPal</strong> <br />
                          <small>Purchase with your fingertips. Look for us the next time you're paying from a mobile app, and checkout faster on thousands of mobile websites.</small>
                        </label>
                      </span>
                      <span className="checkbox">
                        <input type="radio" id="paymentID3" name="paymentOption" />
                        <label htmlFor="paymentID3">
                          <strong>Pay via bank transfer</strong> <br />
                          <small>You can make payments directly into our bank account and email the bank wire transfer receipt to us. We recommend bank wire transfer for payments exceeding $500,00. </small>
                        </label>
                      </span>
                      <hr />
                      <p>Please allow three working days for the payment confirmation to reflect in your <a href="#">online account</a>. Once your payment is confirmed, we will generate your e-invoice, which you can view/print from your account or email.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cart-wrapper">
                <div className="cart-block cart-block-header clearfix">
                  <div><span>Product</span></div>
                  <div><span>&nbsp;</span></div>
                  <div><span>Quantity</span></div>
                  <div className="text-right"><span>Price</span></div>
                </div>
                <div className="clearfix">
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/1"><img src="/mobel/assets/images/product-1.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/1">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/2"><img src="/mobel/assets/images/product-2.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/2">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/3"><img src="/mobel/assets/images/product-3.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/3">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/3"><img src="/mobel/assets/images/product-3.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/3">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                </div>

                <div className="clearfix">
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>Discount 15%</strong></div>
                    <div><span>$ 159,00</span></div>
                  </div>
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>Shipping</strong></div>
                    <div><span>$ 30,00</span></div>
                  </div>
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>VAT</strong></div>
                    <div><span>$ 59,00</span></div>
                  </div>
                </div>

                <div className="clearfix">
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>Promo code included!</strong></div>
                    <div><div className="h2 title">$ 1259,00</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix">
              <div className="row">
                <div className="col-xs-6">
                  <button onClick={() => setStep(2)} className="btn btn-clean-dark"><span className="icon icon-chevron-left"></span> Back to delivery</button>
                </div>
                <div className="col-xs-6 text-right">
                  <button onClick={() => setStep(4)} className="btn btn-main"><span className="icon icon-cart"></span> Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 4: Receipt */}
      {step === 4 && (
        <section className="checkout">
          <div className="container">
            <div className="clearfix">
              <div className="row">
                <div className="col-xs-6">
                  <span className="h2 title">Your order is completed!</span>
                </div>
                <div className="col-xs-6 text-right">
                  <button onClick={() => window.print()} className="btn btn-main"><span className="icon icon-printer"></span> Print</button>
                </div>
              </div>
            </div>

            <div className="cart-wrapper">
              <div className="note-block">
                <div className="row">
                  <div className="col-md-6">
                    <div className="white-block">
                      <div className="h4">Shipping info</div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Name</strong> <br />
                            <span>John Doe</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Email</strong><br />
                            <span>johndoe@company.com</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Phone</strong><br />
                            <span>+122 523 352</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Zip</strong><br />
                            <span>94107</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>City</strong><br />
                            <span>San Francisco, California</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Address</strong><br />
                            <span>795 Folsom Ave, Suite 600</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Company name</strong><br />
                            <span>Mobel Inc</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Company phone</strong><br />
                            <span>+122 333 6665</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="white-block">
                      <div className="h4">Order details</div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Order no.</strong> <br />
                            <span>52522-63259226</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Transaction ID</strong> <br />
                            <span>2265996</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Order date</strong> <br />
                            <span>06/30/2017</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Shipping arrival</strong> <br />
                            <span>07/30/2017</span>
                          </div>
                        </div>
                      </div>
                      <div className="h4">Payment details</div>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Transaction time</strong> <br />
                            <span>06/30/2017 at 00:59</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Payment method</strong> <br />
                            <span>Credit card</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Amount</strong> <br />
                            <span>$ 1259,00</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Status</strong> <br />
                            <span>Completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cart-wrapper">
                <div className="cart-block cart-block-header clearfix">
                  <div><span>Product</span></div>
                  <div><span>&nbsp;</span></div>
                  <div><span>Quantity</span></div>
                  <div className="text-right"><span>Price</span></div>
                </div>
                <div className="clearfix">
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/1"><img src="/mobel/assets/images/product-1.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/1">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/2"><img src="/mobel/assets/images/product-2.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/2">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/3"><img src="/mobel/assets/images/product-3.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/3">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <Link href="/products/3"><img src="/mobel/assets/images/product-3.png" alt="" /></Link>
                    </div>
                    <div className="title">
                      <div className="h4"><Link href="/products/3">Green corner</Link></div>
                      <div>Green corner</div>
                    </div>
                    <div className="quantity">
                      <strong>1</strong>
                    </div>
                    <div className="price">
                      <span className="final h3">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>Discount 15%</strong></div>
                    <div><span>$ 159,00</span></div>
                  </div>
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>Shipping</strong></div>
                    <div><span>$ 30,00</span></div>
                  </div>
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>VAT</strong></div>
                    <div><span>$ 59,00</span></div>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="cart-block cart-block-footer clearfix">
                    <div><strong>Promo code included!</strong></div>
                    <div><div className="h2 title">$ 1259,00</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
