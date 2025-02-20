import avif from '../assets/images/hero.avif';
import webp from '../assets/images/hero.webp';
import jpg from '../assets/images/hero.jpg';

function Hero() {
  const backgroundImage = [`url(${avif})`, `url(${webp})`, `url(${jpg})`].join(
    ', '
  );

  return (
    <div
      className="relative min-h-[600px] bg-cover bg-center"
      style={{ backgroundImage }}
    >
      <p className="bg-primary absolute bottom-7 left-7 inline-block px-11 py-2.5 text-[14px] leading-5">
        Shop NEW Summer Collection!
      </p>
    </div>
  );
}

export default Hero;
