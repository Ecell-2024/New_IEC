// import React from 'react'
// import Footer from "../../components/Footer";
// import NavbarDefault from "../../components/Navbar";
// import Lottie from "lottie-react";
// import left from "../../assets/Home/Home Lottie.json";
import Button from "../../components/Buttons/button";
import RecipeReviewCard from "../../components/card";
import { WavyBackground } from "../../components/ui/bg";
// import { Gallery } from "./gallery";
// import { ParallaxScroll } from "../../components/ui/scroll";
import Note from "./Note";
import LayoutGridDemo from "./images";

const Home = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  // ];
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-20">
        <div className="flex flex-col justify-center items-center">
          <div className="right w-[100%] md:w-[80%] flex justify-center items-center flex-col text-center p-5 md:p-10">
            <h1 className="text-black text-[64px] tracking-normal md:tracking-wider">
              <span className="text-[#4D55BA] text-[64px]">IEC</span> KIET
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus molestiae neque assumenda numquam nihil, rerum
              placeat laborum esse id facilis laudantium fugiat quia?
              Accusantium ex impedit expedita explicabo sapiente provident!
            </p>
            <div className="mt-5">
              <Button />
            </div>
          </div>
        </div>
      </WavyBackground>
      <RecipeReviewCard />
      {/* <ParallaxScroll images={images} />; */}
      <LayoutGridDemo />
      <Note />
    </>
  );
};

export default Home;
