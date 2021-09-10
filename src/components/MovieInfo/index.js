import React from "react";
import {Content, Text, Wrapper} from "./MovieInfo.styles";
import Thumb from "../Thumb";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
import NoImage from "../../images/no_image.jpg"
import {calcTime, convertMoney} from "../../helpers";
import Grid from "../Grid";


const MovieInfo = ({movie}) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
          clickable={false}
          alt={"movie-thum"}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <Grid header={""} minWidth={100}>
            <div className={"score-wrapper"}>
              <h3>Rating</h3>
              <div className={"score"}>{movie.vote_average}</div>
            </div>
            <div className={"director"}>
              <h3>Director{movie.directors.length > 1 ? "s" : ""}</h3>
              {movie.directors.map((director) => (<p key={director.credit_id}>{director.name}</p>))}
            </div>
            <div className={"runtime"}>
              <h3>Running Time</h3>
              <p>{calcTime(movie.runtime)}</p>
            </div>
            <div className={"budget"}>
              <h3>Budget</h3>
              <p>{convertMoney(movie.budget)}</p>
            </div>
            <div className={"revenue"}>
              <h3>Revenue</h3>
              <p>{convertMoney(movie.revenue)}</p>
            </div>
          </Grid>
        </Text>
      </Content>
    </Wrapper>
  )
}

export default MovieInfo;