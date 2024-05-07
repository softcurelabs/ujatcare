import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  list,
  add,
  edit,
  remove,
  show,
  sync,
} from "../../helpers/api/invoice";
import { InvoiceType, InvoicesType } from "../../types/InvoiceType";

const initialState: StateType = {
  invoice: null,
  loading: false,
  refresh: 0,
};

interface StateType {
  invoice?: InvoicesType | null;
  status?: any;
  loading: Boolean;
  message?: any;
  errors?: any;
  refresh: number;
}

const InvoiceSlice = createSlice({
  name: "Invoice",
  initialState,
  reducers: {
    clearData: (state) => {
      state.status = null;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(invoiceAsync.fulfilled, (state, action) => {
      state.invoice = action.payload;
      state.loading = false;
    });
    builder.addCase(invoiceSyncAsync.fulfilled, (state, action) => {
      state.refresh += 1;
      state.status = action.payload.status;
      state.message = action.payload.message;
    });
  },
});

export const invoiceAddAsync = createAsyncThunk<StateType | null, any>(
  "invoiceAsync/add",
  async (params: InvoiceType, { rejectWithValue }) => {
    try {
      const response = await add(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const invoiceAsync = createAsyncThunk<InvoicesType, any>(
  "invoiceAsync/list",
  async ({page = 1, filter = ''}) => {
    const response = await list(page, filter);
    return response.data;
  }
);

export const invoiceShowAsync = createAsyncThunk<InvoiceType, any>(
  "invoiceShowAsync/show",
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await show(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const invoiceSyncAsync = createAsyncThunk<StateType, any>(
  "invoiceSyncAsync/show",
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await sync(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const invoiceUpdateAsync = createAsyncThunk<StateType | null, any>(
  "invoiceUpdateAsync/Update",
  async (params: InvoiceType, { rejectWithValue }) => {
    try {
      const response = await edit(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const invoiceDeleteAsync = createAsyncThunk<StateType | null, any>(
  "invoiceDeleteAsync/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await remove(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clearData } = InvoiceSlice.actions;

export default InvoiceSlice.reducer;
