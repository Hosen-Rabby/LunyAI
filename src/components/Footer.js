import logo from "../assets/Mini logo.svg";
import linkedIn from "../assets/icons8-linkedin 1.svg";
import vector from "../assets/icons8-dribbble 1.svg";
const Footer = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between mt-10 md:mt-20 container mx-auto text-[14px] text-[#667085]">
      <div className="flex items-center mb-4 md:mb-0">
        <img src={logo} alt="Logo" className="w-[33px] h-[33px] mr-1" />
        <p className="">
          <span className="font-semibold text-[#000]">Luny.AI</span>- 2024 All
          Rights Reserved
        </p>
      </div>
      <div className="flex items-center">
        <p>Follow us :</p>
        <a href="">
          <img src={linkedIn} alt="Logo" className="w-[24] h-[24px]" />
        </a>
        <a href="">
          <img src={vector} alt="Logo" className="w-[24] h-[24px]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
