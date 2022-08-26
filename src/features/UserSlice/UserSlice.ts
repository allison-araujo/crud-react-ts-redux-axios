import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../http";

import { UserType } from "../../ts";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      const arr = action.payload;
      if (Array.isArray(arr)) state.push(action.payload);
    },
    getUsers: (state, action) => {
      state = [action.payload];
    },
  },
});

export const getUserAsync =
  () => async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    try {
      const response = await axios.get(`${http}/users`);
      dispatch(getUsers(response.data));
    } catch (error) {
      return error;
    }
  };

export const addUsersAsync =
  (data: UserType) => async (dispatch: (arg0: any) => void) => {
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
