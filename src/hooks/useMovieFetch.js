import {useEffect, useState} from "react";
import API from "../API";

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        // get movie directors
        const directors = credits.crew.filter(person => {
          return person.job === "Director";
        })

        setState({
          ...movie,
          actor: credits.cast,
          directors: directors,
        });

        setLoading(false);

      } catch (error) {
        setError(true);
      }
    }
    fetchMovie();
  }, [movieId])

  return {state, loading, error}
}