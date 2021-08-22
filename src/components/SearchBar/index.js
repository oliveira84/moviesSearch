import React, {useEffect, useRef, useState} from "react";
import {Content, Wrapper} from "./SearchBar.styles";
import searchIcon from "../../images/search-icon.svg"

const SearchBar = ({searchTerm, setSearchTerm}) => {
    const [state, setState] = useState(searchTerm)
    const inputRef = useRef(null);
    const initial = useRef(true);
    console.log(state);

    useEffect(() => {
      if (initial.current) {
        initial.current = false;
        return;
      }
      const timer = setTimeout(() => {
        setSearchTerm(state);
      }, 500)
      return () => clearTimeout(timer);
    }, [setSearchTerm, state])

    useEffect(() => {
      inputRef.current.focus();
    }, [])

    return (
      <Wrapper>
        <Content>
          <img src={searchIcon} alt={"search-icon"}/>
          <input
            type={"text"}
            placeholder={"Search Movie"}
            ref={inputRef}
            onChange={e => setState(e.currentTarget.value)}
            value={state}/>
        </Content>
      </Wrapper>
    )
  }
;

export default SearchBar;