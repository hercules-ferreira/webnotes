import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > input {
    height: 3.5rem;
    width: 100%;

    font-size: 1.3rem;
    position: relative; // esse position vai ajudar o svg ficar posicionado de forma relativa ao input

    padding: 1.6rem 1.6rem 1.6rem 4.6rem;

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
      background: ${({ theme }) => theme.orange2};
    }

    &:placeholder {
      color: ${({ theme }) => theme.gray_100};
    }
  }
  svg {
    margin-left: 1.6rem;
    position: absolute; // adiciona o position para mudar a posição do svg
    z-index: 1; // essa propriedade move o svg para a camanda de cima deixando ele acima do input
  }
`;
