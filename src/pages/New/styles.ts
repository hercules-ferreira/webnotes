import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 6.6rem, auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: "content";
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  max-width: 35rem;
  margin: 2.5rem auto;


  > header {
  

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    a {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.orange};
    }
  }

  svg {
    color: ${({ theme }) => theme.gray_100};

    margin-bottom: 0.7rem;
    position: absolute;
    z-index: 1; // para mover o svg - deixando-o acima do input
  }
`;
