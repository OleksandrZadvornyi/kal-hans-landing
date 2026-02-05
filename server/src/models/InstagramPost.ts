import mongoose from 'mongoose';

interface IInstagramPost {
  imageSrc: string;
  imageAlt: string;
  content: string;
  date: string;
}

const instagramPostSchema = new mongoose.Schema<IInstagramPost>({
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
});

export const InstagramPost = mongoose.model<IInstagramPost>(
  'InstagramPost',
  instagramPostSchema
);
