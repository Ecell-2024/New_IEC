// import React from 'react';
import Card  from "../../components/card.jsx";
import About from "../../components/About/About.jsx";
import Button from "../../components/About/Button";
import StartUp from "../../components/StartUps/Start.jsx";
import Carousel from "../../components/carousel/carousel.jsx";
import { WavyBackground } from "../../components/ui/bg";
import Type from "../../components/ui/type.jsx";

const Home = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center  h-screen overflow-hidden bg-zinc-50">
      <WavyBackground className="max-w-3xl mx-auto overflow-hidden ">
        <div className="flex flex-col justify-center items-center">
          <div className="right w-full md:w-4/5 flex justify-center items-center flex-col text-center p-5 md:p-10">
            <h1 className="text-black text-4xl mt-10 md:text-5xl tracking-normal md:tracking-wider">
              <Type/>
            </h1>
            <p className="mt-10 text-base md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus molestiae neque assumenda numquam nihil, rerum
              placeat laborum esse id facilis laudantium fugiat quia?
              Accusantium ex impedit expedita explicabo sapiente provident!
            </p>
            <div className="mt-10">
              <Button color="#282936" />
            </div>
          </div>
        </div>
      </WavyBackground>
    </div>
    <About/>
    <StartUp/>
    <Carousel/>
    <Card/>
    </>
  );
};

export default Home;