import {isAlphaNumericWithSpace,isValidAge,isValidEmail,isValidPassword,isValidPhoneNumber} from './validation'
export const handleChange = ({e, setFormValues, formValues}) => {
  const { name, value } = e.target;
  setFormValues({
    ...formValues,
    [name]: {
      ...formValues[name],
      value,
    },
  });
 
};

export const handleSubmit = ({ e, formValues, setFormValues, setForm, dispatch }) => {
  e.preventDefault();

  const formFields = Object.keys(formValues);
  let newFormValues = { ...formValues };
  let isValidForm = true;

  for (let index = 0; index < formFields.length; index++) {
    const currentField = formFields[index];
    const currentValue = formValues[currentField].value;
    const validator = formValues[currentField].validator;

    if (currentValue === "") {
      isValidForm = false;
      newFormValues = {
        ...newFormValues,
        [currentField]: {
          ...newFormValues[currentField],
          error: true,
          errorType: "required",
        },
      };
    } else if (validator) {
      
      const isValid = validator(currentValue);
      if(!isValid) isValidForm = false;
      newFormValues = {
        ...newFormValues,
        [currentField]: {
          ...newFormValues[currentField],
          error: !isValid,
          errorType: "regex",
        },
      };
    } else {
      newFormValues = {
        ...newFormValues,
        [currentField]: {
          ...newFormValues[currentField],
          error: false,
        },
      };
    }
  }

  setFormValues(newFormValues);
  if (isValidForm) dispatch(
    setForm({
      firstName: newFormValues.firstName.value,
      age: newFormValues.age.value,
      email: newFormValues.email.value,
      phoneNumber: newFormValues.phoneNumber.value,
      password: newFormValues.password.value,
    })
  );
};
export const registrationFormFields = {
  firstName: {
    value: "",
    error: false,
    errorMessage: {
      required: "Name is required!",
      regex: "You can enter alphabet, number and space!",
    },
    errorType: "required",
    validator: isAlphaNumericWithSpace,
  },
  age: {
    value: "",
    error: false,
    errorMessage: {
      required: "Age is required!",
      regex: "Age must be between 18-150!",
    },
    errorType: "required",
    validator: isValidAge,
  },
  email: {
    value: "",
    error: false,
    errorMessage: {
      required: "Email is required!",
      regex: "Enter a valid email!",
    },
    errorType: "required",
    validator: isValidEmail,
  },
  phoneNumber: {
    value: "",
    error: false,
    errorMessage: {
      required: "Phone Number is required!",
      regex: "Must be a valid phone number!",
    },
    errorType: "required",
    validator: isValidPhoneNumber,
  },
  password: {
    value: "",
    error: false,
    errorMessage: {
      required: "Password is required!",
      regex:
        "Password must contain min 8 character with lowercase, uppercase, number and special character!",
    },
    errorType: "required",
    validator: isValidPassword,
  },
};