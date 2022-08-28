import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../http/http";
import type { RootState } from "../../store";
import { UserType } from "../../ts";
import { AppDispatch } from "./../../store";

interface userSliceState {
  users: UserType[];
}

const initialState: userSliceState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const getUserAsync = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${http}/users`);
    dispatch(getUsers(response.data));
  } catch (error) {
    return error;
  }
};

export const addUsersAsync =
  (user: UserType) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`${http}/users`, user);

      dispatch(addUser(response.data));
    } catch (error) {
      return error;
    }
  };

export const { addUser, getUsers } = userSlice.actions;
// export const listUser = (state: { user: :UserType) => state.user.data;

export default userSlice.reducer;
export const select = (state: RootState) => state.users;
