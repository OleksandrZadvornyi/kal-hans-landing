import { useMemo } from 'react';

interface BlogProps {
  imageSrc: string; // Base URL without extension
  imageAlt: string;
  title: string;
  date: string;
  content: string;
}

function Blog({ imageSrc, imageAlt, title, date, content }: BlogProps) {
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
    <article className="flex flex-col">
      <picture>
        <source srcSet={images.avif} type="image/avif" />
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt={imageAlt} className="w-full" />
      </picture>
      <h3 className="text-secondary mt-8 text-xl leading-7">{title}</h3>
      <span className="mt-1.5 font-bold">{date}</span>
      <p className="mt-4 leading-6">{content}</p>
      <a href="#" className="text-link mt-3.5 w-fit border-b-2">
        Read more
      </a>
    </article>
  );
}

export default Blog;
