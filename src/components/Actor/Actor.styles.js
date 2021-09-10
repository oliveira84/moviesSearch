import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--medGrey);
  border-radius: 20px;
  padding: 0;
  text-align: center;
  -webkit-box-shadow: 0px 4px 8px 1px #000000;
  box-shadow: 0px 4px 8px 1px #000000;

  h3 {
    margin: 10px 0 0 0;

  }

  p {
    margin: 5px 0;
  }
`;


export const Image = styled.img`
  border: 0;

  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;