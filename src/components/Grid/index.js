import React from "react";
import {Content, Wrapper} from "./Grid.styles"

const Grid = ({header, children, minWidth = 200}) => {
  return (
    <Wrapper>
      {header && <h1>{header}</h1>}
      <Content minWidth={minWidth}>{children}</Content>
    </Wrapper>
  )
}


export default Grid;