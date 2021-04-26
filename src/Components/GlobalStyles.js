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
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 24px;
        background-color: #EEE6FF;
        color: black;
        /* padding-top: 80px; */
    }
`;

export default globalStyles;
