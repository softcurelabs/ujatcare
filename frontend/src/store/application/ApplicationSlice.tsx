import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list, add, assignFlat, archive, unarchive, remove } from "../../helpers/api/application";
import {
  ApplicationType,
  ApplicationsType,
  AssignFlatType,
} from "../../types/ApplicationType";

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
  },
);

export const applicationAsync = createAsyncThunk<ApplicationsType, any>(
  "applicationAsync/list",
  async ({page, filter}) => {
    const response = await list(filter, page);
    return response.data;
  },
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
  },
);

export const applicationArchiveAsync = createAsyncThunk<StateType | null, any>(
    "application/archive",
    async (params: number, {rejectWithValue }) => {
      try {
        const response = await archive(params);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    },
  );

  export const applicationUnArchiveAsync = createAsyncThunk<StateType | null, any>(
    "application/unarchive",
    async (params: number, {rejectWithValue }) => {
      try {
        const response = await unarchive(params);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    },
  );

export const applicationRemoveAsync = createAsyncThunk<StateType | null, any>(
"application/remove",
async (params: number, {rejectWithValue }) => {
    try {
    const response = await remove(params);
    return response.data;
    } catch (error) {
    return rejectWithValue(error);
    }
},
);

export const { clearData } = ApplicationSlice.actions;

export default ApplicationSlice.reducer;
