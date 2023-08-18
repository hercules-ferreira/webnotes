import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.bg_800};

  height: 3rem;
  border: 0;
  padding: 0 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
