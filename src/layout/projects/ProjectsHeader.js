import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
    background-color: var(--peach);
    color: var(--white);
    text-align: center;
    width: 100%;
    height: 20rem;
    display: grid;
    padding: 0 1.5rem;

    @media screen and (min-width: 768px){
        border-radius: var(--layout-border-radius);
        height: 15.75rem;
    }
`

const Title = styled.h1`
    text-transform: capitalize;
    margin-bottom: 1.5rem;
`

const Text = styled.div`
    place-self: center;
    max-width: 400px;
`

export default function ProjectsHeader({category}) {
    const title = category.replace('-', ' ')
    const paraphs = [
        {
            category: "web-design",
            text: "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        },
        {
            category: "app-design",
            text: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        },
        {category: "graphic-design",
            text: "We deliver eye-catching branding materials that are tailored to meet your business objectives."
        }
    ]

    const paraph = paraphs.filter(p => p.category === category)[0];

    return (
        <Wrapper>
            <Text>
                <Title>{title}</Title>
                <p>{paraph.text}</p>
            </Text>
        </Wrapper>
    )
}
