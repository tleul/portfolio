
import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

const Example = () => {
  const [colors, setColors] = useState(initialColors);
  const skillsImg =[]
  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 2000);
  }, [colors]);

  return (
  <div className='skill-img'>
        <ul >
      {colors.map(background => (
        <motion.img
          key={background}
          layoutTransition={spring}
          style={{ background }}
        src={background}
        />
      ))}
    </ul>
  </div>
   
   
   
  );
};

const initialColors = ["./skills/js.svg","./skills/nodejs.svg", "./skills/react.svg","./skills/mongodb.jpeg"];

export default Example