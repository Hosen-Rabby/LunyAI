import React, { useState } from "react";
import "../styles/InputBox.css";
import user_i from "../assets/Users.svg";
import camera_i from "../assets/Default.svg";
import camera_ih from "../assets/photoHover.svg";
import sparks from "../assets/sparkles.svg";
import hover_stick from "../assets/btn_hover_stick.svg";
import plane from "../assets/paper-airplane.svg";

const InputBox = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleSend = () => {
    if (inputText || image) {
      onSendMessage(inputText, image);
      setInputText("");
      setImage(null);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setImage(newImage);
      console.log("Image updated:", newImage);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleTextareaClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1000);
  };

  return (
    <div key={image}>
      <div className={`inbox_gd ${showAlert ? "inbox_gd_alert" : ""}`}>
        <div className="max_alert">Max 400 characters</div>

        <div className="gradient-border">
          <div className="inner-content flex items-center">
            {image ? (
              <div className="image-preview">
                <img
                  src={image}
                  alt="Preview"
                  className="preview-image max-h-[25px] max-w-[36px]"
                />
                <button
                  onClick={handleRemoveImage}
                  className="remove-preview-button"
                >
                  <p>×</p>
                </button>
              </div>
            ) : (
              <img
                src={user_i}
                alt="User"
                className="user-icon h-[27px] w-[27px]"
              />
            )}
            <textarea
              placeholder="Hello"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              maxLength={400}
              className="input-textarea"
              onClick={handleTextareaClick}
            />
            <label
              htmlFor="fileInput"
              style={{ position: "relative" }}
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
            >
              <img
                src={hovered ? camera_ih : camera_i}
                alt="Upload"
                className="camera-icon h-[27px] w-[27px]"
              />
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleImageChange}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                }}
              />
            </label>
            <button
              onClick={handleSend}
              className="flex items-center justify-between generate_btn"
            >
              <img src={plane} alt="" className="b_plane py-1" />
              <img src={sparks} alt="" className="b_img" />
              <img src={hover_stick} alt="stick" className="btn_stcik b_img" />
              <p className="text-[12px] ml-1 b_text">Generate UI</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
