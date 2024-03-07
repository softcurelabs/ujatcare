import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list, add, edit, remove, show } from "../../helpers/api/inspection";
import { InspectionType, InspectionsType } from "../../types/InspectionType";

const initialState: StateType = {
  inspection: null,
  loading: false,
};

interface StateType {
  inspection?: InspectionsType | null;
  status?: any;
  loading: Boolean;
  message?: any;
  errors?: any;
}

const InspectionSlice = createSlice({
  name: "inspection",
  initialState,
  reducers: {
    clearData: (state) => {
      state.status = null;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(inspectionAsync.fulfilled, (state, action) => {
      state.inspection = action.payload;
      state.loading = false;
    });
  },
});

export const inspectionAddAsync = createAsyncThunk<StateType | null, any>(
  "inspectionAsync/add",
  async (params: InspectionType, { rejectWithValue }) => {
    try {
      const response = await add(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const inspectionAsync = createAsyncThunk<InspectionsType, Number>(
  "inspectionAsync/list",
  async (page = 1) => {
    const response = await list(page);
    return response.data;
  }
);

export const inspectionShowAsync = createAsyncThunk<InspectionType, any>(
  "inspectionShowAsync/show",
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await show(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const inspectionUpdateAsync = createAsyncThunk<StateType | null, any>(
  "inspectionUpdateAsync/Update",
  async (params: InspectionType, { rejectWithValue }) => {
    try {
      const response = await edit(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const inspectionDeleteAsync = createAsyncThunk<StateType | null, any>(
  "inspectionDeleteAsync/add",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await remove(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clearData } = InspectionSlice.actions;

export default InspectionSlice.reducer;
