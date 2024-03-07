import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list, add, assignFlat } from "../../helpers/api/application";
import { ApplicationType, ApplicationsType, AssignFlatType } from "../../types/ApplicationType";

const initialState: StateType = {
  application: null,
  loading: false,
};

interface StateType {
  application?: ApplicationsType | null;
  status?: any;
  loading: Boolean;
  message?: any;
  errors?: any;
}

const ApplicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    clearData: (state) => {
      state.status = null;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(applicationAsync.fulfilled, (state, action) => {
      state.application = action.payload;
      state.loading = false;
    });
  },
});

export const applicationAddAsync = createAsyncThunk<StateType | null, any>(
  "applicationAsync/add",
  async (params: ApplicationType, { rejectWithValue }) => {
    try {
      const response = await add(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const applicationAsync = createAsyncThunk<ApplicationsType, Number>(
  "applicationAsync/list",
  async (page = 1) => {
    const response = await list(page);
    return response.data;
  }
);

export const applicationAssignAsync = createAsyncThunk<StateType | null, any>(
  "applicationAssignAsync/add",
  async (params: AssignFlatType, { rejectWithValue }) => {
    try {
      const response = await assignFlat(params.id, params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clearData } = ApplicationSlice.actions;

export default ApplicationSlice.reducer;
