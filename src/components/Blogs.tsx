import blogs from '../data/blogs.json';
import Blog from './Blog';

function Blogs() {
  return (
    <section className="my-24">
      <h2 className="text-secondary text-center text-lg">
        The Naturalist Blog
      </h2>
      <div className="mx-10 mt-12 mb-24 grid grid-cols-1 gap-18 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
