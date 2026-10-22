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
  {
    slug: "warm-winter",
    title: "4 Products to Warm Up Your Winter",
    image: "/mobel/assets/images/blog-1.jpg",
    date: { month: "MAR", day: "05", year: "2017" },
  },
];

export default function BlogFullPage() {
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
              <li className="active">Popular stories</li>
            </ol>
          </div>
        </header>
      </section>

      {/* Blog fullpage */}
      <section className="blog">
        <div className="container">
          <div className="pre-header">
            <div>
              <h2 className="h3 title">Papular stories</h2>
            </div>
            <div>
              <div className="sort-bar pull-right">
                <div className="sort-results">
                  <span>Showing all <strong>50</strong> of <strong>3,250</strong> items</span>
                  <select>
                    <option value="1">10</option>
                    <option value="2">50</option>
                    <option value="3">100</option>
                    <option value="4">All</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.slug} className="col-sm-4">
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
      </section>
    </>
  );
}
