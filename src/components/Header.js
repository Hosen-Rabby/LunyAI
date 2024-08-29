import logo from "../assets/Mini logo.svg";

const Header = () => {
  return (
    <div className="header w-full md:w-[640px] mx-auto mb-4">
      <div className="luny_top_ai_box flex justify-between items-center">
        <div className="w-3/5 flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <p className="mx-2 font-semibold text-[12px] md:text-[14px]">
            Luny.Ai
          </p>
          <p className="text-[#027A48] bg-[#E0F0E6] beta text-[10px]">
            Beta version
          </p>
        </div>
        <div className="w-2/5 float-left">
          <div class="anim_btn">
            <button class=" top_btn text-[12px] md:text-[14px]">
              Join Waiting list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
