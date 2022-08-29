import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: { numOfPizzas: 10 },
  reducers: {
    ordered: (state) => {
      state.numOfPizzas--;
    },
    restocked: (state, action) => {
      state.numOfPizzas += action.payload;
    },
    extraReducers: (builder) => {
      builder.addCase(cakeOrdered, (state) => {
        state.numOfPizzas--;
      });
    },
  },
});

export default pizzaSlice;
