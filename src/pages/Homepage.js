import React from 'react'
import Categories from '../layout/homepage/Categories'
import Hero from '../layout/homepage/Hero'
import SoftSkillsSection from '../layout/homepage/SoftSkillsSection'
import CTABanner from '../layout/shared/CTABanner'
import Page from '../layout/shared/Page'

export default function Homepage() {
    return (
        <Page>
            <Hero />
            <Categories />
            <SoftSkillsSection />
            <CTABanner />
        </Page>
    )
}
