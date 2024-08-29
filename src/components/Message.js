import React from "react";
import "../styles/Message.css";
import user_i from "../assets/Users.svg";
import luny_image from "../assets/Mini logo (1).svg";

const Message = ({ sender, text, images, onRemoveImage }) => {
  let img;
  if (sender === "Luny") {
    img = (
      <div className="sender_img">
        <img src={luny_image} alt="" className="h-[27px] w-[27px]" />
      </div>
    );
  } else {
    img = (
      <div className="sender_img">
        <img src={user_i} alt="" className="h-[27px] w-[27px]" />
      </div>
    );
  }
  return (
    <div className={`message ${sender.toLowerCase()}-message`}>
      <div className="sender flex items-center my-1">
        {img}
        <p className="text-[12px] ml-1">{sender}</p>
      </div>
      <div className="text">
        {text && <div>{text}</div>}
        {images && (
          <div className="image-container">
            <img src={images} alt="User upload" className="message-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
