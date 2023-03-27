import { useState } from "react";
import { validate } from "../components/atoms/FormValidate";

export default function useFormValidation() {
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

validate(formData);

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
  return {
    formData,
    formErrors,
    handleSubmit,
    handleInputChange,

  };
}
