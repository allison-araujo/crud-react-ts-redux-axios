import { createSlice } from "@reduxjs/toolkit";
import http from "../../http/api";
import { AppDispatch } from "./../../store";
import { UserType } from "./../../ts/users";

interface userSliceState {
  user: UserType[];
}

const initialState: userSliceState = {
  user: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user.push(action.payload);
    },
    getUsers: (state, action) => {
      state.user = [action.payload];
      console.log("user slice", state.user);
    },

    deleteUserId: (state, action) => {
      state.user = action.payload;
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
  (user: UserType) => async (dispatch: AppDispatch) => {
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

export default userSlice.reducer;
