import itemBigAvif from '/src/assets/images/item-big-3.avif';
import itemBigWebp from '/src/assets/images/item-big-3.webp';
import itemBigJpg from '/src/assets/images/item-big-3.jpg';

function Endorsement() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="my-16 flex flex-col items-center justify-center bg-white text-center md:w-[50%]">
        <h2 className="text-secondary text-3xl font-normal">
          Your Skin Deserves The Best!
        </h2>
        <p className="mt-8 mb-11 w-[80%] text-center text-sm leading-5 text-black">
          You have only one body and it deserves the best! Kal Hans brings you
          the highest quality, nutrient rich natural ingredients to elevate your
          skincare routine and give you glowing skin. Because the best makeup is
          NO makeup.
        </p>
        <button className="bg-primary hover:bg-secondary cursor-pointer px-11 py-3 text-black duration-500 hover:text-white">
          Get Glowing
        </button>
      </div>
      <picture className="md:w-[50%]">
        <source srcSet={itemBigAvif} type="image/avif" />
        <source srcSet={itemBigWebp} type="image/webp" />
        <img
          src={itemBigJpg}
          alt="Daily Moisture Sun Protection Lotion"
          className="w-full"
        />
      </picture>
    </section>
  );
}

export default Endorsement;
