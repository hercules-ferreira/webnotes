import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  /* padding: 0 8.5rem; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > header {
    width: 100%;
    height: 9rem;

    background: ${({ theme }) => theme.bg_900};
    display: flex;

    padding: 0 7.75rem;

    svg {
      margin-top: 1.3rem;
      color: ${({ theme }) => theme.orange};
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 21.25rem;
  margin: 1.8rem 0 auto;

  > div:nth-child(4) {
    margin-top: 0.8rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -7.8rem auto 32px;

  width: 12rem;
  height: 12rem;

  > img {
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    z-index: 1;
  }

  > label {
    width: 3rem;
    height: 3rem;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.orange};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.4rem;
    right: 0.4rem;

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 1.25rem;
      height: 1.25rem;

      color: ${({ theme }) => theme.bg_800};
    }
  }
`;
