import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap');

    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .App{
        width: 100vw;
        min-height: 100vh;
        padding: 0 var(---page-horizontal-padding);
    }

    html{
        font-family: 'Jost', sans-serif;
        
        //padding and margin
        --wrapper-padding: 1.5rem;
        --button-padding: 1rem 1.5rem;
        
        --page-top-padding: 6rem;
        --page-horizontal-padding: 1.5rem;
        
        --header-vertical-padding: 2.125rem;

        //font-weights
        --fw-regular: 400;
        --fw-medium: 500;
        
        //primary colors
        --black: #000000;
        --white: #ffffff;
        --peach: #e7816b;

        //secondary colors
        --dark-gray: #333136;
        --light-gray: #f1f3f5;
        --light-peach: #ffad9b;

        //border-radius
        --btn-border-radius: 0.5rem;
        --layout-border-radius: 1rem;

        @media screen and (min-width: 768px){
            --page-top-padding: 9.75rem;
            --page-horizontal-padding: 2.5rem;

            --header-vertical-padding: 4rem;
        }

        @media screen and (min-width: 1440px){
            --page-horizontal-padding: 10.25rem;
        }
    }

    main{
        position: relative;
    }

    p{
        font-size: 1rem;
        line-height: 1.625rem;
    }

    h1{
        font-size: 3rem;
        line-height: 3rem;
    }

    h2{
        font-size: 2.5rem;
        line-height: 3rem;
        letter-spacing: 2px;
    }

    h3{
        font-size: 1.25rem;
        line-height: 1.625rem;
        letter-spacing: 5px;
    }

    li{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }

`

export default GlobalStyle