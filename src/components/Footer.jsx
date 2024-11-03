// Import necessary icons from React Icons
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-400 py-10">
      {/* Main container for footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top section with navigation and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/tvshows" className="hover:text-gray-200">TV Shows</Link>
            <Link to="/movies" className="hover:text-gray-200">Movies</Link>
            <Link to="mylist" className="hover:text-gray-200">My List</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-gray-200">
              <FaFacebookF size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-200">
              <FaTwitter size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-200">
              <FaInstagram size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-200">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Bottom section with legal information */}
        <div className="text-sm text-gray-500 space-y-2">
          <p>© Copy Right Info.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-gray-200">Privacy</a>
            <a href="#" className="hover:text-gray-200">Terms of Use</a>
            <a href="#" className="hover:text-gray-200">Legal Notices</a>
            <a href="#" className="hover:text-gray-200">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
