//DEPENDENCIES
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//SERVICES

//REFERENCES

import { GET_JOBS } from "../../../app/components/graphql/Queries/Jobs/jobQueries";

import client from "../../../app/components/graphql/apolloClient";

const initialState = {
    loading: false,
    isSuccess: false,
    error: null,
    jobs: null,
    pageNumber: null,
    pageSize: null,
    sortOrder: null,
    sortField: null,
    filterValue: '',
    totalRecords: 0
};

export const getJobs = createAsyncThunk("job/getJobs", async (params, { rejectWithValue }) => {
    try {
        const { data } = await client.query({
            query: GET_JOBS,
            variables: params
        });
        return data.getJobsList;

    } catch (error) {
        return rejectWithValue(error.message);
    }
});



const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getJobs.pending, (state, { action }) => {
                state.loading = true;
                state.isSuccess = false;
                state.error = null;
            })
            .addCase(getJobs.fulfilled, (state, { payload, meta }) => {
                if (payload.statusCode === 200) {
                    state.isSuccess = true;
                    state.loading = false;
                    state.jobs = payload.data.jobsData;
                    state.totalRecords = payload.data.paginationData.totalRecords
                } else {
                    state.loading = false;
                    state.error = payload.message;
                }
            })
            .addCase(getJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.isSuccess = false;
            })
    },
});

//export const { resetUserForgotPasswordState, resetUserResetPasswordState, userLogout, setAuthenticatedUser } = authSlice.actions;

export default jobSlice.reducer;
