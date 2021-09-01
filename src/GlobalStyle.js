import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap');

    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-family: 'Jost', sans-serif;

        --layout-max-width: 69.375rem;
        
        //padding and margin
        --wrapper-padding: 1.5rem;
        --button-padding: 1rem 1.5rem;
        --page-top-padding: 6rem;
        --page-horizontal-padding: 1.5rem;
        --header-vertical-padding: 2.125rem;

        //font-weights
        --fw-regular: 400;
        --fw-medium: 500;
        
        //colors
        --black: #000000;
        --white: #ffffff;
        --peach: #e7816b;
        --dark-gray: #333136;
        --light-gray: #f1f3f5;
        --light-peach: #ffad9b;
        --very-light-peach: #fdf3f0;
        --black-secondary: #1d1c1e;

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
        font-size: 2rem;
        line-height: 2.25rem;
        font-weight: var(--fw-medium);
    }

    h2{
        font-size: 1.75rem;
        line-height: 2.25rem;
        letter-spacing: 1.4px;
        font-weight: var(--fw-medium);
    }

    h3{
        font-size: 1rem;
        line-height: 1.375rem;
        letter-spacing: 5px;
    }

    li{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }

    @media screen and (min-width: 768px){
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
        }
    }

`

export default GlobalStyle