export function isValidEmail(email) {
  return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+([.]{1})+[a-z]{2,}$/);
}

export function checkMinLength(value, minLength) {
  return value.length < minLength;
}

export function checkMaxLength(value, maxLength) {
  return value.length > maxLength;
}

export function isNumeric(str) {
  const pattern = "^[0-9]*$";
  return str.match(pattern);
}

export function isNumberBetween(x, min, max) {
  return x >= min && x <= max;
}

export function isEmpty(strValue) {
  if (strValue.length > 0) {
    return false;
  } else {
    return true;
  }
}
export function isPasswordTooShort(password) {
  if (password.length < 6) {
    return true;
  } else {
    return false;
  }
}

export function countWords(str) {
  return str.trim().split(/\s+/).length;
}

export function isValidMobileNumber(val) {
  return val.match(
    /(^(([+]{1}|[0]{2})([0-9]{2}))?([-]{1})?([0-9]{5})([-]{1})?([0-9]{6}))$/
  );
}
