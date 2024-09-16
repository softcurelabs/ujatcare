import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApartmentType } from "../../types/FlatType";
import { edit, add, remove } from "../../helpers/api/apartment";
const initialState: StateType = {
    status:false,
  error: "",
  message: "",
  loading: false,
};

interface StateType {
    status: boolean;
  error: String;
  message: string;
  loading: Boolean;
}
const ApartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {
    clearData: (state) => {
      state.loading = false;
    },
  },
  extraReducers(builder) {},
});

export const apartmentAddAsync = createAsyncThunk<StateType | null, any>(
  "apartmentAsync/add",
  async (params: ApartmentType, { rejectWithValue }) => {
    try {
      const response = await add(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const apartmentUpdateAsync = createAsyncThunk<StateType | null, any>(
  "apartmentUpdateAsync/Update",
  async (params: ApartmentType, { rejectWithValue }) => {
    try {
      const response = await edit(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const apartmentDeleteAsync = createAsyncThunk<StateType | null, any>(
  "apartmentDeleteAsync/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await remove(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clearData } = ApartmentSlice.actions;

export default ApartmentSlice.reducer;
