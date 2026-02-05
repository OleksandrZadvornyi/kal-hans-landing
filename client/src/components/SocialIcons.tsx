import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => (
  <div className="flex justify-center gap-3 pt-8">
    <FaFacebookSquare className="h-6.5 w-6.5 duration-300 hover:scale-115" />
    <FaInstagram className="h-6.5 w-6.5 duration-300 hover:scale-115" />
  </div>
);

export default SocialIcons;
