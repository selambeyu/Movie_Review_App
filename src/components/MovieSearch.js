// MovieSearch.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchTerm,
  //   setSearchType,
  setSearchYear,
  setSearchMoviesResults,
} from "../redux/features/movies/moviesSlice"; // Import your actions
import axios from "axios"; // Import Axios for making API requests

const MovieSearch = () => {
  const searchTerm = useSelector((state) => state.movies.searchTerm);
  //   const searc≥÷hType = useSelector((state) => state.movies.searchType);
  const searchYear = useSelector((state) => state.movies.searchYear);
  const searchResults = useSelector(
    (state) => state.movies.searchMoviesResults
  );
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      // Make the API request using Axios
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}`,
        {
          params: {
            title: searchTerm,
            year: searchYear,
          },
        }
      );
      const data = response.data;
      console.log("what is data here", data);

      // Update the search results in the Redux store
      dispatch(setSearchMoviesResults(data.data));

      console.log("search results", searchResults);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    // Initial search when the component loads
    const fetchMovie = async () => {
      try {
        // Make an API request to get the initial data
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}`,
          {
            params: {
              title: searchTerm,
              year: searchYear,
            },
          }
        );
        const data = response.data;
        console.log("initalize data her", data);

        // Dispatch an action to update the store with the initial data
        dispatch(setSearchMoviesResults(data.data));
      } catch (error) {
        console.error("Error initializing store:", error);
      }
    };
    fetchMovie();
  }, [searchTerm, searchYear]); // This will call handleSearch when the component mounts

  return (
    <div>
      <h1>Movie Search</h1>
      <div>
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        {/* <select
          value={searchType}
          onChange={(e) => dispatch(setSearchType(e.target.value))}
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select> */}
        <input
          type="text"
          placeholder="Release Year"
          value={searchYear}
          onChange={(e) => dispatch(setSearchYear(e.target.value))}
        />
      </div>
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* Display search results */}
      <div>
        {/* {searchResults} */}
        {searchResults.length > 0 &&
          searchResults.map((movie) => (
            <div key={movie.movieId}>
              <h3>{movie.Title}</h3>
              <p>Type: {movie.Type}</p>
              <p>Year: {movie.Year}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieSearch;
