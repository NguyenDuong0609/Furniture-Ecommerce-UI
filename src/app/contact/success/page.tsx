"use client";

import HomeLink from "@/components/mobel/HomeLink";

export default function ContactSuccessPage() {
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
                <div className="alert alert-success text-center" role="alert">
                  Your message has been successfully sent!
                </div>

                <div className="banner">
                  <div className="row">
                    <div className="col-md-offset-1 col-md-10 text-center">
                      <h2 className="title">Thank you for contacting us!</h2>
                      <p>
                        You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message.
                      </p>
                    </div>
                  </div>
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
