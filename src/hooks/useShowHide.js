import { useState } from "react";

export default function useShowHide() {
  const [divs, setDivs] = useState([]);

  const handleAddClick = () => {
    const newDiv = <div>New Div</div>;
    setDivs([...divs, newDiv]);
  };

  const handleDeleteClick = (index) => {
    const newDivs = divs.filter((div, i) => i !== index);
    setDivs(newDivs);
  };

  return {
    divs,
    handleAddClick,
    handleDeleteClick,
  };
}
