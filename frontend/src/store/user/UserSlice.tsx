import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  add,
  edit,
  user,
  remove,
  show,
  reset,
  upload,
  permission,
  importUser,
} from "../../helpers/api/user";
import {
  PasswordDataType,
  UploadataType,
  UserData,
  UserEditType,
  UserPermissionType,
  UserProfileDataType,
  UserProfileType,
  UsersType,
} from "../../types/UserType";

const initialState: StateType = {
  users: null,
  loading: false,
};

interface StateType {
  users?: UsersType | null;
  status?: any;
  loading: Boolean;
  message?: any;
  errors?: any;
}

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    clearData: (state) => {
      state.status = null;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userAsync.pending, () => {
        // console.log("incrementAsync.pending");
      })
      .addCase(userAsync.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(userAsync.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const userAsync = createAsyncThunk<UsersType | null, Number>(
  "userAsync",
  async (page = 1) => {
    const response = await user(page);
    return response.data;
  }
);

export const userAddAsync = createAsyncThunk<StateType | null, any>(
  "userAsync/add",
  async (params: UserData, { rejectWithValue }) => {
    try {
      const response = await add(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDeleteAsync = createAsyncThunk<StateType | null, any>(
  "userAsync/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await remove(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userEditAsync = createAsyncThunk<StateType | null, any>(
  "userAsync/edit",
  async (param: UserProfileDataType, { rejectWithValue }) => {
    try {
      const response = await edit(param);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userShowAsync = createAsyncThunk<UserEditType, any>(
  "userAsync/show",
  async (id: Number, { rejectWithValue }) => {
    try {
      const response = await show(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userResetAsync = createAsyncThunk<StateType, any>(
  "userAsync/reset",
  async (params: PasswordDataType, { rejectWithValue }) => {
    try {
      const response = await reset(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userPermissionAsync = createAsyncThunk<StateType, any>(
  "userAsync/permission",
  async (params: UserPermissionType, { rejectWithValue }) => {
    try {
      const response = await permission(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userUploadAsync = createAsyncThunk<StateType, any>(
  "userAsync/upload",
  async (params: UploadataType, { rejectWithValue }) => {
    try {
      const response = await upload(params.id, params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userImportAsync = createAsyncThunk<StateType, any>(
  "userAsync/import",
  async (params: UploadataType, { rejectWithValue }) => {
    try {
      const response = await importUser(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clearData } = UserSlice.actions;

export default UserSlice.reducer;
