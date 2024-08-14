//DEPENDENCIES
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//SERVICES

//REFERENCES

import { ALL_USER_LIST, USER_FORGOT_PASSWORD, USER_LOGIN, USER_RESET_PASSWORD } from "../../../app/components/graphql/Queries/User/userQueries";

import client from "../../../app/components/graphql/apolloClient";

const initialState = {
  loading: false,
  isSuccess: false,
  error: null,
  authenticatedUser: null,
  getAllUserDetails: null,
  getUserForgotPasswordDetails: null,
  getUserResetPasswordDetails: null
};

export const userLogin = createAsyncThunk("auth/login", async (params, { rejectWithValue }) => {
  try {
    const { data } = await client.mutate({
      mutation: USER_LOGIN,
      variables: params
    });

    return data.login;

  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// for get api
export const getAllUserDetails = createAsyncThunk("auth/allUserDetails", async (params, { rejectWithValue }) => {
  try {
    const { data } = await client.query({
      query: ALL_USER_LIST,
    });

    return data.getUsersList;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

export const userForgotPassword = createAsyncThunk("auth/forgotPassword", async (params, { rejectWithValue }) => {
  try {
    const { data } = await client.mutate({
      mutation: USER_FORGOT_PASSWORD,
      variables: params
    });

    return data.forgotPassword;

  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const userResetPassword = createAsyncThunk("auth/resetPassword", async (params, { rejectWithValue }) => {
  try {

    const { data } = await client.mutate({
      mutation: USER_RESET_PASSWORD,
      variables: params
    });

    return data.resetPassword;

  } catch (error) {
    return rejectWithValue(error.message);
  }
});



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUserForgotPasswordState: (state) => {
      state.loading = false;
      state.error = null;
      state.isSuccess = false;
      state.getUserForgotPasswordDetails = null;
    },
    resetUserResetPasswordState: (state) => {
      state.loading = false;
      state.error = null;
      state.isSuccess = false;
      state.getUserResetPasswordDetails = null;
    },
    userLogout: (state) => {
      state.authenticatedUser = null;
    },
    setAuthenticatedUser: (state, action) => {
      state.authenticatedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, { action }) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload, meta }) => {
        if (payload.statusCode === 200) {
          state.isSuccess = true;
          state.loading = false;
          state.authenticatedUser = payload;
        } else {
          state.loading = false;
          state.error = payload.message;
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        // state.error = action.payload.error;
        state.isSuccess = false;
      })

      .addCase(getAllUserDetails.pending, (state, { action }) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getAllUserDetails.fulfilled, (state, { payload, meta }) => {

        if (payload.statusCode === 200) {
          state.isSuccess = true;
          state.loading = false;
          state.getAllUserDetails = payload;
        } else {
          state.loading = false;
          state.error = payload.message;
        }
      })
      .addCase(getAllUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      })


      .addCase(userForgotPassword.pending, (state, { action }) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(userForgotPassword.fulfilled, (state, { payload, meta }) => {

        if (payload.statusCode === 200) {
          state.isSuccess = true;
          state.loading = false;
          state.getUserForgotPasswordDetails = payload;
        } else {
          state.loading = false;
          state.error = payload.message;
        }
      })
      .addCase(userForgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      })


      .addCase(userResetPassword.pending, (state, { action }) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(userResetPassword.fulfilled, (state, { payload, meta }) => {

        if (payload.statusCode === 200) {
          state.isSuccess = true;
          state.loading = false;
          state.getUserResetPasswordDetails = payload;
        } else {
          state.loading = false;
          state.error = payload.message;
        }
      })
      .addCase(userResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      })



  },
});

export const { resetUserForgotPasswordState, resetUserResetPasswordState, userLogout, setAuthenticatedUser } = authSlice.actions;

export default authSlice.reducer;
