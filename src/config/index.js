import axios from "axios";

export const getMovieData = async () => {
  try {
    return await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=739746de15c68dd46679f683668277bb&language=en-US&page=1"
    );
  } catch (error) {
    console.error({ error });
  }
};
