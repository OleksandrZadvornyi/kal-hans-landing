import itemBigAvif from '../assets/images/item-big-2.avif';
import itemBigWebp from '../assets/images/item-big-2.webp';
import itemBigJpg from '../assets/images/item-big-2.jpg';
import { useState } from 'react';

function OrderForm() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-primary flex flex-col items-center text-center md:w-[50%]">
        <h2 className="text-secondary mt-[74px] text-3xl">
          Skin Brightening Under Eye Cream
        </h2>
        <span className="text-secondary mt-8 block text-xl">$32.80</span>
        <p className="mt-5 max-w-[70%]">
          This lightweight adaptogenic blend with Licorice & Ashwagandha root
          help lighten stubborn dark circles whilst calming the area from stress
          related damage and wrinkles.
        </p>
        <p className="border-order mt-10 flex border bg-white select-none">
          <span
            className="text-option block cursor-pointer px-3.5 py-2.5 duration-500 hover:bg-black/25"
            onClick={decreaseQuantity}
          >
            -
          </span>
          <span className="block px-6 py-2.5 font-bold">{quantity}</span>
          <span
            className="text-option block cursor-pointer px-3.5 py-2.5 duration-500 hover:bg-black/25"
            onClick={increaseQuantity}
          >
            +
          </span>
        </p>
        <button className="hover:bg-secondary mt-5 cursor-pointer bg-black px-28 py-3 text-sm text-white duration-500 hover:text-black">
          Add to cart
        </button>
        <button className="mt-7 mb-24 cursor-pointer">Buy it now</button>
      </div>
      <picture className="md:w-[50%]">
        <source srcSet={itemBigAvif} type="image/avif" />
        <source srcSet={itemBigWebp} type="image/webp" />
        <img
          src={itemBigJpg}
          alt="Skin Brightening Under Eye Cream"
          className="w-full"
        />
      </picture>
    </div>
  );
}

export default OrderForm;
