import { createGlobalStyle } from "styled-components";
import react from "styled-reset";

const globalStyles = createGlobalStyle`
    ${react};
    a {
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        /* font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        /* font-family: "Comic Sans MS", cursive, sans-serif; */
        font-size: 24px;
        background-color: #EEE6FF;
        color: black;
        
    }
`;

export default globalStyles;
