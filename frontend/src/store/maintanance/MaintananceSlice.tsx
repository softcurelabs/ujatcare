import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    Conversation,
  DashboardType,
  MaintananceData,
  MaintanancesType,
} from "../../types/MaintananceType";
import {
  maintanance,
  maintananceAdmin,
  maintananceAdminEdit,
  add,
  edit,
  maintananceDashboard,
  maintananceShow,
  conversation,
  createConversation,
} from "../../helpers/api/maintanance";

const initialState: StateType = {
  maintanance: null,
  loading: false,
};

interface StateType {
  maintanance?: MaintanancesType | null;
  status?: any;
  loading: Boolean;
  message?: any;
  errors?: any;
}

const MaintananceSlice = createSlice({
  name: "Maintanance",
  initialState,
  reducers: {
    clearData: (state) => {
      state.status = null;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(maintananceAsync.fulfilled, (state, action) => {
        state.maintanance = action.payload;
        state.loading = false;
      })
      .addCase(maintananceAdminAsync.fulfilled, (state, action) => {
        state.maintanance = action.payload;
        state.loading = false;
      })
      .addCase(maintananceAsync.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const maintananceAsync = createAsyncThunk<
  MaintanancesType | null,
  Number
>("maintananceAsync", async (page = 1) => {
  const response = await maintanance(page);
  return response.data;
});

export const maintananceAdminAsync = createAsyncThunk<
  MaintanancesType | null,
  any
>("maintananceAdminAsync", async ({page, status}) => {
  const response = await maintananceAdmin(page, status);
  return response.data;
});

export const maintananceShowAsync = createAsyncThunk<
  MaintananceData | null,
  any
>("maintananceShowAsync", async (id: string) => {
  const response = await maintananceShow(id);
  return response.data;
});

export const maintananceAddAsync = createAsyncThunk<StateType | null, any>(
  "maintananceAsync/add",
  async (params: MaintananceData, { rejectWithValue }) => {
    try {
      const response = await add(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const maintananceDashboardAsync = createAsyncThunk<
  DashboardType | null,
  any
>("maintananceAsync/dashboard", async ({ rejectWithValue }) => {
  try {
    const response = await maintananceDashboard();
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const maintananceEditAsync = createAsyncThunk<StateType | null, any>(
  "maintananceAsync/edit",
  async (param: MaintananceData, { rejectWithValue }) => {
    try {
      const response = await edit(param);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const maintananceAdminEditAsync = createAsyncThunk<
  StateType | null,
  any
>(
  "maintananceAdminAsync/edit",
  async (param: MaintananceData, { rejectWithValue }) => {
    try {
      const response = await maintananceAdminEdit(param);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const conversationAsync = createAsyncThunk<
Array<Conversation> | null,
string
>("conversationAsync", async (id) => {
  const response = await conversation(id);
  return response.data;
});

export const conversationCreateAsync = createAsyncThunk<
  StateType | null,
  any
>(
  "conversationCreateAsync",
  async (param: MaintananceData, { rejectWithValue }) => {
    try {
      const response = await createConversation(param);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const { clearData } = MaintananceSlice.actions;

export default MaintananceSlice.reducer;
