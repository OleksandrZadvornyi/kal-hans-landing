import InstagramPost from './InstagramPost';
import posts from '../data/instagram-posts.json';

function InstagramWrapper() {
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
        {/* Container for the scrolling posts */}
        <div
          className="animate-scroll flex gap-5"
          style={{
            animation: 'scroll 30s linear infinite',
          }}
        >
          {duplicatedPosts.map((post, index) => (
            <InstagramPost key={`${post.id}-${index}`} {...post} />
          ))}
        </div>
      </div>
      <button className="bg-tertiary mt-12 mb-24 w-fit cursor-pointer px-11 py-3">
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
