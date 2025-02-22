import itemBigAvif from '/src/assets/images/woman-with-laptop.avif';
import itemBigWebp from '/src/assets/images/woman-with-laptop.webp';
import itemBigJpg from '/src/assets/images/woman-with-laptop.jpg';

function History() {
  return (
    <section className="flex flex-col md:flex-row">
      <picture className="md:w-[50%]">
        <source srcSet={itemBigAvif} type="image/avif" />
        <source srcSet={itemBigWebp} type="image/webp" />
        <img
          src={itemBigJpg}
          alt="Daily Moisture Sun Protection Lotion"
          className="w-full"
        />
      </picture>
      <div className="bg-primary flex flex-col items-center justify-center py-16 text-center md:w-[50%]">
        <h2 className="text-secondary text-3xl font-normal">Our Story</h2>
        <p className="mt-8 mb-11 w-[80%] text-center text-sm leading-5 text-black">
          Kal Hans is not a brand that strives for perfection but one that
          strives for the continual betterment, growth and confidence in one’s
          own skin. After meeting with a severe accident in New York founder
          Lisa D'Mello created Kal Hans
        </p>
        <button className="bg-primary cursor-pointer px-11 py-3 text-black">
          Read More
        </button>
      </div>
    </section>
  );
}

export default History;
