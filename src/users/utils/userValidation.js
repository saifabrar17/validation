import { isEmpty, isPasswordTooShort, isValidEmail } from "../utils/Validate";

export const userValidation = (name, value) => {
  // console.log(name, value);
  
  switch (name) {
    case "name":
      if (isEmpty(value)) {
        return "Invalid name.";
      }
      return "";

    case "email":
      if (!isEmpty(value)) {
        if (!isValidEmail(value)) {
          return "Invalid email.";
        }
      }
      return "";

    case "password":
      if (isPasswordTooShort(value)) {
        return "Password must be atleast 6 char long.";
      }
      return "";
    default:
      return "";
  }
};
