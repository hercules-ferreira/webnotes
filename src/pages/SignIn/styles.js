import styled from "styled-components";
import backgroundSignInImg from "../../assets/background-webnote.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.div`
  padding: 0 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.orange};
  }

  > h2 {
    font-size: 1.5rem;
    margin-top: 5.25rem;
    margin-bottom: 1.5rem;
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.gray_100};
  }

  > a {
    margin-top: 2rem;
    color: ${({ theme }) => theme.orange};
  }
`;

export const Background = styled.div`
  flex: 1;

  background-image: url(${backgroundSignInImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
