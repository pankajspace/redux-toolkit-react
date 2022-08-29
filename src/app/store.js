import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import pizzaSlice from "../features/pizza/pizzaSlice";
import userSlice from "../features/user/userSlice";
// import reduxLogger from "redux-logger";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    pizza: pizzaSlice.reducer,
    user: userSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
