"use client";

import Link from "@/components/mobel/MobelLink";
import HomeLink from "@/components/mobel/HomeLink";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    firstName: "",
    lastName: "",
    companyName: "",
    zipCode: "",
    city: "",
    email: "",
    phone: "",
  });

  return (
    <>
      {/* Main header */}
      <section className="main-header" style={{ backgroundImage: "url(/mobel/assets/images/gallery-2.jpg)" }}>
        <header>
          <div className="container text-center">
            <h2 className="h2 title">Customer page</h2>
            <ol className="breadcrumb breadcrumb-inverted">
              <li><HomeLink><span className="icon icon-home"></span></HomeLink></li>
              <li><Link className="active" href="/login">Login & Register</Link></li>
            </ol>
          </div>
        </header>
      </section>

      {/* Login & register */}
      <section className="login-wrapper login-wrapper-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="login-wrapper">
                <div className="white-block">
                  {/* Signin */}
                  <div className="login-block login-block-signin">
                    <div className="h4">Sign in <a href="javascript:void(0);" className="btn btn-main btn-xs btn-register pull-right">create an account</a></div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="text" value={formData.userId} onChange={(e) => setFormData({ ...formData, userId: e.target.value })} className="form-control" placeholder="User ID" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="form-control" placeholder="Password" />
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

                  {/* Signup */}
                  <div className="login-block login-block-signup">
                    <div className="h4">Register now <a href="javascript:void(0);" className="btn btn-main btn-xs btn-login pull-right">Log in</a></div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="form-control" placeholder="First name: *" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="form-control" placeholder="Last name: *" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="text" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className="form-control" placeholder="Company name:" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input type="text" value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} className="form-control" placeholder="Zip code: *" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group">
                          <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="form-control" placeholder="City: *" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-control" placeholder="Email: *" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-control" placeholder="Phone: *" />
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
          </div>
        </div>
      </section>
    </>
  );
}
