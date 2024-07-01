import Lottie from "lottie-react";
import lot from "../../assets/Home/Animation - 1705429785180.json";
import lot2 from "../../assets/Home/Animation - 1716382076840.json";
import { TiLightbulb } from "react-icons/ti";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "./Variant";
function About() {
  return ( 
    <>
    {/* Innovation */}
    <div className="flex flex-col lg:flex w-[100vw] lg:w-full justify-center items-center mt-0 lg:flex-row my-[0%]  ">
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        className="w-full lg:w-full flex justify-center items-center"
      >
        <Lottie
          animationData={lot2}
          loop={true}
          className="lg:flex w-3/4 lg:w-2/3 opacity-90 ml-[-10px] lg:ml-[-80px]"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        className="dark:text-white w-11/12 lg:w-4/5 flex-col justify-center items-center lg:items-start lg:justify-center "
      >
        <div className="flex justify-center items-center lg:justify-start">
          <h2 className="!font-medium !text-4xl lg:!text-5xl ">
            What is <span className="text-[#FE0707]">Innovation</span> ?
          </h2>
          <TiLightbulb className="ml-2 self-center w-8 h-10" />
        </div>
        <p className="!text-md text-center lg:text-left mt-10 w-[100%] lg:w-[85%] font-medium dark:font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo odit sed suscipit, soluta modi amet facere quae accusantium consectetur voluptatibus, unde incidunt veritatis, quibusdam ut error vero! Et, quidem molestiae!&apos;s generation, and to encourage an entrepreneurial mindset
          in an aspiring individual to convert their &quot;Drop of an Idea into
          an Ocean of Reality&quot;.
        </p>
        <div className="w-full  flex justify-center items-center lg:justify-start mt-5">
          <Button color="#FE0707" />
        </div>
      </motion.div>
    </div>
    {/* Entrepreneurship */}
    <div className="flex flex-col lg:flex w-[100vw] lg:w-full justify-center items-center lg:flex-row my-[8%] lg:my-[1%] ">
    <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        className="dark:text-white w-11/12 lg:w-4/5 lg:pl-32 flex-col justify-center items-center lg:items-start lg:justify-center "
      >
        <div className="flex justify-center items-center lg:justify-start">
          <h2 className="!font-medium !text-3xl lg:!text-4xl ">
            What is <span className="text-[#FFC000]">Entrepreneurship</span> ?
          </h2>
          <TiLightbulb className="ml-2 self-center w-8 h-10" />
        </div>
        <p className="!text-md text-center lg:text-left mt-10 w-[100%] lg:w-[85%] font-medium dark:font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam illum porro facere doloribus quisquam. Aut ipsa, tenetur expedita architecto tempora nulla provident dolor place &apos;s generation, and to encourage an entrepreneurial mindset
          in an aspiring individual to convert their &quot;Drop of an Idea into
          an Ocean of Reality&quot;.
        </p>
        <div className="w-full  flex justify-center items-center lg:justify-start mt-5">
          <Button color="#FFC000"/>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        className="w-full lg:w-full flex justify-center items-center"
      >
        <Lottie
          animationData={lot}
          loop={true}
          className="lg:flex w-3/4 lg:w-2/3 opacity-90 mr-[-10px] lg:mr-[-80px]"
        />
      </motion.div>
      
    </div>
    {/* Consultancy */}
    <div className="flex flex-col lg:flex w-[100vw] lg:w-full justify-center items-center lg:flex-row my-[8%] lg:my-[1%] ">
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        className="w-full lg:w-full flex justify-center items-center"
      >
        <Lottie
          animationData={lot}
          loop={true}
          className="lg:flex w-3/4 lg:w-2/3 opacity-90 ml-[-10px] lg:ml-[-80px]"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        className="dark:text-white w-11/12 lg:w-4/5 flex-col justify-center items-center lg:items-start lg:justify-center "
      >
        <div className="flex justify-center items-center lg:justify-start">
          <h2 className="!font-medium !text-4xl lg:!text-5xl ">
            What is <span className="text-[#012060]">Consultancy</span> ?
          </h2>
          <TiLightbulb className="ml-2 self-center w-8 h-10" />
        </div>
        <p className="!text-md text-center lg:text-left mt-10 w-[100%] lg:w-[85%] font-medium dark:font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat consequuntur obcaecati iste, dignissimos odit accusamus, porro explicabo quisquam ut laborum impedit. Earum aut culpa libero omnis dolore voluptatem aspernatur!&apos;s generation, and to encourage an entrepreneurial mindset
          in an aspiring individual to convert their &quot;Drop of an Idea into
          an Ocean of Reality&quot;.
        </p>
        <div className="w-full  flex justify-center items-center lg:justify-start mt-5">
          <Button color="#012060" />
        </div>
      </motion.div>
    </div>
    </>
  );
}

export default About;