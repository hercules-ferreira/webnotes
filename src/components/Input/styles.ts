import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > input {
    height: 3.5rem;
    width: 100%;

    font-size: 1.3rem;
    position: relative; // svg tem position de forma relativa ao input

    padding: 1.6rem 1.6rem 1.6rem 4.6rem;
    margin-bottom: .7rem;
    color: ${({ theme }) => theme.bg_900};
    background: ${({ theme }) => theme.bg_700};
    border: 0;
    border-radius: 8px;

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
  svg {
    margin-left: 1.6rem;
    position: absolute; 
    z-index: 1; // para mover o svg - deixando-o acima do input
  }
`;
