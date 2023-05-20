import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer  p-10 bg-purple-100 text-gray-content ">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>

        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/allToys" className="link link-hover">
          All Toys
        </Link>
        <Link to="/blog" className="link link-hover">
          Blog
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Follow us</span>
        <div className="form-control w-80">
          <div className="flex  gap-4">
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook className="w-8 h-8 text-purple-600 hover:text-purple-400"></FaFacebook>
            </a>

            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram className="w-8 h-8 text-purple-600"></FaInstagram>
            </a>
            <a href="https://www.linkedin.com/" target="blank">
              <FaLinkedin className="w-8 h-8 text-purple-600"></FaLinkedin>
            </a>
            <a href="https://www.youtube.com/" target="blank">
            
              <FaYoutube className="w-8 h-8 text-purple-600"></FaYoutube>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
