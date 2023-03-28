import React from "react";
import { useState } from "react";

const FormDynamic = () => {
  const [formFields, setFormFields] = useState([{ name: "", email: "" }]);
  const [formErrors, setFormErrors] = useState([]);
  const [numFields, setNumFields] = useState(1);
  const addField = () => {
    setFormFields([...formFields, { name: "", email: "" }]);
    setNumFields(numFields + 1);
  };

  const removeField = (index) => {
    setFormFields(formFields.filter((_, i) => i !== index));
    setNumFields(numFields - 1);
  };

  const validateForm = () => {
    const errors = [];

    formFields.forEach((field, index) => {
      if (!field.name) {
        errors.push(`Name is required for field ${index + 1}`);
      }

      if (!field.email) {
        errors.push(`Email is required for field ${index + 1}`);
      } else if (!/\S+@\S+\.\S+/.test(field.email)) {
        errors.push(`Invalid email address for field ${index + 1}`);
      }
    });

    setFormErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(formFields);
    }
  };

  console.log(formErrors);

  return (
    <div>
      <div className="container mx-auto">
        <form action="">
          {formFields.map((field, index) => (
            <div key={index} className="my-4 flex items-center">
              <input
                type="text"
                className="w-1/2 p-2 border rounded mr-2"
                placeholder="Name"
                value={field.name}
                onChange={(e) => {
                  const newFields = [...formFields];
                  newFields[index].name = e.target.value;
                  setFormFields(newFields);
                }}
              />
              <input
                type="email"
                className="w-1/2 p-2 border rounded mr-2"
                placeholder="Email"
                value={field.email}
                onChange={(e) => {
                  const newFields = [...formFields];
                  newFields[index].email = e.target.value;
                  setFormFields(newFields);
                }}
                
              />

             
             
              {numFields > 1 && (
                <button
                  type="button"
                  className="p-2 border rounded text-red-500 hover:bg-red-500 hover:text-white"
                  onClick={() => removeField(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {formErrors.length > 0 && (
            <ul className="my-4 text-red-500">
              {formErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
          <button
            type="button"
            className="p-2 border rounded text-green-500 hover:bg-green-500 hover:text-white"
            onClick={addField}
          >
            Add Field
          </button>

          <button
            type="submit"
            className="p-2 border rounded text-green-500 hover:bg-green-500 hover:text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormDynamic;
