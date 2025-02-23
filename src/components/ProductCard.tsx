import { useMemo } from 'react';

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
  const images = useMemo(() => {
    const avif = import.meta.glob('/src/assets/images/*.avif', { eager: true });
    const webp = import.meta.glob('/src/assets/images/*.webp', { eager: true });
    const png = import.meta.glob('/src/assets/images/*.png', { eager: true });

    return {
      avif: (avif[`${imageSrc}.avif`] as any)?.default,
      webp: (webp[`${imageSrc}.webp`] as any)?.default,
      png: (png[`${imageSrc}.png`] as any)?.default,
    };
  }, [imageSrc]);

  return (
    <article className="flex flex-col items-center">
      <picture>
        <source srcSet={images.avif} type="image/avif" />
        <source srcSet={images.webp} type="image/webp" />
        <img
          src={images.png}
          alt={imageAlt}
          className="duration-500 hover:scale-110"
        />
      </picture>
      <h3 className="mt-5 text-sm font-bold">{title}</h3>
      <p className="mt-2">{price}</p>
      <span className="mt-1.5 translate-x-10">{reviews}</span>
    </article>
  );
}

export default ProductCard;
