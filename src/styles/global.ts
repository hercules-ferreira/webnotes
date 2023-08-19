import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.bg_800};
    color: ${({ theme }) => theme.white};
    -webkit-font-smoothing: antialiased;
}

body input-security, textarea, button{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    outline: none;
}

a, li{
    text-decoration: none;
    list-style-type: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);}

`;

