import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
// import Image from "next/image";
import PropTypes from "prop-types";

const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
//   const [lastSelected, setLastSelected] = useState(null);
  const selectedRef = useRef(null);

  const handleClick = (card) => {
    setSelected(selected === card ? null : card);
  };

  const handleOutsideClick = (event) => {
    if (
      selected &&
      selectedRef.current &&
      !selectedRef.current.contains(event.target)
    ) {
      setSelected(null);
    }
  };
  useEffect(() => {
    if (selected) {
      document.body.addEventListener("click", handleOutsideClick);
    } else {
      document.body.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [selected]);

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div key={i} id={`card-${card.id}`} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 pb-4 inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && (
              <SelectedCard selected={selected} selectedRef={selectedRef} />
            )}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

LayoutGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
        PropTypes.string,
      ]).isRequired,
      className: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
      loading="lazy"
    />
  );
};

BlurImage.propTypes = {
  card: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

const SelectedCard = ({ selected, selectedRef }) => {
  return (
    <div
      ref={selectedRef}
      className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

SelectedCard.propTypes = {
  selected: PropTypes.shape({
    content: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.string,
    ]),
  }),
  selectedRef: PropTypes.object.isRequired,
};

export default LayoutGrid;
