import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "DM Sans", sans-serif;
        background-color: #1e2140;
    }
`

export default myGlobalStyles;