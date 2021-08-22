import React from "react";
import {Image, Wrapper} from "./Thumb.styles";
import {Link} from "react-router-dom";

const Thumb = ({image, movieId, clickable}) => {
  return (
    <Wrapper>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt={"movie-thumb"}/>
        </Link>
      ) : (
        <Image src={image} alt={"movie-thumb"}/>
      )}
    </Wrapper>
  )
};

export default Thumb;