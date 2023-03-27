import React, { useState } from "react";

const DivShowHide = () => {
  const [divs, setDivs] = useState([]);

  const handleAddClick = () => {
    const newDiv = <div>New Div</div>;
    setDivs([...divs, newDiv]);
  };

  const handleDeleteClick = (index) => {
    const newDivs = divs.filter((div, i) => i !== index);
    setDivs(newDivs);
  };

  console.log(divs);
  return (
    <div>
      {divs.map((div, index) => (
        <div key={index}>
          {div}
          <p>sss</p>
          <button onClick={() => handleDeleteClick(index)}>Delete Div</button>
        </div>
      ))}
      <button onClick={handleAddClick}>Add Div</button>
    </div>
  );
};

export default DivShowHide;
