function Newsletter() {
  return (
    <section className="bg-accent flex flex-col items-center gap-4 py-24 text-center text-white">
      <h2 className="text-xl">KH Newsletter</h2>
      <p className="max-w-[90%] text-sm">
        Sign up to our newsletter and we’ll keep you up to date with the latest
        products, skincare news and exclusive discounts!
      </p>
      <form className="flex max-w-[90%] flex-col items-center justify-center gap-4 sm:flex-row">
        <input
          type="email"
          className="min-h-11 w-72 max-w-[90%] bg-white text-black"
        />
        <button className="bg-primary hover:bg-secondary cursor-pointer px-11 py-3 text-black duration-500 hover:text-white">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
