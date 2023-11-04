import { useParams } from "react-router-dom";
import SingleMovie from "../../components/SingleMovie";
import MovieDetail from "../../components/movie/MovieDetail";
import { useGetMovieQuery } from "../../redux/features/api/movieSlice";
import { Container } from "@mui/material";
import { Loading } from "../../components/Loading";
const moviedetail = {
  movieId: "653bf428d3f651e00b10b01b",
  imdbID: null,
  Title: "Sike Limut",
  Year: "2017",
  Runtime: "118 mins",
  Genre: "Family, Comedy",
  Director: "Nure Akimal",
  Writer: "Nure Akimal",
  Actors: "Amanuel Habitamu, Eyob Dawit",
  Plot: "Family man told by his doctors that he will die in a couple of months. The film follows the life of the family guy.",
  Language: "Amharic",
  Poster:
    "http://167.99.230.233:9000/moviereviewcf620759003d664a/ebba841e-fbd8-4cc9-a381-f33cb95abc6c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=CLvPsHKPlWGwk8uFpFwY%2F20231101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231101T193615Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cd078afc8586b8e398c331e33ba1c0d5595cb743b5652c132b91c081727d75cf",
  Type: "movie",
};
export default function MovieDetailsPage() {
  const params = useParams();
  console.log("param", params);
  const {
    data: movie,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMovieQuery(params.movieId);
  console.log("what is movieid here", movie);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container maxWidth="lg">
      {" "}
      {/* <MovieDetail post={moviedetail} /> */}
      <SingleMovie post={movie} />
    </Container>
  );
}
