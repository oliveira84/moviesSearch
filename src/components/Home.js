import React from "react";
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../config";
import NoImage from "../images/no_image.jpg";
import {useHomeFetch} from "../hooks/useHomeFetch"
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner"
import SearchBar from "./SearchBar";
import LoadMore from "./LoadMore";

const Home = () => {
  const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch()

  if (error) return (
    <div>Something went wrong</div>
  )

  return (
    <>
      {state.results && state.results[0] &&
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
      />}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {state.results && state.results[0] && <>
        <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
          {state.results.map((movie) => {
            return (<Thumb
              key={movie.id}
              clickable
              image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
              movieId={movie.id}
            />)
          })}
        </Grid>
        {state.page < state.total_pages && !loading &&
        <LoadMore callback={() => setIsLoadingMore(true)}
        />}
        {loading && <Spinner/>}
      </>}
    </>
  )
};

export default Home;