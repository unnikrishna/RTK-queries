import { createSlice } from "@reduxjs/toolkit";

export const registrationForm = createSlice({
  name: "registration",
  initialState: {
    firstName: "",
    email: "",
    age: "",
    phoneNumber: "",
    password: "",
  },
  reducers: {
    setForm: (state, action) => {
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.age = action.payload.age;
      state.phoneNumber = action.payload.phoneNumber;
      state.password = action.payload.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setForm } = registrationForm.actions;

export default registrationForm.reducer;
