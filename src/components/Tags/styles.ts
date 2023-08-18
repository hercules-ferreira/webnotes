import styled from "styled-components";

export const Container = styled.span`
padding: 0.08rem 0.4rem;
margin-right:0.5rem;
border-radius: 5px;

color: ${({ theme }) => theme.bg_900};
background-color: ${({ theme }) => theme.orange};

`;

