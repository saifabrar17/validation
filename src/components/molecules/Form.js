import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const Form = () => {
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

  const validate = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "Name is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  
  return (
    <div className="w-3/4 mx-auto shadow-lg p-10">
      <form onSubmit={handleSubmit}>
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

        <Button />
      </form>
    </div>
  );
};

export default Form;
