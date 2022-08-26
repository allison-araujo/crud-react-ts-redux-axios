import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../http";

import { UserType } from "../../ts";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
    loading: true,
  },
  reducers: {
    addUser: (state, action) => {
      state.data = action.payload;
    },
    getUsers: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const getUserAsync = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${http}/users`);

    dispatch(getUsers(response.data));
  } catch (error) {
    return error;
  }
};

export const addUsersAsync = (data: UserType) => async (dispatch: any) => {
  try {
    const response = await axios.post(`${http}`, data);

    dispatch(addUser(response.data));
  } catch (error) {
    return error;
  }
};

export const { addUser, getUsers } = userSlice.actions;
export const listUser = (state: { user: { data: any } }) => state.user.data;
export default userSlice.reducer;
