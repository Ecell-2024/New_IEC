/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import img1 from "../assets/cards/technology-human-head-logo-icon-design-digital-woman-head-brain-shape-with-gears-idea-concept-innovation-genius-free-vector.jpg";
import img2 from "../assets/cards/free-entrepreneurship-vector.webp";
import img3 from "../assets/cards/a-professional-psychologist-offers-counseling-during-psychotherapy-or-health-diagnosis-consultation-free-vector.jpg";
import "./cards.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expandedIndex, setExpandedIndex] = useState(-1); // Index of currently expanded card

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index); // Toggle the expanded index
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".MuiCard-root")) {
      setExpandedIndex(-1); // Collapse the expanded card if clicked outside the cards
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (<>
  <h1 className="text-[#012060] !font-medium !text-4xl lg:!text-5xl  text-center m-4 my-10">Our Dignitories</h1>
    <div className="flex con justify-around mb-10 mt-[50px]">
      
      {[0, 1, 2].map((index) => (
        <div key={index} className="card-column">
          <Card
            sx={{
              maxWidth: 305,
              maxHeight: index === expandedIndex ? 550 : "none",
              transition: "max-height 0.2s ease-in-out",
              borderRadius: 5,
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
            }}
          >
            <CardHeader
              title={
                index === 0
                  ? "Innovation"
                  : index === 1
                  ? "Entrepreneurship"
                  : "Consultancy"
              }
              sx={{ textAlign: "center", fontStyle: "bold" }}
            />
            <CardMedia
              component="img"
              image={index === 0 ? img1 : index === 1 ? img2 : img3}
              alt="Paella dish"
              sx={{ height: 300, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={index === expandedIndex}
                onClick={() => handleExpandClick(index)}
                aria-expanded={index === expandedIndex}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={index === expandedIndex} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                {/* ... (rest of the content) ... */}
              </CardContent>
            </Collapse>
          </Card>
        </div>
      ))}
    </div>
    </>
  );
}
