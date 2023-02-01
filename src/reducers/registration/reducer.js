import { createSlice } from "@reduxjs/toolkit";

export const registrationForm = createSlice({
  name: "registration",
  initialState: {
    users:[]
  },
  reducers: {
    setForm: (state, action) => {
      const user = {}
      user.firstName = action.payload.firstName;
      user.email = action.payload.email;
      user.age = action.payload.age;
      user.phoneNumber = action.payload.phoneNumber;
      user.password = action.payload.password;
      state.users.push(user)
    },
  },
});

// Action creators are generated for each case reducer function
export const { setForm } = registrationForm.actions;

export default registrationForm.reducer;
