import React from 'react'
import styled from 'styled-components'
import { WhiteBtn } from '../../components/Buttons'
import heroPhone from "../../assets/home/desktop/image-hero-phone.png"
import { Link } from "react-router-dom"
import heroBg from "../../assets/home/desktop/bg-pattern-hero-home.svg"

const Wrapper = styled.section`
    place-self: center;
    width: 100%;
    max-width: var(--layout-max-width);
    background-color: var(--peach);
    color: var(--white);
    padding: 5rem 1.5rem 0 1.5rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;

    overflow: hidden;

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 40rem;
        width: 40rem;
        background: url(${heroBg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }

    @media screen and (min-width: 768px){
        border-radius: var(--layout-border-radius);
        padding: 3.5rem;
        padding-bottom: 0;

        &::after{
            top: 6.25rem;
            right: 0;
            left: unset;
            background-position: right -10.625rem top 0;
        }
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
        
        &::after{
            background-position: center;
            top: 0;
        }
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
                <Link to="/designo-website/our-company" aria-label='Discover our company'>
                    <WhiteBtn>Learn more</WhiteBtn>
                </Link>
            </Article>
            <Aside>
                <img src={heroPhone} alt="" aria-hidden='true'/>
            </Aside>
        </Wrapper>
    )
}
