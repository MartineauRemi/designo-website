import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'


const Main = styled.main`
    display: grid;
    row-gap: 4rem;
    padding-bottom: 4rem;
    
    @media screen and (min-width: 768px){
        padding: 0 2.5rem 4rem 2.5rem;
    }

    @media screen and (min-width: 1440px){
        row-gap: 7.5rem;
        padding: 0;
        padding-bottom: 7.5rem;
    }
`


export default function Page({children, ...props}) {

    //when a new page is loaded, reset the current scroll to the top
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <Main className="page" {...props}>
            {children}
        </Main>
    )
}
