import Link from "@/components/mobel/MobelLink";

export default function AboutPage() {
  return (
    <>
      {/* Main header */}
      <section className="main-header main-header-blog" style={{ backgroundImage: "url(/mobel/assets/images/gallery-1.jpg)" }}>
        <header>
          <div className="container text-center">
            <h2 className="h2 title">Our story</h2>
            <p className="subtitle">A bit of history</p>
          </div>
        </header>
      </section>

      {/* Intro section default */}
      <section className="our-team">
        <div className="container">
          {/* Our team header */}
          <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center">
              <h1 className="h2 title">Meet our team</h1>
              <div className="text">
                <p>Our architects and designers constantly and carefully monitor the environment, they accept and develop changes, research fashion and architectural, as well as sociological, changes and transform them into unique design.</p>
              </div>
            </div>
          </div>

          {/* Our team */}
          <div className="team">
            <div className="row">
              <div className="col-sm-3">
                <article>
                  <div className="details details-text">
                    <div className="inner">
                      <h3 className="title">Lea Nils</h3>
                      <h6 className="title">Director</h6>
                    </div>
                  </div>
                  <div className="image">
                    <img src="/mobel/assets/images/user-5.jpg" alt="" />
                  </div>
                  <div className="details details-social">
                    <div className="inner">
                      <a href="#"><i className="fa fa-phone"></i></a>
                      <a href="#"><i className="fa fa-envelope"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-sm-3">
                <article>
                  <div className="details details-text">
                    <div className="inner">
                      <h3 className="title">Nora Star</h3>
                      <h6 className="title">Architect</h6>
                    </div>
                  </div>
                  <div className="image">
                    <img src="/mobel/assets/images/user-4.jpg" alt="" />
                  </div>
                  <div className="details details-social">
                    <div className="inner">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google-plus"></i></a>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-sm-3">
                <article>
                  <div className="details details-text">
                    <div className="inner">
                      <h3 className="title">Jenna Hale</h3>
                      <h6 className="title">Quality director</h6>
                    </div>
                  </div>
                  <div className="image">
                    <img src="/mobel/assets/images/user-3.jpg" alt="" />
                  </div>
                  <div className="details details-social">
                    <div className="inner">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google-plus"></i></a>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-sm-3">
                <article>
                  <div className="details details-text">
                    <div className="inner">
                      <h3 className="title">Glen Jordan</h3>
                      <h6 className="title">Supervisor</h6>
                    </div>
                  </div>
                  <div className="image">
                    <img src="/mobel/assets/images/user-4.jpg" alt="" />
                  </div>
                  <div className="details details-social">
                    <div className="inner">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google-plus"></i></a>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="wrapper-more">
              <Link href="/contact" className="btn btn-clean-dark">Contact us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner" style={{ backgroundImage: "url(/mobel/assets/images/gallery-7.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center">
              <h1 className="h2 title">We love our work</h1>
              <div className="text">
                <p>
                  Lorem ipsum folor sit amet, consenuer adispicing elit mast. Curarbitur tristique lacinia mi,
                  vitae consector oido efficitur nec. Phasellus velit felis, fermentum in enim. Lorem ipsum dolor sit amet,
                  censectur adispcing elit curabitur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="cards">
        <header>
          <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center">
              <h2 className="title">Design of interiors</h2>
              <div className="text">
                <p>Our services team produces interior design solutions</p>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <figure>
                <figcaption style={{ backgroundImage: "url(/mobel/assets/images/blog-7.jpg)" }}>
                  <img src="/mobel/assets/images/blog-1.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean">Interior design</a>
              </figure>
            </div>

            <div className="col-md-4">
              <figure>
                <figcaption style={{ backgroundImage: "url(/mobel/assets/images/blog-2.jpg)" }}>
                  <img src="/mobel/assets/images/blog-2.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean">3D Modeling</a>
              </figure>
            </div>

            <div className="col-md-4">
              <figure>
                <figcaption style={{ backgroundImage: "url(/mobel/assets/images/blog-3.jpg)" }}>
                  <img src="/mobel/assets/images/blog-3.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean">Arhitect serives</a>
              </figure>
            </div>

            <div className="col-md-4">
              <figure>
                <figcaption style={{ backgroundImage: "url(/mobel/assets/images/blog-4.jpg)" }}>
                  <img src="/mobel/assets/images/blog-4.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean">Manufacturing</a>
              </figure>
            </div>

            <div className="col-md-4">
              <figure>
                <figcaption style={{ backgroundImage: "url(/mobel/assets/images/blog-5.jpg)" }}>
                  <img src="/mobel/assets/images/blog-5.jpg" alt="" />
                </figcaption>
                <a href="#" className="btn btn-clean">Planning</a>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="history">
        <div className="container">
          <header>
            <div className="row">
              <div className="col-md-offset-2 col-md-8 text-center">
                <h1 className="h2 title">A bit of history</h1>
                <div className="text">
                  <p>Our architects and designers constantly and carefully monitor the environment, they accept and develop changes, research fashion and architectural, as well as sociological, changes and transform them into unique design.</p>
                </div>
              </div>
            </div>
          </header>

          <div className="row row-block">
            <div className="col-md-5 history-image" style={{ backgroundImage: "url(/mobel/assets/images/blog-3.jpg)" }}>
              <div className="history-title">
                <h2 className="title">1930</h2>
                <p>The begining</p>
              </div>
            </div>
            <div className="col-md-7 history-desc">
              <div className="h5 title">This is how it's began</div>
              <p>
                Bust master shore what the sainted store tell stood sitting word thy
                unbrokenquit tossed more beguiling to rare stood take.
                Sent that maiden entrance door the and i to if me entrance the startled
                yore the sainted velvet raven still bird cushioned more then quoth and just a lenore back
              </p>
              <p>
                Leave till the and let nameless lenore the followed or shorn wide mystery quoth agreeing
                the lore myself soul its nevermore lenore mortals this the still plainly thereat on thinking
                the door above a have of hesitating longer i and that as mefilled now lord marvelled me i of be.
              </p>
            </div>
          </div>

          <div className="row row-block">
            <div className="col-md-5 history-image" style={{ backgroundImage: "url(/mobel/assets/images/blog-4.jpg)" }}>
              <div className="history-title">
                <h2 className="title">1935</h2>
                <p>Firs 5 years</p>
              </div>
            </div>
            <div className="col-md-7 history-desc">
              <div className="h5 title">Love at the first sight</div>
              <p>
                Bust master shore what the sainted store tell stood sitting word thy
                unbrokenquit tossed more beguiling to rare stood take.
                Sent that maiden entrance door the and i to if me entrance the startled
                yore the sainted velvet raven still bird cushioned more then quoth and just a lenore back
              </p>
            </div>
          </div>

          <div className="row row-block">
            <div className="col-md-5 history-image" style={{ backgroundImage: "url(/mobel/assets/images/blog-5.jpg)" }}>
              <div className="history-title">
                <h2 className="title">1940</h2>
                <p>Furniture color palette</p>
              </div>
            </div>
            <div className="col-md-7 history-desc">
              <div className="h5 title">There are designers out there</div>
              <p>
                Bust master shore what the sainted store tell stood sitting word thy
                unbrokenquit tossed more beguiling to rare stood take.
                Sent that maiden entrance door the and i to if me entrance the startled
                yore the sainted velvet raven still bird cushioned more then quoth and just a lenore back
              </p>
              <p>
                Leave till the and let nameless lenore the followed or shorn wide mystery quoth agreeing
                the lore myself soul its nevermore lenore mortals this the still plainly thereat on thinking
                the door above a have of hesitating longer i and that as mefilled now lord marvelled me i of be.
              </p>
            </div>
          </div>

          <div className="row row-block">
            <div className="col-md-5 history-image" style={{ backgroundImage: "url(/mobel/assets/images/blog-6.jpg)" }}>
              <div className="history-title">
                <h2 className="title">1950</h2>
                <p>Employer of the year</p>
              </div>
            </div>
            <div className="col-md-7 history-desc">
              <div className="h5 title">We love our employees</div>
              <p>
                Bust master shore what the sainted store tell stood sitting word thy
                unbrokenquit tossed more beguiling to rare stood take.
                Sent that maiden entrance door the and i to if me entrance the startled
                yore the sainted velvet raven still bird cushioned more then quoth and just a lenore back
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
