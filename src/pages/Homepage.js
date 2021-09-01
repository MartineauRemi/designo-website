import React from 'react'
import styled from 'styled-components'
import Categories from '../layout/homepage/Categories'
import Hero from '../layout/homepage/Hero'
import SoftSkillsSection from '../layout/homepage/SoftSkillsSection'
import CTABanner from '../layout/shared/CTABanner'

const Main = styled.main`
    padding: 0 var(--page-horizontal-padding);
    padding-top: var(--page-top-padding);
    display: grid;
    row-gap: 7.5rem;

    @media screen and (min-width: 1440px){
        row-gap: 10rem;
    }
`

export default function Homepage() {
    return (
        <Main>
            <Hero />
            <Categories />
            <SoftSkillsSection />
            <CTABanner />
        </Main>
    )
}
