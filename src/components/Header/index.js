import React from "react";
import Logo from "../../images/logo.png"
import TMDBLogo from "../../images/tmdb_logo.svg";
import {Content, LogoImg, TMDBLogoImg, Wrapper} from "./Header.styles";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to={"/"}>
          <LogoImg src={Logo} alt={"logo"}/>
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt={"tmdb-logo"}/>
      </Content>
    </Wrapper>
  )
}

export default Header;