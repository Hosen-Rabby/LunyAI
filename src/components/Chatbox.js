import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import InputBox from "./InputBox";
import "../styles/Chatbox.css";
import cam from "../assets/Photo.svg";
import pencil from "../assets/pencil.svg";
import figma from "../assets/Figma.svg";
import people from "../assets/user-group.svg";
import arrow_r from "../assets/arrow-sm-right.svg";
import chat_top_img from "../assets/Illustration (1).svg";
import loading_gif from "../assets/loading.gif";
import luny_image from "../assets/Mini logo (1).svg";
import r1a from "../assets/SVG revolut.svg";
import r1b from "../assets/SVG Luny.svg";
import r2 from "../assets/SVG Luny (1).svg";
import r3 from "../assets/Frame 427319150.svg";
import r4 from "../assets/Frame 427319150 (1).svg";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [showProposals, setShowProposals] = useState(true);
  const messagesEndRef = useRef(null);

  const proposalBox = (
    <div className="proposal-box text-[12px]">
      <p className="mb-2">How can I help you ? </p>
      <p
        className="flex items-center proposal"
        onClick={() => handleProposalClick("1")}
      >
        <span>
          {" "}
          <img src={cam} alt="" className="mr-2" />
        </span>
        Generate UI from your favorite screenshot
        <span>
          <img src={arrow_r} alt="" className="ml-1" />
        </span>
      </p>
      <p
        className="flex items-center proposal"
        onClick={() => handleProposalClick("2")}
      >
        <span>
          {" "}
          <img src={pencil} alt="" className="mr-2" />
        </span>
        Generate UI from prompts
        <span>
          <img src={arrow_r} alt="" className="ml-1" />
        </span>
      </p>
      <p
        className="flex items-center proposal"
        onClick={() => handleProposalClick("3")}
      >
        <span>
          {" "}
          <img src={figma} alt="" className="mr-2" />
        </span>
        Fully editable on Figma
        <span>
          <img src={arrow_r} alt="" className="ml-1" />
        </span>
      </p>
      <p
        className="flex items-center proposal"
        onClick={() => handleProposalClick("4")}
      >
        <span>
          {" "}
          <img src={people} alt="" className="mr-2" />
        </span>
        Share creations, get inspired by community
        <span>
          <img src={arrow_r} alt="" className="ml-1" />
        </span>
      </p>
      <button className="wishlist-button">Join waiting list</button>
    </div>
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, waitingForResponse]);

  const handleUserMessage = (message, images) => {
    setMessages([...messages, { sender: "You", text: message, images }]);
    setWaitingForResponse(true);
    const res = "Hi creator, ask me to generate a UI or upload a screenshot you want me to reproduce.";
    setTimeout(() => {
      handleAIResponse(res);
      setShowProposals(true);
    }, 1000);
  };

  const handleAIResponse = (responseText) => {

    const aiResponse = responseText;
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "Luny", text: aiResponse },
    ]);
    setWaitingForResponse(false);
  };

  const handleProposalClick = (proposal) => {
    console.log(proposal);
    let responseText = "Subscribe to Luny AI";

    switch (proposal) {
      case "1":
        responseText = (
          <div className="text-[12px]">
            <p>
              Directly upload screenshots of UIs you like. Don't waste time
              reproducing them, speed up your component design. ✨
            </p>
            <p className="my-4">
              Here's an example with the following prompt and image : "Clone
              this Revolut setting interface". Our AI is still learning, and the
              result is not yet perfect.
            </p>
            <div className="img flex space-x-1 w-full justify-between">
              <img src={r1a} alt="response image" className="w-1/2" />
              <img src={r1b} alt="response image" className="w-1/2" />
            </div>
          </div>
        );
        break;
      case "2":
        responseText = (
          <div className="text-[12px]">
            <p>
              Ask me to generate a simple component (navbar, card, pop-up, etc.)
              or a complete interface. . ✨
            </p>
            <p className="">
              Here's an example with the following prompt : “I want a
              dark-themed component card presents a project or business card for
              "Acme Inc.", with a minimalist blurred-effect design, prominent
              title, green active status indicator and descriptive text. The
              elegant interface features a subtle progress bar with a green
              gradient and is set against a halo purple.”
            </p>
            <p>Our AI is still learning, and the result is not yet perfect.</p>
            <div className="img flex space-x-1 w-full justify-between">
              <img src={r2} alt="response image" className="w-full" />
            </div>
          </div>
        );
        break;
      case "3":
        responseText = (
          <div className="text-[12px]">
            <p>
              All my UI generations are editable with Figma, and autolayout is
              included for easy editing. In the future, we'll be doing lots of
              other formats! Be ready.
            </p>
            <div className="img flex space-x-1 w-full justify-between">
              <img src={r3} alt="response image" className="w-full" />
            </div>
          </div>
        );
        break;
      case "4":
        responseText = (
          <div className="text-[12px]">
            <p>
              Get inspired by other designers' creations and prompts, and
              download their creations in Figma format for easy editing.
            </p>
            <p className="mt-12">
              Finally, decide if you'd like to share the creations you've
              created with me.
            </p>
            <div className="img flex space-x-1 w-full justify-between">
              <img src={r4} alt="response image" className="w-full" />
            </div>
          </div>
        );
        break;
      default:
        responseText = "Something went wrong!";
    }

    setWaitingForResponse(true);

    setTimeout(() => {
      handleAIResponse(responseText);
      setShowProposals(true);
    }, 1000);
  };

  return (
    <div className="chatbox">
      <div className="chat_top_bar w-full h-[57px]">
        <img src={chat_top_img} alt="" />
      </div>
      <div className="messages px-3">
        <div className="mt-20">
          <div className="flex space-x-1 items-center">
            <img src={luny_image} alt="" className="h-[27px] w-[27px]" />
            <p className="text-[12px] font-semibold">Luny</p>
          </div>
          <div className="message ai-message text-[12px]">
            <p className="pb-4">
              Hi creator, ask me to generate a UI or upload a screenshot you
              want me to reproduce. Discover my beautiful features of our bêta
              version :{" "}
            </p>
            <div className="proposal-box text-[12px]">
              <p
                className="flex items-center proposal"
                onClick={() => handleProposalClick("1")}
              >
                <span>
                  {" "}
                  <img src={cam} alt="" className="mr-2" />
                </span>
                Generate UI from your
                <span>
                  <img src={arrow_r} alt="" className="ml-1" />
                </span>
              </p>
              <p
                className="flex items-center proposal"
                onClick={() => handleProposalClick("2")}
              >
                <span>
                  {" "}
                  <img src={pencil} alt="" className="mr-2" />
                </span>
                Generate UI from prompts
                <span>
                  <img src={arrow_r} alt="" className="ml-1" />
                </span>
              </p>
              <p
                className="flex items-center proposal"
                onClick={() => handleProposalClick("3")}
              >
                <span>
                  {" "}
                  <img src={figma} alt="" className="mr-2" />
                </span>
                Fully editable on Figma
                <span>
                  <img src={arrow_r} alt="" className="ml-1" />
                </span>
              </p>
              <p
                className="flex items-center proposal"
                onClick={() => handleProposalClick("4")}
              >
                <span>
                  {" "}
                  <img src={people} alt="" className="mr-2" />
                </span>
                Share creations, get inspired by community
                <span>
                  <img src={arrow_r} alt="" className="ml-1" />
                </span>
              </p>
              <button className="wishlist-button">Join waiting list</button>
            </div>
          </div>
        </div>
        {/* )} */}

        {messages.map((msg, index) => (
          <Message
            key={index}
            sender={msg.sender}
            text={msg.text}
            images={msg.images}
          />
        ))}

        {waitingForResponse && (
          <div className="message ai-message loading-box mb-20">
            <img src={loading_gif} alt="" />
          </div>
        )}
        {!waitingForResponse && showProposals && messages.length > 0 && (
          <button className="wishlist-button_2 text-[12px]">
            Join waiting list
          </button>
        )}
        {!waitingForResponse && showProposals && messages.length > 0 && (
          <div className="message ai-message">{proposalBox}</div>
        )}

        <div ref={messagesEndRef} className="mb-20" />
      </div>
      <div className="inbox">
        <InputBox onSendMessage={handleUserMessage} />
      </div>
    </div>
  );
};

export default Chatbox;
