import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-5 text-xl">
      <div className="cursor-pointer duration-300 hover:text-secondary">
        <FaXTwitter />
      </div>
      <div className="cursor-pointer duration-300 hover:text-secondary">
        <FaFacebookF />
      </div>
      <div className="cursor-pointer duration-300 hover:text-secondary">
        <FaInstagram />
      </div>
    </div>
  );
}
