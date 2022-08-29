import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import pizzaReducer from "../features/pizza/pizzaSlice";
import userReducer from "../features/user/userSlice";
import ReduxLogger from "redux-logger";

const logger = ReduxLogger;

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    pizza: pizzaReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
