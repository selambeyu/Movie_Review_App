import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box, Stack, Typography } from "@mui/material";
import { GridList1 } from "../../components/GridList";
import Header from "../../components/Header";
import MoviePagination from "../../components/movie/movies-pagination";

import { useGetMoviesQuery } from "../../redux/features/api/movieSlice";
import { Loading } from "../../components/Loading";

function MoviesListPage() {
  const dispatch = useDispatch();
  const [pageno, setPageno] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const userid = "6545cb3c9f287017f2fdf0e3";
  const {
    data: moviesList,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMoviesQuery(pageno, rowsPerPage);

  console.log("useres here", moviesList);

  const totalPages = moviesList ? Math.ceil(moviesList.total / rowsPerPage) : 0;

  const handlePageChange = (event, newPage) => {
    setPageno(newPage);
  };

  useEffect(() => {
    // Initial search when the component loads
    // const fetchMovie = async () => {
    //   try {
    //     // Make an API request to get the initial data
    //     const response = await axios.get(
    //       `${process.env.REACT_APP_API_BASE_URL}/movies`,
    //       {
    //         params: {
    //           page: page,
    //           perPage: itemsPerPage,
    //         },
    //       }
    //     );
    //     const data = response.data;
    //     console.log("initalize data her", data);
    //     // Dispatch an action to update the store with the initial data
    //     console.log("data movies page", data);
    //     dispatch(setSearchMoviesResults(data.data));
    //     dispatch(setMovies(data.data));
    //     dispatch(setTotalMovieData(data.total));
    //   } catch (error) {
    //     console.error("Error initializing store:", error);
    //   }
    // };
    // fetchMovie();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      {/* <AddMovie /> */}
      <Box
        component="main"
        sx={{
          backgroundColor: "background.paper",
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack> </Stack>
          <Stack>
            <Typography variant="h1" align="center">
              {" "}
              Movies
            </Typography>
            <GridList1 movies={moviesList.data} />
            <MoviePagination
              currentPage={pageno}
              totalPages={totalPages}
              handleChange={handlePageChange}
            />
            {/* <MovieDetails />

            <MovieSearch /> */}
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default MoviesListPage;
