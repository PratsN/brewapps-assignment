import React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import "./CardData.css";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const CardData = ({ video }) => {
  const { title, image, date, category, link } = video;

  return (
    <>
      <Card>
        <CardActionArea
          sx={{
            "&:hover": {
              backgroundColor: "#616161",
              opacity: ".9",
            },
          }}
        >
          <a
            target="_blank"
            href={link}
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <CardMedia component="img" height="200" image={image} alt={title} />

            <CardContent
              style={{
                backgroundColor: "black",
                color: "white",
                height: "20vh",
              }}
            >
              <div className="text-style">{title}</div>
              <div className="card-content">
                <div className="sub-content">
                  <div>{category}</div>
                  <div>{date}</div>
                </div>

                <div>
                  <Checkbox
                    sx={{ color: "white" }}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </div>
              </div>
            </CardContent>
          </a>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardData;
