import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.bg_900};
  color: ${({ theme }) => theme.gray_300};

  position: relative;

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.gray_300}` : "none"};

  margin-bottom: 0.5rem;
  padding-right: 1rem;
  border-radius: 10px;

  > button {
    > svg {
      color: ${({ theme, isNew }) => (isNew ? theme.orange : theme.red)};
    }

    border: none;
    background: none;
  }
  > input {
    width: 100%;
    height: 3.5rem;

    padding: 0.75rem;

    border: none;

    background: transparent;
    color: ${({ theme }) => theme.white};

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.gray_300};
    }
  }
`;
