import React from 'react'
import styled from 'styled-components'
import bgMobile from "../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"

const Wrapper = styled.div`
    width: 100%;
    
    @media screen and (min-width: 1440px){
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        &.mirror{
            flex-direction: row;

            aside{
                margin-left: 0;
                margin-right: 2rem;
            }
        }
    }
`

const Aside = styled.aside`
    @media screen and (min-width: 768px) and (max-width: 1439px){
        min-height: 20.375rem;
        margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 768px){
        img{
            border-radius: var(--layout-border-radius);
        }
    }

    @media screen and (max-width: 1439px){
        width: 100%;

        img{
            width: 100%;
        }
    }
    @media screen and (min-width: 1440px){
        margin-left: 2rem;
    }
`

const Article = styled.article`
    background-color: var(--very-light-peach);
    padding: 5rem 1.5rem;
    width: 100%;
    display: grid;
    position: relative;
    z-index: 1;

    &::after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url(${bgMobile});
        z-index: -1;
        /* opacity: 0.2; */
        background-repeat: no-repeat;
        background-position: top 0 left -18.125rem;
        background-size: 112%;
    }

    @media screen and (min-width: 768px){
        border-radius: var(--layout-border-radius);
        text-align: left;
    }

    @media screen and (min-width: 1440px){
        height: 100%;
    }
`

const Text = styled.section`
    place-self: center;
    display: grid;
    row-gap: 1.5rem;

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(2, auto);
        grid-template-areas: 'title title' 'address contact';
        width: 33.75rem;

        p:nth-child(1){
            grid-area: address;
        }

        p:nth-child(2){
            grid-area: contact;
            align-self: flex-end;
        }
    }
`

const Title = styled.h2`
    color: var(--peach);

    @media screen and (min-width: 768px){
        grid-area: title;
    }
`

export default function Location({data, className}) {
    return (
        <Wrapper className={className}  id={`location-${data.short}`}>
            <Aside>
                <picture>
                    <source media="(min-width: 768px) and (max-width: 1439px)" srcSet={data.images.tablet}/>
                    <img src={data.images.desktop} alt="" />
                </picture>
            </Aside>
            <Article>
                <Text>
                    <Title>{data.name}</Title>
                    <p>
                        <strong>{data.short}</strong><br/>
                        <span>{data.street}</span><br/>
                        <span>{data.city}</span>
                    </p>
                    <p>
                        <strong>Contact</strong><br/>
                        <span>P : {data.phone}</span><br/>
                        <span>M : {data.email}</span>
                    </p>
                </Text>
            </Article>
        </Wrapper>
    )
}
