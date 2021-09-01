import React from 'react'
import styled from 'styled-components'
import { WhiteBtn } from '../../components/Buttons'
import heroPhone from "../../assets/home/desktop/image-hero-phone.png"

const Wrapper = styled.section`
    place-self: center;
    width: 100%;
    max-width: var(--layout-max-width);
    background-color: var(--peach);
    color: var(--white);
    /* padding: 5rem 1.5rem 0 1.5rem; */
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px){
        border-radius: var(--layout-border-radius);
        padding: 3.5rem;
        padding-bottom: 0;
    }

    @media screen and (max-width: 1439px){
        text-align: center;
    }

    @media screen and (min-width: 1440px){
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        padding-left: 6rem;
        height: 40rem;
    }
`

const Article = styled.article`
    max-width: 33.75rem;

    h1{
        margin-bottom: 1rem;
    }

    p{
        margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 768px){
        p{
            margin-bottom: 1.5rem;
        }   
    }
`

const Aside = styled.aside`
    height: 30rem;
    overflow: hidden;

    img{
        position: relative;
        top: -5rem;
    }

    @media screen and (min-width: 1440px){
        width: 28.5rem;
        height: 100%;

        img{
            left: -5rem;
            top: -2rem;
        }
    }
`

export default function Hero() {
    return (
        <Wrapper>
            <Article>
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>
                    With over 10 years in the industry, we are experienced with creating fully responsive websites,
                    app design, and engaging brand experiences. Find out more about our services.
                </p>
                <WhiteBtn>Learn more</WhiteBtn>
            </Article>
            <Aside>
                <img src={heroPhone} alt=""/>
            </Aside>
        </Wrapper>
    )
}
