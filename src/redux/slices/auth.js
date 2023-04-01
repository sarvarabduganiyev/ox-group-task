import { createSlice } from "@reduxjs/toolkit";
import { storageService } from "../../services/storage.service";

const initialState = {
  accessToken: storageService.getAccessToken() || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogOut: (state) => {
      state.accessToken = null;
    },
    authTokenReducer: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { authLogOut, authTokenReducer } = authSlice.actions;

export default authSlice.reducer;
