import Link from "@/components/mobel/MobelLink";
import HomeLink from "@/components/mobel/HomeLink";

// TODO: Connect to real API - this is mock data
const blogPosts = [
  {
    slug: "the-3-tricks",
    title: "The 3 Tricks that Quickly Became Rules",
    image: "/mobel/assets/images/blog-1.jpg",
    date: { month: "MAR", day: "05", year: "2017" },
  },
  {
    slug: "decorating-starting",
    title: "Decorating When You're Starting Out or Starting Over",
    image: "/mobel/assets/images/blog-2.jpg",
    date: { month: "MAR", day: "05", year: "2017" },
  },
  {
    slug: "dining-chair",
    title: "What does your favorite dining chair say about you?",
    image: "/mobel/assets/images/blog-3.jpg",
    date: { month: "MAR", day: "05", year: "2017" },
  },
  {
    slug: "new-projects",
    title: "Have a look at our new projects!",
    image: "/mobel/assets/images/blog-4.jpg",
    date: { month: "MAR", day: "05", year: "2017" },
  },
  {
    slug: "extending-living",
    title: "Extending Your Living Area",
    image: "/mobel/assets/images/blog-5.jpg",
    date: { month: "MAR", day: "05", year: "2017" },
  },
  {
    slug: "falling-season",
    title: "Falling into the new Season",
    image: "/mobel/assets/images/blog-6.jpg",
    date: { month: "MAR", day: "05", year: "2017" },
  },
  {
    slug: "perfect-gallery",
    title: "Creating the Perfect Gallery Wall",
    image: "/mobel/assets/images/blog-7.jpg",
    date: { month: "MAR", day: "05", year: "2017" },
  },
  {
    slug: "kids-bedroom",
    title: "Making the Most Out of Your Kids Old Bedroom",
    image: "/mobel/assets/images/blog-8.jpg",
    date: { month: "MAR", day: "05", year: "2017" },
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Main header */}
      <section className="main-header" style={{ backgroundImage: "url(/mobel/assets/images/gallery-1.jpg)" }}>
        <header>
          <div className="container">
            <h1 className="h2 title">Blog</h1>
            <ol className="breadcrumb breadcrumb-inverted">
              <li><HomeLink><span className="icon icon-home"></span></HomeLink></li>
              <li><Link href="/blog">Blog</Link></li>
              <li className="active">Modern design</li>
            </ol>
          </div>
        </header>
      </section>

      {/* Blog grid */}
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                {blogPosts.map((post) => (
                  <div key={post.slug} className="col-sm-6">
                    <article>
                      <Link href={`/blog/${post.slug}`}>
                        <div className="image" style={{ backgroundImage: `url(${post.image})` }}>
                          <img src={post.image} alt="" />
                        </div>
                        <div className="entry entry-table">
                          <div className="date-wrapper">
                            <div className="date">
                              <span>{post.date.month}</span>
                              <strong>{post.date.day}</strong>
                              <span>{post.date.year}</span>
                            </div>
                          </div>
                          <div className="title">
                            <h2 className="h5">{post.title}</h2>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-wrapper">
                <ul className="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-3">
              <aside>
                {/* Search box */}
                <div className="box box-search">
                  <input type="text" className="form-control" placeholder="Search the blog" />
                  <button className="btn btn-main btn-sm">Go!</button>
                </div>

                {/* Blog categories */}
                <div className="box box-categories">
                  <h5 className="title">Blog categories</h5>
                  <ul>
                    <li><a href="#">Interior ideas</a></li>
                    <li className="active"><a href="#">Modern design</a></li>
                    <li><a href="#">Best of 2017</a></li>
                    <li><a href="#">Home styler</a></li>
                    <li><a href="#">Tips for you</a></li>
                  </ul>
                </div>

                {/* Popular posts */}
                <div className="box box-posts">
                  <h5 className="title">Popular posts</h5>
                  <ul>
                    <li>
                      <a href="/blog/the-3-tricks">
                        <span className="date">
                          <span>Jun</span>
                          <span>22</span>
                        </span>
                        <span className="text">The 3 Tricks that Quickly Became Rules</span>
                      </a>
                    </li>
                    <li>
                      <a href="/blog/decorating-starting">
                        <span className="date">
                          <span>Jun</span>
                          <span>19</span>
                        </span>
                        <span className="text">Decorating When You're Starting Out or Starting Over</span>
                      </a>
                    </li>
                    <li>
                      <a href="/blog/dining-chair">
                        <span className="date">
                          <span>Jun</span>
                          <span>18</span>
                        </span>
                        <span className="text">What does your favorite dining chair say about you?</span>
                      </a>
                    </li>
                    <li>
                      <a href="/blog/perfect-gallery">
                        <span className="date">
                          <span>Jun</span>
                          <span>10</span>
                        </span>
                        <span className="text">Creating the Perfect Gallery Wall</span>
                      </a>
                    </li>
                    <li>
                      <a href="/blog/kids-bedroom">
                        <span className="date">
                          <span>Jun</span>
                          <span>31</span>
                        </span>
                        <span className="text">Making the Most Out of Your Kids Old Bedroom</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Tags */}
                <div className="box box-tags">
                  <h5 className="title">Popular posts</h5>
                  <ul className="clearfix">
                    <li><a href="#">design</a></li>
                    <li><a href="#">furniture</a></li>
                    <li><a href="#">interior</a></li>
                    <li><a href="#">mobile</a></li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">places</a></li>
                    <li><a href="#">dining</a></li>
                    <li><a href="#">black</a></li>
                    <li><a href="#">yellow</a></li>
                    <li><a href="#">mdoern</a></li>
                    <li><a href="#">superior</a></li>
                    <li><a href="#">decor</a></li>
                    <li><a href="#">sofa</a></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
