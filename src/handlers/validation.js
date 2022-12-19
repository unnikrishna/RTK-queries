export const isAlphaNumericWithSpace = (value) => {
  const RegEx = /^[\w\-\s]+$/;
  return RegEx.test(value);
};
export const isValidPhoneNumber = (value) => {
  const RegEx = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  return RegEx.test(value);
};
export const isValidEmail = (value) => {
  const RegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return RegEx.test(value);
};
export const isValidPassword = (value) => {
  const RegEx = /^(?=.*\d)(?=.*[.,!@#$%^&*<>:;?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return RegEx.test(value);
};

export const isValidAge = (value) => {
  return value >= 18 && value <= 150;
};
