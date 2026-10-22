"use client";

import { useState } from "react";
import HomeLink from "@/components/mobel/HomeLink";

export default function ContactFailedPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to contact service
    console.log("Contact form submitted:", formData);
  };

  return (
    <>
      <section className="main-header" style={{ backgroundImage: "url(/mobel/assets/images/gallery-2.jpg)" }}>
        <header>
          <div className="container text-center">
            <h2 className="h2 title">Contact</h2>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <HomeLink>
                  <span className="icon icon-home"></span>
                </HomeLink>
              </li>
              <li>Contact</li>
            </ol>
          </div>
        </header>
      </section>

      <section className="contact">
        <iframe
          id="map"
          title="Mobel location map"
          src="https://maps.google.com/maps?q=200%2012th%20Ave%2C%20New%20York%2C%20NY%2010001&t=&z=12&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />

        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
              <div className="contact-block">
                <div className="alert alert-warning text-center" role="alert">
                  Error: Your message was not sent!
                </div>

                <div className="contact-info">
                  <div className="row">
                    <div className="col-sm-4">
                      <figure className="text-center">
                        <span className="icon icon-map-marker"></span>
                        <figcaption>
                          <strong>Where are we?</strong>
                          <span>200 12th Ave, New York, <br />NY 10001, USA</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-sm-4">
                      <figure className="text-center">
                        <span className="icon icon-phone"></span>
                        <figcaption>
                          <strong>Call us</strong>
                          <span>
                            <strong>T</strong> +1 222 333 4444 <br />
                            <strong>F</strong> +1 222 333 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-sm-4">
                      <figure className="text-center">
                        <span className="icon icon-clock"></span>
                        <figcaption>
                          <strong>Working hours</strong>
                          <span>
                            <strong>Mon</strong> - Sat: 10 am - 6 pm <br />
                            <strong>Sun</strong> 12pm - 2 pm
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="banner">
                  <div className="row">
                    <div className="col-md-offset-1 col-md-10 text-center">
                      <h2 className="title">Message not sent!</h2>
                      <p>
                        Required field cannot be blank!
                      </p>

                      <div className="contact-form-wrapper">
                        <button
                          type="button"
                          className="btn btn-clean"
                          aria-expanded={isFormOpen}
                          aria-controls="contact-form"
                          onClick={() => setIsFormOpen((open) => !open)}
                        >
                          {isFormOpen ? "Close form" : "Try again"}
                        </button>

                        <div
                          id="contact-form"
                          className="contact-form clearfix"
                          style={{ display: isFormOpen ? "block" : "none" }}
                        >
                          <form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    rows={10}
                                    placeholder="Your message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                  ></textarea>
                                </div>
                              </div>

                              <div className="col-md-12 text-center">
                                <input type="submit" className="btn btn-clean" value="Send message" />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="row">
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Sales</strong>
                          <span>
                            <strong>T</strong> +1 125 251 4586 <br />
                            <strong>F</strong> +1 251 333 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Services</strong>
                          <span>
                            <strong>T</strong> +1 654 333 8541 <br />
                            <strong>F</strong> +1 125 251 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Support</strong>
                          <span>
                            <strong>T</strong> +1 222 852 9632 <br />
                            <strong>F</strong> +1 357 333 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Human resources</strong>
                          <span>
                            <strong>T</strong> +1 963 333 8745 <br />
                            <strong>F</strong> +1 159 333 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Factory</strong>
                          <span>
                            <strong>T</strong> +1 753 333 1259 <br />
                            <strong>F</strong> +1 247 652 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Delivery</strong>
                          <span>
                            <strong>T</strong> +1 134 197 7532 <br />
                            <strong>F</strong> +1 291 468 4563
                          </span>
                        </figcaption>
                      </figure>
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
