import React from 'react'
import styled from 'styled-components'
import {WhiteBtn, PeachBtn} from "../components/Buttons"

const Main = styled.main`
  padding-top: var(--page-top-padding);
`

export default function Homepage() {
    return (
        <Main>
            <WhiteBtn>Learn more</WhiteBtn>
            <PeachBtn>Get in touch</PeachBtn>
        </Main>
    )
}
