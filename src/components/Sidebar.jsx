import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constant";

// const selectedCategory = 'Home';

const Sidebar = ({selectedCategory,setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      marginTop:"20px"
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{backgroundColor: category.name === selectedCategory && '#282828' ,color:"white"  }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "whitesmoke", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.7" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;