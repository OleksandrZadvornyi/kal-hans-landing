import mongoose from 'mongoose';

interface IProduct {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  reviews: string;
}

const productSchema = new mongoose.Schema<IProduct>({
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  reviews: { type: String, required: true },
});

export const Product = mongoose.model<IProduct>('Product', productSchema);
