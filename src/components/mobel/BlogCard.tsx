import Link from "@/components/mobel/MobelLink";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  image,
  date,
  author,
  category,
}: BlogCardProps) {
  return (
    <article className="blog-card">
      <div className="figure-grid">
        <div className="image">
          <Link href={`/blog/${slug}`}>
            <img src={image} alt={title} />
          </Link>
        </div>
        <div className="text">
          <div className="row">
            <div className="col-xs-6">
              <div className="h6 category">
                <Link href={`/blog?category=${category}`}>{category}</Link>
              </div>
            </div>
            <div className="col-xs-6 text-right">
              <div className="date">{date}</div>
            </div>
          </div>
          <h2 className="title h4">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p>{excerpt}</p>
          <div className="author">
            <span>By {author}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
