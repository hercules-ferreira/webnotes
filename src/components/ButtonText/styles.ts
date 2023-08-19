import styled from "styled-components";

export const Container = styled.button`
background: none;
/* color: ${({ theme, disabled }) => disabled ? theme.orange : theme.gray_100}; */

color: ${({ theme, disabled }) => disabled ? theme.gray_100 : theme.orange };


border: none;
font-size: 1rem;
`;