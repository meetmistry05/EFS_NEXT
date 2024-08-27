//DEPENDENCIES
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//SERVICES

//REFERENCES

import client from "../../../app/components/graphql/apolloClient";
import { GET_BUILDINGS } from "@/app/components/graphql/Queries/Buildings/buildingQueries";

const initialState = {
    loading: false,
    isSuccess: false,
    error: null,
    buildings: [],
    dropdownBuildings: [],
    pageNumber: null,
    pageSize: null,
    sortOrder: null,
    sortField: null,
    filterValue: '',
    totalRecords: 0,
    showBuilding: false
};

export const getBuildings = createAsyncThunk("job/getBuildings", async (params, { rejectWithValue }) => {
    try {
        const { data } = await client.query({
            query: GET_BUILDINGS,
            variables: params
        });
        
        return data.getBuildingsList;

    } catch (error) {
        return rejectWithValue(error.message);
    }
});



const buildingSlice = createSlice({
    name: "building",
    initialState,
    reducers: {
        setShowBuilding: (state, action) => {
            state.showBuilding = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBuildings.pending, (state, { action }) => {
                state.loading = true;
                state.isSuccess = false;
                state.error = null;
            })
            .addCase(getBuildings.fulfilled, (state, { payload, meta }) => {
                if (payload.statusCode === 200) {
                    state.isSuccess = true;
                    state.loading = false;
                    if(meta.arg.isDropdown){
                        state.dropdownBuildings = payload.data.buildingsData;
                    }
                    else {
                        state.buildings = payload.data.buildingsData;
                    }
                    state.totalRecords = payload.data.paginationData.totalRecords
                } else {
                    state.loading = false;
                    state.error = payload.message;
                }
            })
            .addCase(getBuildings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.isSuccess = false;
            })
    },
});

export const { setShowBuilding } = buildingSlice.actions;

export default buildingSlice.reducer;
