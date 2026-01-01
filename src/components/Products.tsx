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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
        setProducts([]);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-secondary mt-20 text-center text-lg">
        The Skincare Essentials
      </h2>
      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="border-secondary h-12 w-12 animate-spin rounded-full border-t-2 border-b-2"></div>
        </div>
      ) : (
        <div className="mx-10 mt-12 mb-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
