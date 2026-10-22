import Link from "@/components/mobel/MobelLink";
import HomeLink from "@/components/mobel/HomeLink";

// TODO: Connect to real API - this is mock data
const blogPosts = [
  {
    slug: "the-3-tricks",
    title: "The 3 Tricks that Quickly Became Rules",
    date: "25.06.2017",
    intro: "First things first, find out what you like. What makes you, you? More often than not we find that people have been stuck in places where others have called the shots.",
    image: "/mobel/assets/images/blog-1.jpg",
  },
  {
    slug: "decorating-starting",
    title: "Decorating When You're Starting Out or Starting Over",
    date: "25.06.2017",
    intro: "First things first, find out what you like. What makes you, you? More often than not we find that people have been stuck in places where others have called the shots.",
    image: "/mobel/assets/images/blog-2.jpg",
  },
  {
    slug: "dining-chair",
    title: "What does your favorite dining chair say about you?",
    date: "25.06.2017",
    intro: "First things first, find out what you like. What makes you, you? More often than not we find that people have been stuck in places where others have called the shots.",
    image: "/mobel/assets/images/blog-3.jpg",
  },
  {
    slug: "new-projects",
    title: "Have a look at our new projects!",
    date: "25.06.2017",
    intro: "First things first, find out what you like. What makes you, you? More often than not we find that people have been stuck in places where others have called the shots.",
    image: "/mobel/assets/images/blog-4.jpg",
  },
];

export default function BlogListPage() {
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
              <li className="active">Blog list</li>
            </ol>
          </div>
        </header>
      </section>

      {/* Blog list */}
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                {blogPosts.map((post) => (
                  <div key={post.slug} className="col-sm-12">
                    <article className="article-table">
                      <Link href={`/blog/${post.slug}`}>
                        <div className="image" style={{ backgroundImage: `url(${post.image})` }}>
                          <img src={post.image} alt="" />
                        </div>
                        <div className="text">
                          <div className="title">
                            <p>{post.date}</p>
                            <h2 className="h5">{post.title}</h2>
                          </div>
                          <div className="text-intro">
                            <p>{post.intro}</p>
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
                    <li><a href="#">Best of 2017</a></li>
                    <li className="active"><a href="#">Home style</a></li>
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
                  </ul>
                </div>

                {/* Tags */}
                <div className="box box-tags">
                  <h5 className="title">Popular posts</h5>
                  <ul className="clearfix">
                    <li><a href="#">design</a></li>
                    <li><a href="#">interior</a></li>
                    <li><a href="#">minimalist</a></li>
                    <li><a href="#">modern</a></li>
                    <li><a href="#">wood</a></li>
                    <li><a href="#">classic</a></li>
                    <li><a href="#">luxury</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="#">architecture</a></li>
                    <li><a href="#">vintage</a></li>
                    <li><a href="#">urban</a></li>
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
