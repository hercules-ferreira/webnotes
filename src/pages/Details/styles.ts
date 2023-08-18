import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 6.5rem auto;
grid-template-areas: 
"header"
"content";

>main{
    grid-area: content;
    overflow-y: scroll;
    padding: 4rem 0;
}
`;

export const Div = styled.div`
list-style: none;
margin-top: .5rem;

`;

export const Links = styled.ul`
list-style: none;

li{
    margin-top: 1.3rem;
    color: ${({ theme }) => theme.white};
}

a{
    color: ${({ theme }) => theme.white}
}
`;


export const Content = styled.div`
max-width: 34rem;
margin: 0 auto;

display: flex;
flex-direction: column;


>button:first-child{
    align-self: flex-end;
}

>h1{
    font-size: 2.25rem;
    font-weight: 500;
    padding-top: 4rem
}

>p{
    font-size: 1rem;
    text-align: justify;
    margin-top: 1rem;
    letter-spacing: .08rem; 
    line-height: 1.4;   
}



`

