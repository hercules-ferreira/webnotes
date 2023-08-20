import styled from "styled-components";

export const Container = styled.div`
  width: 35rem;
  height: 10rem;
  border-radius: 10px;
  margin: 2.5rem auto;
  margin-top: -.1rem !important;
  
  background: ${({ theme }) => theme.bg_900};
  color: ${({ theme }) => theme.white};

  > textarea {
    width: 100%;
    height: 10rem;

    border: none;
    resize: none;

    border-radius: 10px;
    padding: 1rem;

    background: ${({ theme }) => theme.bg_700};


    font-size: 1.3rem;
    position: relative; // svg tem position de forma relativa ao input

    transition: 1s;

    &:focus {
      outline: 0;
      background: ${({ theme }) => theme.orange};
      transition: 3s;
    }

    &:hover {
      background: ${({ theme }) => theme.orange_200};
    }

    &:placeholder {
      color: ${({ theme }) => theme.gray_100};
    }

  }
`;
