import React from 'react'
import styled from 'styled-components'
import { WhiteBtn } from '../../components/Buttons'
import { Link } from 'react-router-dom'
import bgPattern from "../../assets/shared/desktop/bg-pattern-call-to-action.svg"


const Wrapper = styled.section`
    @media screen and (max-width: 767px){
        padding: 0 1.5rem;
    }
`

const Container = styled.div`
    width: 100%;
    background-color: var(--peach);
    background-image: url(${bgPattern});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
    color: var(--white);
    padding: 4rem 1.5rem;
    border-radius: var(--layout-border-radius);

    .cta-banner__title{
        margin-bottom: 1.5rem;
    }
    
    @media screen and (min-width: 768px){
        padding: 3.5rem;
    }

    @media screen and (max-width: 1439px){
        text-align: center;

        .cta-banner__text{
            margin-bottom: 2rem;
        }
    }

    @media screen and (min-width: 1440px){
        padding: 4.5rem 5.875rem;
        .cta-banner__title{
            grid-area: text1;
        }

        .cta-banner__text{
            grid-area: text2;
        }

        .cta-banner__cta{
            grid-area: btn;
            justify-self: flex-end;
            align-self: center;
        }
    }
`

const Content = styled.div`
    @media screen and (min-width: 1440px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'text1 btn' 'text2 btn';
    }
`

export default function CTABanner() {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h1 className="cta-banner__title">Let's talk about your project</h1>
                    <p className="cta-banner__text">
                        Ready to take it to the next level?
                        Contact us today and find out how our expertise can help your business grow.
                    </p>
                    <Link className="cta-banner__cta" to="/contact">
                        <WhiteBtn>
                            get in touch
                        </WhiteBtn>
                    </Link>
                </Content>
            </Container>
        </Wrapper>
    )
}
