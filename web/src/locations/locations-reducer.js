import { createSlice } from "@reduxjs/toolkit";
import { findWeatherThunk } from "../services/location-thunks";

const initialState = {
    locations: [],
    loading: false,
    locationDefault: "",
};

const locationsSlice = createSlice({
    name: "locations",
    initialState,
    extraReducers: {
        [findWeatherThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.locations.push(action.payload);
        },
        [findWeatherThunk.rejected]: (state) => {
            state.loading = false;
        },
        // [selectLocationThunk.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.locationDefault = action.payload;
        // },
    },
});

export const locationSettingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "location/selectLocation": {
            const newState = {
                ...state,
                locationDefault: action.payload,
            };
            return newState;
        }
        default:
            return state;
    }
};

export default locationsSlice.reducer;
