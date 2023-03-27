import React from "react";
import useShowHide from "../../hooks/useShowHide";
import Button from "../atoms/Button";
import Form from "./Form";

const DivShowHide = () => {
    const { divs, handleAddClick, handleDeleteClick } = useShowHide();

  return (
    <div className="container mx-auto">
      {divs.map((div, index) => (
        <div key={index} >
          {div}
          <Form ></Form>
          <Button title="Delete" onClick={() => handleDeleteClick(index)}>Delete Div</Button>
        </div>
      ))}
      <Button className="mt-3" onClick={handleAddClick} title="Add Div" />
      {/* <button onClick={handleAddClick}>Add Div</button> */}
    </div>
  );
};

export default DivShowHide;
