import React, {useEffect, useRef} from "react";
import {useIsVisible} from 'react-is-visible'
import {LoadMoreStyle} from "./LoadMore.styles";

const LoadMore = ({callback}) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  useEffect(() => {
    if (!isVisible) return;
    callback()
  }, [isVisible, callback])

  return (<LoadMoreStyle ref={nodeRef}/>)
};

export default LoadMore;