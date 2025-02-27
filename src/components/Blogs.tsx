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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="my-24">
      <h2 className="text-secondary text-center text-lg">
        The Naturalist Blog
      </h2>
      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="border-secondary h-12 w-12 animate-spin rounded-full border-t-2 border-b-2"></div>
        </div>
      ) : (
        <div className="mx-10 mt-12 mb-24 grid grid-cols-1 gap-18 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Blog key={blog._id} {...blog} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Blogs;
