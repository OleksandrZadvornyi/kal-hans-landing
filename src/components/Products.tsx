import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

interface Product {
  _id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  reviews: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-secondary mt-20 text-center text-lg">
        The Skincare Essentials
      </h2>
      <div className="mx-10 mt-12 mb-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
