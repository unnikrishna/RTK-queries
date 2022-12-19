import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./reducers/registration/reducer";

export default configureStore({
  reducer: {
    registrationForm: registrationReducer,
  },
});
