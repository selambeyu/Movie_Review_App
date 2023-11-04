import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initalState = {
  moviesData: [],
  currentPage: 1,
  itemsPerPage: 5,
  total: 0,
  searchTerm: "",
  //   searchType: "movie",
  searchYear: "",
  searchMoviesResults: [],
};
export const moviesSlice = createSlice({
  name: "movies",
  initialState: initalState,
  reducers: {
    setMovies: (state, action) => {
      state.moviesData = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalMovieData: (state, action) => {
      state.total = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setSearchYear: (state, action) => {
      state.searchYear = action.payload;
    },
    setSearchMoviesResults: (state, action) => {
      state.searchMoviesResults = action.payload;
    },
    addMovie: (state, action) => {
      state.moviesData.push(action.payload);
    },
  },
});

export const {
  setMovies,
  setCurrentPage,
  setTotalMovieData,
  setSearchTerm,
  setSearchYear,
  setSearchMoviesResults,
  addMovie,
} = moviesSlice.actions;
export default moviesSlice.reducer;
