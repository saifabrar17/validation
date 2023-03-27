import React, { useState } from "react";
import Button from "../atoms/Button";
import Form from "./Form";

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
          <Form ></Form>
          <Button title="Delete" onClick={() => handleDeleteClick(index)}>Delete Div</Button>
        </div>
      ))}
      <Button onClick={handleAddClick} title="Add Div" />
      {/* <button onClick={handleAddClick}>Add Div</button> */}
    </div>
  );
};

export default DivShowHide;
