import React from "react";
import Carousel from "../components/Carousel";
import Chatbox from "../components/Chatbox";
import CountdownTimer from "../components/CountDownTimer";
const Home = () => {
  // change data
  const targetDate = "2024-09-20";

  return (
    <div className="container mx-auto">
      <main>
        <div className="main flex flex-col lg:flex-row justify-center items-center py-4 w-full lg:w-7/8 space-x-0.5">
          <div className="w-full lg:w-[650px]">
            <div className="home_text mx-auto md:px-20 text-center">
              <CountdownTimer targetDate={targetDate} />
              <h1 className="text-[27px] font-bold">
                Generate UI from prompts or images.
              </h1>
              <h1 className="text-[27px] font-bold">
                Get inspired by community creations.{" "}
              </h1>
              <p className=" my-12 text-[17px]">
                Lorem ipsum dolors esLorem ipsum dolors es Lorem ipsum Lorem
                ipsum dolors esLorem ipsum dolors esLorem ipsum dolors esLorem
                ipsum dolors es
              </p>
            </div>
            <div className="caro_md">
              <Carousel />
            </div>
            <div className="chat_sm w-full lg:w-[437px] my-4 lg:my-0 md:h-[582px]">
              <Chatbox />
            </div>
          </div>
          <div className="chat_md w-full lg:w-[437px] my-4 lg:my-0 md:h-[582px]">
            <Chatbox />
          </div>

          <div className="caro_sm">
            <h1 className="text-[25px] font-bold text-center my-4">
              UI generation exemple
            </h1>
            <Carousel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
