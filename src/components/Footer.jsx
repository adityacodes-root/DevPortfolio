import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>  Aditya's Portfolio.  </p>
      <div className="flex justify-center gap-6 mt-2">
        <a href="https://github.com/adityacodes-root" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-7 h-7 hover:opacity-80 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/aditya-dubey-438a11301/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-7 h-7 hover:opacity-80 hover:scale-110" />
        </a>
        <a href="http://instagram.com/aditya._.48/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="w-7 h-7 hover:opacity-80 hover:scale-110" />
        </a>
        <a href="mailto:aditya.d2676@gmail.com" rel="noopener noreferrer">
  <img src={gmail} alt="Gmail" className="w-7 h-7 hover:opacity-80 hover:scale-110" />
</a>

      </div>
    </footer>
  );
};

export default Footer;

  