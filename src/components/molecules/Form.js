import React from "react";
import useFormHook from "../../hooks/useFormHook";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const Form = () => {
  const { handleSubmit, handleInputChange, formData, formErrors } =
    useFormHook();
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

        <Button title="Submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
