// ParallaxScroll.js
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { cn } from "../../utils/cn";
import PropTypes from "prop-types";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [1, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [1, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [1, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <>
      <main>
        <h1 className="flex text-[48px] justify-center mb-[-80px]">
          Our <span className="text-[#4D55BA] ">Gallery</span>
        </h1>
        <div
          className={cn(
            "h-[80rem] items-start overflow-y-auto w-full",
            className
          )}
          ref={gridRef}
          style={{ scrollbarColor: "transparent transparent" }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
            ref={gridRef}
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="grid gap-10">
              {firstPart.map((el, idx) => (
                <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                  <img
                    src={el}
                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {secondPart.slice(0, 3).map((el, idx) => (
                <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                  <img
                    src={el}
                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {thirdPart.map((el, idx) => (
                <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                  <img
                    src={el}
                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

ParallaxScroll.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

// export { ParallaxScroll };
