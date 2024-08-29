import React, { useState, useEffect } from "react";
import arrow from "../assets/arrow.svg";
import arrow1 from "../assets/Arrow (1).svg";

const Arrows = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`parent-container ${visible ? "block" : "hidden"}`}
    >
      <div className="moving-box">
        <div className="arrow_with_name arrow_you">
          <span className="arrow_icon">
            <img src={arrow} alt="arrow" />
          </span>
          <span className="name bg-[#907CFF]">You</span>
        </div>
      </div>
      <div className="moving-box">
        <div className="arrow_with_name arrow_other">
          <span className="arrow_icon">
            <img src={arrow1} alt="arrow" />
          </span>
          <span className="name bg-[#2E90FA]">Kath</span>
        </div>
      </div>
    </div>
  );
};

export default Arrows;
