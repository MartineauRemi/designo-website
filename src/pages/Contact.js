import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import ContactForm from '../layout/contact/ContactForm'
import LocationsCards from '../layout/shared/LocationsCards'
import Page from '../layout/shared/Page'

const TextContainer = styled.div`
    color: var(--white);
    display: grid;
    row-gap: 1.5rem;

    @media screen and (min-width: 768px){
        row-gap: 2rem;
        text-align: left;
    }

    @media screen and (min-width: 1440px){
        width: 28rem;
    }
`

const ContactSection = styled.section`
    background: var(--peach);
    padding: 4.5rem 1.5rem;
    display: grid;
    row-gap: 3rem;

    @media screen and (min-width: 768px){
        padding: 4.5rem 3.5rem;
        border-radius: var(--layout-border-radius);
        row-gap: 2.5rem;
    }

    @media screen and (min-width: 1440px){
        padding: 3.5rem 6rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

export default function Contact() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <Page>
            <ContactSection>
                <TextContainer>
                    <h1>Contact us</h1>
                    <p>
                        Ready to take it to the next level?
                        Let’s talk about your project or idea and find out how we can help your business grow.
                        If you are looking for unique digital experiences that’s relatable to your users,
                        drop us a line.
                    </p>
                </TextContainer>
                <ContactForm />
            </ContactSection>

            <LocationsCards />
        </Page>
    )
}
