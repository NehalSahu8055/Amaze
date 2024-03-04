import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

function HoverSidebar({ props }) {
  const { title, items } = props;

  return (
    <Box className="fixed bottom-0 left-[4.8rem] top-0 w-[18rem] bg-black px-8 text-white transition-all duration-500">
      <h2 className="py-4 pb-10 text-3xl">{title}</h2>
      <ul className="grid space-y-4">
        {items.map((item) => {
          return (
            <li key={nanoid()}>
              <Link to={item.toLowerCase().split(" ").join("-")}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default HoverSidebar;
