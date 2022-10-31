import { Instagram, Linkedin, Mail, Twitter } from "../utils/icons";

const Footer = () => {
  const iconclass = "h-12 w-12 fill-white m-4";
  return (
    <div className="flex justify-between items-center bg-glass shadow-glass backdrop-blur-glass glass-image-source">
      <img src="/assets/logo.svg" alt="logo" />
      <div className="flex">
        <a href="" target="_blank">
          <Mail classname={iconclass} />
        </a>
        <a href="" target="_blank">
          <Instagram classname={iconclass} />
        </a>
        <a href="" target="_blank">
          <Twitter classname={iconclass} />
        </a>
        <a href="" target="_blank">
          <Linkedin classname={iconclass} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
