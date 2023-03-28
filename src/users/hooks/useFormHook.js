import { useState } from "react";
import { userValidation } from "../utils/userValidation";

export default function useFormHook() {
  const [userData, setUserData] = useState([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);

  const [userErrors, setUserErrors] = useState([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    // const errors = userValidation(userData);
    // setUserErrors(errors);
    // if (Object.keys(errors).length === 0) {
    //   console.log(userData);
    // }
    event.preventDefault();

    var error = "";
    userData.forEach((userErrors, index) => {
      for (var fields in userErrors) {
        updateUserData(fields, userErrors[fields], index);
        error = error + userValidation(fields, userErrors[fields]);
      }
      
    });

    console.log(error);
  };

  const addUserData = () => {
    setUserData([
      ...userData,
      {
        name: "",
        email: "",
        password: "",
      },
    ]);

    setUserErrors([
      ...userErrors,
      {
        name: "",
        email: "",
        password: "",
      },
    ]);
  };

  const updateUserData = (name, value, index) => {
    userData[index] = {
      ...userData[index],
      [name]: value,
    };
    setUserData([...userData]);

    userErrors[index] = {
      ...userErrors[index],
      [name]: userValidation(name, value),
    };
    setUserErrors([...userErrors]);
  };

  const removeUserData = (indexParam) => {
    const newUserData = userData.filter((user, index) => indexParam !== index);
    setUserData(newUserData);
    const newUserError = userErrors.filter(
      (error, index) => indexParam !== index
    );
    setUserErrors(newUserError);
  };

  return {
    userData,
    userErrors,
    handleSubmit,
    addUserData,
    updateUserData,
    removeUserData,
  };
}
