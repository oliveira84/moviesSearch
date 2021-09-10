import styled from "styled-components";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../config";

export const Wrapper = styled.div`
  background: ${props => props.backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;

  & > div > p, & > div > h1, & > div > h3 {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    display: block;
    max-height: none;
  }

`;

export const Text = styled.div`
  width: 100%;
  padding: 20px;
  color: white;
  overflow: hidden;


  .director, .runtime, .budget, .revenue, .score-wrapper, .votes {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-bottom: 10px;
    }

    p {
      margin: 0;
      padding-top: 5px;
    }

    .score {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      background: #fff;
      font-weight: 800;
      border-radius: 50%;
      margin: 0;
      color: var(--darkGrey);
    }

  }

  h1 {
    @media (max-width: 768px) {
      font-size: var(--fontBig)
    }
  }
`;
