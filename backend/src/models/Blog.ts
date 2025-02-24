import mongoose from 'mongoose';

interface IBlog {
  imageSrc: string;
  imageAlt: string;
  title: string;
  date: string;
  content: string;
}

const blogSchema = new mongoose.Schema<IBlog>({
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String, required: true },
});

export const Blog = mongoose.model<IBlog>('Blog', blogSchema);
