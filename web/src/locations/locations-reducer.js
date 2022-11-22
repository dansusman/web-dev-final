import { createSlice } from "@reduxjs/toolkit";
import { findWeatherThunk } from "../services/location-thunks";

const initialState = {
  locations: [],
  loading: false,
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
  },
});

export default locationsSlice.reducer;
