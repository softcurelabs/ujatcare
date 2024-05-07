import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  add,
} from "../../helpers/api/contact";
import { ContactOfficeType } from "../../types/ContactOfficeType";

const initialState: StateType = {
  
};

interface StateType {
  status?: any;
  message?: any;
  errors?: any;
}

const ContactSlice = createSlice({
  name: "Contact",
  initialState,
  reducers: {
    clearData: (state) => {
      state.status = null;
    },
  },
  extraReducers(builder) {
  },
});

export const contactAddAsync = createAsyncThunk<StateType | null, any>(
  "Contact/add",
  async (params: ContactOfficeType, { rejectWithValue }) => {
    try {
      const response = await add(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const { clearData } = ContactSlice.actions;

export default ContactSlice.reducer;
