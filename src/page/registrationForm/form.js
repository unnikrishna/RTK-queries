export const registrationFormList = [
  {
    label: "Name",
    id: "firstName",
    inputProps: { maxLength: 25 },
    autoFocus: true,
    required: true,
    helperText: "",
    fullWidth: true,
    // validator: isAlphaNumericWithSpace,
  },
  {
    label: "Email Address",
    id: "email",
    autoFocus: false,
    required: true,
    helperText: "",
    fullWidth: true,
  },
];