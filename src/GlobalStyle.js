import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
            padding: 0;
            margin: 0;
            box-sizing: 0;
        }

`

export default GlobalStyle