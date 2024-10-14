import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    ${(props) => props.theme.media.mobile} {
        font-size: 11px;
    }
}

body {
    background-color: ${(props) => props.theme.color.primary};
}

`;