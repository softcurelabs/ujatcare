import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  add,
  connect
} from "../../helpers/api/quickbook";
const initialState: StateType = {
  status: false,
  url: "#"
};

interface StateType {
  status: boolean;
  message?: any;
  errors?: any;
  url: string;
}

interface CodeType {
    code: string;
    realm_id: number;
}

const QuickbookSlice = createSlice({
  name: "QuickBook",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
  },
});

export const quickbookConnect = createAsyncThunk<StateType>(
  "quickbookConnect",
  async () => {
    const response = await connect();
    return response.data;
  }
);

export const quickbookTryConnect = createAsyncThunk<StateType | null, any>(
  "quickbookConnect/add",
  async (params: CodeType, { rejectWithValue }) => {
    try {
      const response = await add(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default QuickbookSlice.reducer;
