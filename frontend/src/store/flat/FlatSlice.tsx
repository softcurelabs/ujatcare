import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { flats } from "../../helpers";
import { FlatType } from "../../types/FlatType";
const initialState: StateType = {
  flats: [],
  error: "",
  loading: false,
};

interface StateType {
  flats: Array<ApartmentType>;
  error: String;
  loading: Boolean;
}


interface ApartmentType {
  id: number;
  name: String;
  created_at: Date;
  updated_at: Date;
  flats: Array<FlatType>;
}

const FlatSlice = createSlice({
  name: "flat",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(flatAsync.pending, () => {
        // console.log("incrementAsync.pending");
      })
      .addCase(flatAsync.fulfilled, (state, action) => {
        state.flats = action.payload;
        state.loading = false;
      })
      .addCase(flatAsync.rejected, (state, action) => {
        state.error = action.error.message ?? "";
        state.loading = false;
      });
  },
});

export const flatAsync = createAsyncThunk<Array<ApartmentType>>(
  "flatAsync",
  async () => {
    const response = await flats();
    return response.data;
  },
);

export default FlatSlice.reducer;
