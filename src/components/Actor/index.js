import React from "react"
import {Image, Wrapper} from "./Actor.styles";

export const Actor = ({name, character, imageUrl}) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt={"actor-thum"}/>
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  )
}

export default Actor;