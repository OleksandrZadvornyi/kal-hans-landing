import itemBigAvif from '/src/assets/images/item-big.avif';
import itemBigWebp from '/src/assets/images/item-big.webp';
import itemBigJpg from '/src/assets/images/item-big.jpg';

function Ingredients() {
  return (
    <section className="flex flex-col-reverse sm:flex-row">
      <picture className="sm:w-[50%]">
        <source srcSet={itemBigAvif} type="image/avif" />
        <source srcSet={itemBigWebp} type="image/webp" />
        <img
          src={itemBigJpg}
          alt="Daily Moisture Sun Protection Lotion"
          className="w-full"
        />
      </picture>
      <div className="bg-accent ext-center flex flex-col items-center justify-center py-15 text-white sm:w-[50%]">
        <h2 className="text-3xl font-bold">Free From</h2>
        <ul className="mt-8 mb-11 flex flex-col gap-3.5 text-center text-sm">
          <li>GMO's</li>
          <li>Toxins</li>
          <li>Fillers</li>
          <li>Artificial Colours</li>
          <li>Synthetic Chemicals</li>
          <li>Artificial Fragrances</li>
        </ul>
        <button className="cursor-pointer border-[3px] border-white px-11 py-3">
          Shop Green Beauty
        </button>
      </div>
    </section>
  );
}

export default Ingredients;
