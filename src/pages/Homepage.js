import React from 'react'
import styled from 'styled-components'
import {WhiteBtn, PeachBtn} from "../components/Buttons"
import SoftSkillsSection from '../layout/homepage/SoftSkillsSection'

const Main = styled.main`
  padding-top: var(--page-top-padding);
`

export default function Homepage() {
    return (
        <Main>
            <SoftSkillsSection />
        </Main>
    )
}
