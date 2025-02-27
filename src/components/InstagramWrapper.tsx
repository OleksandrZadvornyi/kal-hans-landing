import InstagramPost from './InstagramPost';
import { useEffect, useState } from 'react';

interface InstagramPost {
  _id: string;
  imageSrc: string;
  imageAlt: string;
  content: string;
  date: string;
}

function InstagramWrapper() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/instagram-posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  // Duplicate posts to create seamless infinite scroll
  const duplicatedPosts = [...posts, ...posts];

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-secondary mt-20 text-center text-3xl">
        @kalhansnaturals
      </h2>
      <p className="mt-8 text-center text-sm">
        Follow us to share snaps of you 💕 and your glowing skin ✨🌿💧 & learn
        more about fun events, contests 🎁 and giveaways.
      </p>
      {/* Wrapper for the scrolling content */}
      <div className="relative mt-11">
        {isLoading ? (
          <div className="flex h-32 w-full items-center justify-center">
            <div className="border-secondary h-12 w-12 animate-spin rounded-full border-t-2 border-b-2"></div>
          </div>
        ) : (
          /* Container for the scrolling posts */
          <div
            className="animate-scroll flex gap-5"
            style={{
              animation: 'scroll 30s linear infinite',
            }}
          >
            {duplicatedPosts.map((post, index) => (
              <InstagramPost key={`${post._id}-${index}`} {...post} />
            ))}
          </div>
        )}
      </div>
      <button className="bg-tertiary hover:bg-secondary mt-12 mb-24 w-fit cursor-pointer px-11 py-3 duration-500 hover:text-white">
        Go To Instagram
      </button>

      {/* Add animation keyframes using a style tag */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-20%);
          }
        }
        .animate-scroll {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}

export default InstagramWrapper;
