import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";

const Footer = () => {
  return (
    <footer className="relative bg-white/5 backdrop-blur-xl text-white py-8 px- text-center rounded-t-2xl shadow-lg">
      <div className="container mx-auto flex flex-col items-center">
      <p className="text-lg font-semibold tracking-wide text-gray-300 drop-shadow-md">
  Aditya's Portfolio
</p>

        {/* Divider Line */}
        <div className="w-20 h-1 bg-blue-500 rounded-full mt-2"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          {[
            { src: github, link: "https://github.com/adityacodes-root" },
            { src: linkedin, link: "https://www.linkedin.com/in/aditya-dubey-438a11301/" },
            { src: instagram, link: "http://instagram.com/aditya._.48/" },
            { src: gmail, link: "mailto:aditya.d2676@gmail.com" }
          ].map(({ src, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer">
              <img 
                src={src} 
                alt="Social Icon" 
                className="w-5 h-5 transition-transform transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
