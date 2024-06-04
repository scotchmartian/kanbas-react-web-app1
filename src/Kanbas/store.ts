import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsred
const store = configureStore({
  reducer: {
    modulesReducer,
  },
});
export default store;