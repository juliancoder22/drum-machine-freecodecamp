// src/components/Display.tsx
import React from "react";
import "../App.scss";

type DisplayProps = {
  text: string;
};

const Display: React.FC<DisplayProps> = ({ text }) => {
  return (
    <div id="display" className="display">
      {text}
    </div>
  );
};

export default Display;
