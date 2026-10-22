"use client";

import Link from "@/components/mobel/MobelLink";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <nav className="navbar-fixed">
      <div className="container">
        {/* Top navigation */}
        <div className="navigation navigation-top clearfix">
          <ul>
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-youtube"></i></a></li>

            {/* Currency selector */}
            <li className="nav-settings">
              <a href="javascript:void(0);" className="nav-settings-value"> USD $</a>
              <ul className="nav-settings-list">
                <li>USD $</li>
                <li>EUR €</li>
                <li>CHF Fr.</li>
                <li>GBP £</li>
              </ul>
            </li>

            {/* Language selector */}
            <li className="nav-settings">
              <a href="javascript:void(0);" className="nav-settings-value"> ENG</a>
              <ul className="nav-settings-list">
                <li>ENG</li>
                <li>GER</li>
                <li>VIE</li>
              </ul>
            </li>
            <li><a href="javascript:void(0);" className="open-login"><i className="icon icon-user"></i></a></li>
            <li><a href="javascript:void(0);" className="open-search"><i className="icon icon-magnifier"></i></a></li>
            <li><a href="javascript:void(0);" className="open-cart"><i className="icon icon-cart"></i> <span>3</span></a></li>
          </ul>
        </div>

        {/* Main navigation */}
        <div className="navigation navigation-main">
          <Link
            href="/"
            className="logo"
            onClick={(event) => {
              event.preventDefault();
              window.location.assign("/");
            }}
          >
            <img src="/mobel/assets/images/logo.png" alt="TechBlog Logo" />
          </Link>

          {/* Mobile toggle menu */}
          <a
            href="#"
            className="open-menu"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }}
          >
            <i className="icon icon-menu"></i>
          </a>

          {/* Convertible menu (mobile/desktop) */}
          <div className={`floating-menu ${menuOpen ? "active" : ""}`}>
            {/* Mobile toggle menu trigger */}
            <div className="close-menu-wrapper">
              <span
                className="close-menu"
                onClick={() => setMenuOpen(false)}
              >
                <i className="icon icon-cross"></i>
              </span>
            </div>

            <ul>
              <li>
                <Link
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    window.location.assign("/");
                  }}
                >
                  Home
                </Link>
              </li>

              {/* Blog and site pages */}
              <li>
                <Link href="/blog">Blog <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></Link>
                <div className="navbar-dropdown">
                  <div className="navbar-box">
                    <div className="box-2">
                      <div className="box clearfix">
                        <div className="row">
                          <div className="col-md-6">
                            <ul>
                              <li className="label">Blog</li>
                              <li><Link href="/blog">All articles</Link></li>
                              <li><Link href="/blog/decorating-starting">Featured article</Link></li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul>
                              <li className="label">Information</li>
                              <li><Link href="/about">About us</Link></li>
                              <li><Link href="/contact">Contact</Link></li>
                              <li><Link href="/login">Sign in</Link></li>
                              <li><Link href="/email-receipt">Email receipt</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Shop dropdown */}
              <li>
                <Link href="/products">Shop <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></Link>
                <div className="navbar-dropdown navbar-dropdown-single">
                  <div className="navbar-box">
                    <div className="box-2">
                      <div className="box clearfix">
                        <ul>
                          <li className="label">Products</li>
                          <li><Link href="/products">Product grid</Link></li>
                          <li><Link href="/products/list">Product list</Link></li>
                          <li><Link href="/products/1">Product details</Link></li>
                          <li><Link href="/category">Product categories</Link></li>
                        </ul>
                        <ul>
                          <li className="label">Order</li>
                          <li><Link href="/checkout">Checkout</Link></li>
                          <li><Link href="/email-receipt">Email receipt</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Categories dropdown */}
              <li>
                <Link href="/category">Categories <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></Link>
                <div className="navbar-dropdown">
                  <div className="navbar-box">
                    <div className="box-1">
                      <div className="image">
                        <img src="/mobel/assets/images/blog-2.jpg" alt="Lorem ipsum" />
                      </div>
                      <div className="box">
                        <div className="h2">Product categories</div>
                        <div className="clearfix">
                          <p>Browse the furniture categories available in the shop.</p>
                          <Link href="/category" className="btn btn-clean btn-big">View categories</Link>
                        </div>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="clearfix categories">
                        <div className="row">
                          <div className="col-sm-3 col-xs-6">
                            <Link href="/category">
                              <figure>
                                <i className="f-icon f-icon-sofa"></i>
                                <figcaption>Sofa</figcaption>
                              </figure>
                            </Link>
                          </div>
                          <div className="col-sm-3 col-xs-6">
                            <Link href="/category">
                              <figure>
                                <i className="f-icon f-icon-chair"></i>
                                <figcaption>Chairs</figcaption>
                              </figure>
                            </Link>
                          </div>
                          <div className="col-sm-3 col-xs-6">
                            <Link href="/category">
                              <figure>
                                <i className="f-icon f-icon-table"></i>
                                <figcaption>Tables</figcaption>
                              </figure>
                            </Link>
                          </div>
                          <div className="col-sm-3 col-xs-6">
                            <Link href="/category">
                              <figure>
                                <i className="f-icon f-icon-bedroom"></i>
                                <figcaption>Bedroom</figcaption>
                              </figure>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Search wrapper */}
        <div className="search-wrapper">
          <div className="search-container">
            <input
              className="form-control"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-main btn-search">Go!</button>
          </div>
        </div>

        {/* Login wrapper */}
        <div className="login-wrapper">
          <form>
            <div className="h4">Sign in</div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <Link href="/login">Sign in</Link>
              <Link href="/login">Create account</Link>
            </div>
            <button type="submit" className="btn btn-block btn-main">Submit</button>
          </form>
        </div>

        {/* Cart wrapper */}
        <div className="cart-wrapper">
          <div className="checkout">
            <div className="clearfix">
              <div className="row">
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <Link href="/products/1"><img src="/mobel/assets/images/product-1.png" alt="" /></Link>
                  </div>
                  <div className="title">
                    <div><Link href="/products/1">Green corner</Link></div>
                    <small>Green corner</small>
                  </div>
                  <div className="quantity">
                    <input type="number" defaultValue="2" className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final">$ 1.998</span>
                    <span className="discount">$ 2.666</span>
                  </div>
                  <span className="icon icon-cross icon-delete"></span>
                </div>
              </div>
            </div>
            <div className="cart-block-buttons clearfix">
              <div className="row">
                <div className="col-xs-6">
                  <Link href="/products" className="btn btn-clean-dark">Continue shopping</Link>
                </div>
                <div className="col-xs-6 text-right">
                  <Link href="/checkout" className="btn btn-main"><span className="icon icon-cart"></span> Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
