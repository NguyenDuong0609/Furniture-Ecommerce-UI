import Link from "@/components/mobel/MobelLink";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Footer showroom */}
        <div className="footer-showroom">
          <div className="row">
            <div className="col-sm-8">
              <h2>Visit our showroom</h2>
              <p>200 12th Ave, New York, NY 10001, USA</p>
              <p>Mon - Sat: 10 am - 6 pm &nbsp; &nbsp; | &nbsp; &nbsp; Sun: 12pm - 2 pm</p>
            </div>
            <div className="col-sm-4 text-center">
              <a href="#" className="btn btn-clean"><span className="icon icon-map-marker"></span> Get directions</a>
              <div className="call-us h4"><span className="icon icon-phone-handset"></span> 333.278.06622</div>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="footer-links">
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <h5>Browse by</h5>
              <ul>
                <li><Link href="/products">Brand</Link></li>
                <li><Link href="/products">Product</Link></li>
                <li><Link href="/category">Category</Link></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2">
              <h5>Resources</h5>
              <ul>
                <li><Link href="/blog">Design</Link></li>
                <li><Link href="/blog">Projects</Link></li>
                <li><Link href="/products">Sales</Link></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-2">
              <h5>Our company</h5>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">News</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6">
              <h5>Sign up for our newsletter</h5>
              <p><i>Add your email address to sign up for our monthly emails and to receive promotional offers.</i></p>
              <div className="form-group form-newsletter">
                <input className="form-control" type="text" name="email" placeholder="Email address" />
                <input type="submit" className="btn btn-clean btn-sm" value="Subscribe" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer social */}
        <div className="footer-social">
          <div className="row">
            <div className="col-sm-6">
              <a href="#">Sitemap</a> &nbsp; | &nbsp; <a href="#">Privacy policy</a>
            </div>
            <div className="col-sm-6 links">
              <ul>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
