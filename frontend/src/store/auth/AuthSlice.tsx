import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APICore, setAuthorization } from "../../helpers/api/apiCore";
import { login, logout } from "../../helpers/api/auth";
const api = new APICore();

const initialState = {
  user: api.getLoggedInUser(),
  userLoggedIn: false,
  error: "",
  loading: false,
};

interface UserData {
  email: string;
  password: string;
}

const AuthSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    login: (state, action) => {
      //console.log("Here", action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loggedInAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(loggedInAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userLoggedIn = true;
        state.loading = false;
      })
      .addCase(loggedInAsync.rejected, (state, action) => {
        state.error = action.error.message ?? "";
        state.userLoggedIn = false;
        state.loading = false;
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.user = null;
        state.userLoggedIn = false;
        state.loading = false;
      });
  },
});

export const loggedInAsync = createAsyncThunk<any, UserData>("loggedIn", async (userData) => {
  const response = await login({ email: userData.email, password: userData.password });
  const user = response.data;
  // NOTE - You can change this according to response format from your api
  api.setLoggedInUser(user);
  setAuthorization(user.accessToken);
  return user;
});

export const logoutAsync = createAsyncThunk<any>("logout", async () => {
  //await logout();
  api.setLoggedInUser(null);
  setAuthorization(null);
});

export default AuthSlice.reducer;
