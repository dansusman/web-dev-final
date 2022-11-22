import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./locations-service";

export const findWeatherThunk = createAsyncThunk(
  "location/findWeather",
  async (location) => await service.fetchWeather(location)
);
