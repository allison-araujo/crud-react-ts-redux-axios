import { createSlice } from "@reduxjs/toolkit";
import http from "../../http/api";
import { AppDispatch } from "./../../store";
import { UserType } from "./../../ts/users";

const initialState = [
  {
    id: 1,
    email: "allison@gmail.com",
    username: "allison",
    password: "m38rmF$",
    name: {
      firstname: "Allison",
      lastname: "Front end",
    },
    address: {
      city: "corumba",
      street: "rua vinicius",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "67-99688-3374",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },
    getUsers: (state, action) => {
      state = [action.payload];
    },

    deleteUserId: (state, action) => {
      state = action.payload;
    },
  },
});
export const getUserAsync = () => async (dispatch: AppDispatch) => {
  try {
    const response = await http.get(`/users`);

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
