import React from "react";
import Input from "../atoms/Input";
import { useState } from "react";
import { validate } from "../atoms/FormValidate";
import Button from "../atoms/Button";

const DynamicForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    const errors = validate({ ...formData, [name]: value });
    setFormErrors({
      ...formErrors,
      [name]: errors[name],
    });
  };

  // div
  const [divs, setDivs] = useState([]);

  const handleAddClick = () => {
    const newDiv = (
      <div>
        <Input
          lableName="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          errorState={formErrors.name}
        />
        <Input
          lableName="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          errorState={formErrors.email}
        />
        <Input
          lableName="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          errorState={formErrors.password}
        />
      </div>
    );
    setDivs([...divs, newDiv]);
  };

  const handleDeleteClick = (index) => {
    const newDivs = divs.filter((div, i) => i !== index);
    setDivs(newDivs);
  };

  return (
    <div>
      <div className="w-3/4 mx-auto shadow-lg p-10">
        <form onSubmit={handleSubmit}>
          

          {divs.map((div, index) => (
            <div className="shadow-md py-10 px-5" key={index}>
              {div}
              <Button title="Delete" onClick={() => handleDeleteClick(index)} />
            </div>
          ))}
          <Button
            className="mt-3"
            onClick={handleAddClick}
            title="Add Education"
          />
<br></br>
          <div className="mt-5">
          <Button title="Submit" onSubmit={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
