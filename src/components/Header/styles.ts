import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 6.5rem;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.bg_700};

  display: flex;
  justify-content: space-between;

  padding: 0 5rem;
  
`;

export const Profile = styled(Link)`
  display: flex;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    margin-top: 0.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1.6;
    justify-content: center;
  
    span {
      font-size: 1rem;
      color: ${({ theme }) => theme.gray_100};
    }

    strong {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.white};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  svg {
    color: ${({ theme }) => theme.orange};
    font-size: 1.3rem;
  }
`;
