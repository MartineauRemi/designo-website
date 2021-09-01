import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import rightArrow from "../../assets/shared/desktop/icon-right-arrow.svg"

const Wrapper = styled(Link)`
    width: 100%;
    border-radius: var(--layout-border-radius);
    color: var(--white);
    position: relative;
    display: grid;
    z-index: 1;
    
    &::after{
        content: '';
        width: 100%;
        height: 100%;
        background-color: var(--black);
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: var(--layout-border-radius);
        transition: all 0.3s ease-in-out;
    }

    &:hover::after{
        background-color: var(--peach);
    }
`

const BgImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: var(--layout-border-radius);
    width: 100%;
    height: 100%;
`

const Content = styled.div`
    z-index: 2;
    place-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px){
        margin-bottom: 1.5rem;
    }
`

const CTA = styled.div`
    display: flex;
    align-items: center;
`

const CTAText = styled.h3`
    text-transform: uppercase;
    margin-right: 1rem;
`

export default function Category({className, title, data, imgPaths}) {
    const url = data.url
    
    return (
        <Wrapper className={className} to={url} data={data}>
            {/* <Content>
                <Title>{title}</Title>
                <CTA>
                    <CTAText>
                        view projects
                    </CTAText>
                    <img
                        src={rightArrow}
                        alt=""
                        width="8px"
                        height="16px"/>
                </CTA>
            </Content> */}
            <picture>
                <source media="(min-width: 1440px)" srcset={imgPaths.desktopLarge}/>
                <source media="(min-width: 1024px)" srcset={imgPaths.desktopSmall}/>
                <source media="(min-width: 768px)" srcset={imgPaths.tablet}/>
                <BgImg src={imgPaths.mobile} alt="" />
            </picture>
        </Wrapper>
    )
}
