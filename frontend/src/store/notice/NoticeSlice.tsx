import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  add,
  edit,
  notice,
  noticeHighlight,
  remove,
  show,
} from "../../helpers/api/notice";
import { NoticeData, NoticesType } from "../../types/NoticeType";

const initialState: StateType = {
  notices: null,
  loading: false,
};

interface StateType {
  notices?: NoticesType | null;
  status?: any;
  loading: Boolean;
  message?: any;
  errors?: any;
}

const NoticeSlice = createSlice({
  name: "Notice",
  initialState,
  reducers: {
    clearData: (state) => {
      state.status = null;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(noticeAsync.pending, () => {
        // console.log("incrementAsync.pending");
      })
      .addCase(noticeAsync.fulfilled, (state, action) => {
        state.notices = action.payload;
        state.loading = false;
      })
      .addCase(noticeHighlightAsync.fulfilled, (state, action) => {
        state.notices = action.payload;
        state.loading = false;
      })
      .addCase(noticeAsync.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const noticeAsync = createAsyncThunk<NoticesType | null, Number>(
  "noticeAsync",
  async (page = 1) => {
    const response = await notice(page);
    return response.data;
  }
);

export const noticeHighlightAsync = createAsyncThunk<
  NoticesType | null,
  Number
>("noticeHighlightAsync", async (page = 1) => {
  const response = await noticeHighlight(page);
  return response.data;
});

export const noticeAddAsync = createAsyncThunk<StateType | null, any>(
  "noticeAsync/add",
  async (params: NoticeData, { rejectWithValue }) => {
    try {
      const response = await add({
        title: params.title,
        schedule_date: params.schedule_date,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const noticeDeleteAsync = createAsyncThunk<StateType | null, any>(
  "noticeAsync/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await remove(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const noticeEditAsync = createAsyncThunk<StateType | null, any>(
  "noticeAsync/edit",
  async (param: NoticeData, { rejectWithValue }) => {
    try {
      const response = await edit(param);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const noticeShowAsync = createAsyncThunk<NoticeData, any>(
  "noticeAsync/show",
  async (id: Number, { rejectWithValue }) => {
    try {
      const response = await show(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clearData } = NoticeSlice.actions;

export default NoticeSlice.reducer;
