import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    background-color: var(--peach);
    color: var(--white);
    text-align: center;
    width: 100%;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    position: relative;
    overflow: hidden;
    z-index: 1;

    picture{
        width: 0;
        height: 0;
    }

    @media screen and (min-width: 768px){
        border-radius: var(--layout-border-radius);
        height: 15.75rem;
    }
`

const Image = styled.img`
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;

    @media screen and (min-width: 768px){
        top: -50%;
    }

    @media screen and (min-width: 1440px){
        height: 36.5rem;
    }
`

const Title = styled.h1`
    text-transform: capitalize;
    margin-bottom: 1.5rem;
`

const Text = styled.div`
    max-width: 400px;
    z-index: 2;
`

export default function ProjectsHeader({className, category}) {
    const bgImages = category.images.bgIntro
    return (
        <Wrapper className={className}>
            <picture>
                <source srcset={bgImages.desktop} media="(min-width: 1440px)"/>
                <source srcset={bgImages.tablet} media='(min-width: 768px)'/>
                <Image src={bgImages.mobile} alt="" aria-hidden='true' />
            </picture>
            <Text>
                <Title>{category.title}</Title>
                <p>{category.description}</p>
            </Text>
        </Wrapper>
    )
}
