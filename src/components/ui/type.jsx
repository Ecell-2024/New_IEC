/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={` text-black font-mono  text-5xl ${word.className}`}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={`flex flex-row items-center justify-center space-x-1 ${className}`}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={`block rounded-sm w-[4px] h-10 sm:h-12 xl:h-12 bg-blue-500 ${cursorClassName}`}
      ></motion.span>
    </div>
  );
};

export default function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "IEC  " },
    { text: "KIET" },
  ];

  return (
    <div className=" ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
