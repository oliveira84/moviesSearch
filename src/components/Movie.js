import React from "react"
import {useParams} from "react-router-dom"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config"
import NoImage from "../images/no_image.jpg"
import Spinner from "./Spinner"
import {useMovieFetch} from "../hooks/useMovieFetch";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Actor from "./Actor"
import Grid from "./Grid";

const Movie = () => {
  const {movieId} = useParams();
  const {state: movie, loading, error} = useMovieFetch(movieId)

  if (loading) return <Spinner/>
  if (error) return <div>Something wnt wrong...</div>
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}/>
      <MovieInfo movie={movie}/>
      <Grid header={"Actors"} minWidth={150}>
        {movie.actor && movie.actor.map(actor => (<Actor
          key={actor.credit_id}
          name={actor.name}
          character={actor.character}
          imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}/>))}
      </Grid>
    </>
  )
}

export default Movie;