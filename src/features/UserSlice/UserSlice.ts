import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import "redux-thunk/extend-redux";
import http from "../../http/api";
import { AppDispatch } from "../../store";

import { UserType } from "./../../ts/users";

let initialState: UserType = {
  email: "",
  username: "",
  password: "",
  id: 0,
  firstname: "",
  lastname: "",
  city: "",
  street: "",
  number: "",
  zipcode: "",
  lat: "",
  long: "",
  phone: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<UserType>) => {
      state = action.payload;
    },
    getUsers: (state, action) => {
      state = action.payload;
    },

    deleteUserId: (state, action) => {
      state = action.payload;
    },
  },
});

export const getUserAsync = () => async (dispatch: AppDispatch) => {
  try {
    const response = await http.get(`/users`);
    console.log("response => ", response);

    dispatch(getUsers(response.data));
  } catch (error) {
    return error;
  }
};

export const addUsersAsync =
  async (user: UserType) => async (dispatch: AppDispatch) => {
    try {
      const response = await http.post(`/users`, user);

      dispatch(createUser(response.data));
    } catch (error) {
      return error;
    }
  };

export const deleteUserState =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await http.delete(`/users/${id}`);

      dispatch(deleteUserId(response.data));
    } catch (error) {
      return error;
    }
  };

export const { createUser, getUsers, deleteUserId } = userSlice.actions;
export const getAllUsers = (state: { users: { user: UserType } }) =>
  state.users.user;

export default userSlice.reducer;
