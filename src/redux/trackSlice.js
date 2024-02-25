import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  'track/fetchCountries',
  async () => {
    try {
      const response = await axios.get('https://covid-193.p.rapidapi.com/countries', {
        headers: {
          'X-RapidAPI-Key': 'bf23ec7e5cmshe6ba0889c235d3bp1a5071jsn00c89e4edf62',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
      });
      return response.data.response;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCountryData = createAsyncThunk(
  'track/fetchCountryData',
  async (countryName) => {
    try {
      const response = await axios.get(`https://covid-193.p.rapidapi.com/statistics?country=${countryName}`, {
        headers: {
          'X-RapidAPI-Key': 'bf23ec7e5cmshe6ba0889c235d3bp1a5071jsn00c89e4edf62',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
      });
      return response.data.response;
    } catch (error) {
      throw error;
    }
  }
);


export const trackSlice = createSlice({
  name: "track",
  initialState: {
    countries: [],
    countryData: {
      infected: 111424589,
      recovered: 109118343,
      deaths: 1199434,
      active: 1106812
    },
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(fetchCountryData.fulfilled, (state, action) => {
        const countryData = action.payload[0];
        state.countryData = {
          infected: countryData.cases.total ? countryData.cases.total : "Data not found",
          recovered: countryData.cases.recovered ? countryData.cases.recovered : "Data not found",
          deaths: countryData.deaths.total ? countryData.deaths.total : "Data not found",
          active: countryData.cases.active ? countryData.cases.active : "Data not found"
        };
      });
  }
})

export default trackSlice.reducer;