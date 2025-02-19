interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  reviews: string;
}

function ProductCard({
  imageSrc,
  imageAlt,
  title,
  price,
  reviews,
}: ProductCardProps) {
  return (
    <article className="flex flex-col items-center">
      <picture>
        <source srcSet={`${imageSrc}.avif`} type="image/avif" />
        <source srcSet={`${imageSrc}.webp`} type="image/webp" />
        <img src={`${imageSrc}.png`} alt={imageAlt} />
      </picture>
      <h3 className="mt-5 text-sm font-bold">{title}</h3>
      <p className="mt-2">{price}</p>
      <span className="mt-1.5 translate-x-10">{reviews}</span>
    </article>
  );
}

export default ProductCard;
