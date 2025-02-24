import Blog from './Blog';
import { useEffect, useState } from 'react';

interface Blog {
  _id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  date: string;
  content: string;
}

function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="my-24">
      <h2 className="text-secondary text-center text-lg">
        The Naturalist Blog
      </h2>
      <div className="mx-10 mt-12 mb-24 grid grid-cols-1 gap-18 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Blog key={blog._id} {...blog} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
