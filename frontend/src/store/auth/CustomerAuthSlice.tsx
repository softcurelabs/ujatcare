import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APICore, setAuthorization } from "../../helpers/api/apiCore";
import { customerLogin } from "../../helpers/api/auth";
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
  apartment_id: number;
  flat_id: number;
}

const CustomerAuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      //console.log("Here", action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loggedInAsync.pending, (state) => {
        // console.log("incrementAsync.pending");
        state.error = "";
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

export const loggedInAsync = createAsyncThunk<any, UserData>(
  "customerloggedIn",
  async (userData) => {
    const response = await customerLogin({
      email: userData.email,
      password: userData.password,
      apartment_id: userData.apartment_id,
      flat_id: userData.flat_id,
    });
    const user = response.data;

    api.setLoggedInUser(user);
    setAuthorization(user.accessToken);
    return user;
  }
);

export const logoutAsync = createAsyncThunk<any>("logout", async () => {
  //await logout();
  api.setLoggedInUser(null);
  setAuthorization(null);
});

export default CustomerAuthSlice.reducer;
