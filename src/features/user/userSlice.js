import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";

export const getUsers = createAsyncThunk("user/getUsers", () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.data.map((user) => user.name);
  });
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice;
