import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { flats } from "../../helpers";
import { FlatEditType, ApartmentListType, FlatType } from "../../types/FlatType";
import { edit, add, remove, show } from "../../helpers/api/flat";
const initialState: StateType = {
  flats: [],
  status:false,
  error: "",
  message: "",
  loading: false,
};

interface StateType {
  flats: Array<ApartmentListType>;
  status: boolean;
  error: String;
  message: string;
  loading: Boolean;
}

const FlatSlice = createSlice({
  name: "flat",
  initialState,
  reducers: {
    clearData: (state) => {
        state.loading = false;
    },
  },
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

export const flatAsync = createAsyncThunk<Array<ApartmentListType>>(
  "flatAsync",
  async () => {
    const response = await flats();
    return response.data;
  },
);

export const flatShowAsync = createAsyncThunk<FlatType, any> (
    "flatShowAsync",
    async (id:number) => {
      const response = await show(id);
      return response.data;
    },
  );
  

export const flatAddAsync = createAsyncThunk<StateType | null, any>(
    "flatAsync/add",
    async (params: FlatEditType, { rejectWithValue }) => {
      try {
        const response = await add(params);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const flatUpdateAsync = createAsyncThunk<StateType | null, any>(
    "flatUpdateAsync/Update",
    async (params: FlatEditType, { rejectWithValue }) => {
      try {
        const response = await edit(params);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const flatDeleteAsync = createAsyncThunk<StateType | null, any>(
    "flatDeleteAsync/delete",
    async (id: number, { rejectWithValue }) => {
      try {
        const response = await remove(id);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const { clearData } = FlatSlice.actions;
  
export default FlatSlice.reducer;
