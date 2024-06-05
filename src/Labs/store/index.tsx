import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/reduxExamples/HelloRedux/helloReducer";
// import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/reduxExamples/AddRedux/addReducer";
import todosReducer from "../Lab4/reduxExamples/todos/todosReducer";
import counterReducer from "../Lab4/reduxExamples/counterRedux/counterReducer";
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    // counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;