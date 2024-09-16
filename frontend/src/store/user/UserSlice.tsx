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
  recident,
  uploadDocuments,
  removeDocument,
  createBug,
  occupants,
  sync,
  archive,
} from "../../helpers/api/user";
import {
  BugDataType,
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
  occupants: [],
};

interface StateType {
  users?: UsersType | null ;
  status?: any;
  loading: Boolean;
  message?: any;
  errors?: any;
  occupants? : Array<UserProfileType>;
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
      .addCase(recidentAsync.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(userAsync.rejected, (state, action) => {
        state.loading = false;
      }).addCase(occupantsAsync.fulfilled, (state, action) => {
        state.occupants = action.payload;
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

export const recidentAsync = createAsyncThunk<UsersType | null, any>(
  "recidentAsync",
  async ({page, filter}, {rejectWithValue}) => {
    const response = await recident(page, filter);
    return response.data;
  }
);

export const recidentSyncAsync = createAsyncThunk<StateType, any>(
  "recidentSyncAsync/show",
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await sync(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const occupantsAsync = createAsyncThunk<Array<UserProfileType>>(
  "occupantsAsync",
  async () => {
    const response = await occupants();
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

export const userArchiveAsync = createAsyncThunk<StateType | null, any>(
    "userArchiveAsync/archive",
    async ({id, reason}, { rejectWithValue }) => {
      try {
        const response = await archive(id, reason);
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

export const userUploadDocumentsAsync = createAsyncThunk<StateType, any>(
  "userDocumentsAsync/upload",
  async (params: UploadataType, { rejectWithValue }) => {
    try {
      const response = await uploadDocuments(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDeleteDocumentsAsync = createAsyncThunk<StateType, any>(
  "userDeleteDocumentsAsync/upload",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await removeDocument(id);
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

export const userBugAsync = createAsyncThunk<StateType, any>(
  "userAsync/Bug",
  async (params: BugDataType, { rejectWithValue }) => {
    try {
      const response = await createBug(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const { clearData } = UserSlice.actions;

export default UserSlice.reducer;
