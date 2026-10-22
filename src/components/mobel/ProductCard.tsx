import Link from "@/components/mobel/MobelLink";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  label?: string;
  isFavorite?: boolean;
}

export default function ProductCard({
  id,
  title,
  price,
  oldPrice,
  image,
  description,
  label,
  isFavorite = false,
}: ProductCardProps) {
  return (
    <article>
      <div className="info">
        <span className={`add-favorite ${isFavorite ? "added" : ""}`}>
          <a
            href="javascript:void(0);"
            data-title="Add to favorites"
            data-title-added="Added to favorites list"
          >
            <i className="icon icon-heart"></i>
          </a>
        </span>
        <span>
          <a href={`#productid${id}`} className="mfp-open" data-title="Quick wiew">
            <i className="icon icon-eye"></i>
          </a>
        </span>
      </div>
      <div className="btn btn-add">
        <i className="icon icon-cart"></i>
      </div>
      <div className="figure-grid">
        {label && <span className="label label-warning">{label}</span>}
        <div className="image">
          <a href={`#productid${id}`} className="mfp-open">
            <img src={image} alt={title} width={360} />
          </a>
        </div>
        <div className="text">
          <h2 className="title h4">
            <a href={`/products/${id}`}>{title}</a>
          </h2>
          {oldPrice && <sub>$ {oldPrice},-</sub>}
          <sup>$ {price},-</sup>
          <span className="description clearfix">{description}</span>
        </div>
      </div>
    </article>
  );
}
