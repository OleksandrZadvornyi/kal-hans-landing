interface InstagramPostProps {
  imageSrc: string; // Base URL without extension
  content: string;
  date: string;
}

const InstagramPost = ({ imageSrc, content, date }: InstagramPostProps) => {
  const backgroundImage = [
    `url(${imageSrc}.avif)`,
    `url(${imageSrc}.webp)`,
    `url(${imageSrc}.jpg)`,
  ].join(', ');

  return (
    <div className="relative h-[350px] w-[350px] shrink-0">
      {/* Background container */}
      <div
        style={{ backgroundImage }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full">
        <p className="inline-block max-h-[76%] overflow-hidden p-4 text-sm leading-[21px] text-white">
          {content}
        </p>
        <span className="absolute bottom-2 left-1 block p-4 text-sm text-gray-200">
          {date}
        </span>
      </div>
    </div>
  );
};

export default InstagramPost;
