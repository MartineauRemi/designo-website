import React from 'react'
import styled from 'styled-components'

import aboutUsMobile from "../assets/about/mobile/image-about-hero.jpg"
import aboutUsTablet from "../assets/about/tablet/image-about-hero.jpg"
import aboutUsDesktop from "../assets/about/desktop/image-about-hero.jpg"

import theRealDealMobile from "../assets/about/mobile/image-real-deal.jpg"
import theRealDealTablet from "../assets/about/tablet/image-real-deal.jpg"
import theRealDealDesktop from "../assets/about/desktop/image-real-deal.jpg"

import worldClassTalentMobile from "../assets/about/mobile/image-world-class-talent.jpg"
import worldClassTalentTablet from "../assets/about/tablet/image-world-class-talent.jpg"
import worldClassTalentDesktop from "../assets/about/desktop/image-world-class-talent.jpg"

const Main = styled.main`
    height: 100%;

    @media screen and (min-width: 1440px){
        .about__text-card{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;

            &:nth-child(2){
                flex-direction: row;
                article {
                    border-radius: 0 var(--layout-border-radius) var(--layout-border-radius) 0;
                }

                img{
                    border-radius: var(--layout-border-radius) 0 0 var(--layout-border-radius);
                }
            }
        }
    }

`

const Card = styled.section`
    max-width: 69.375rem;

    @media screen and (min-width: 768px){
        margin-bottom: 7.5rem;
    }

    @media screen and (min-width: 1440px){
        margin-bottom: 10rem;
    }
`

const Article = styled.article`
    padding: 5rem 1.5rem;
    color: ${props => props.color === 'white' 
                        ? 'var(--white)' : 'var(--dark-gray)'};

    background-color: ${props => props.color === 'white' 
                        ? 'var(--peach)' : 'var(--very-light-peach)'};
    
    h1{
        color: ${props => props.color === 'white' 
                        ? 'var(--white)' : 'var(--peach)'};

        margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 768px){
        padding: 4rem 3.5rem;
        border-radius: 0 0 var(--layout-border-radius) var(--layout-border-radius);
    }

    @media screen and (min-width: 1440px){
        padding: 4rem 6rem;
        border-radius: var(--layout-border-radius) 0 0 var(--layout-border-radius);
    }
`

const Aside = styled.aside`
   img{
       width: 100%;
   }

   @media screen and (min-width: 768px){
       img{
           border-radius: var(--layout-border-radius) var(--layout-border-radius) 0 0;
       }
   }

   @media screen and (min-width: 1440px){
        img{
            border-radius: 0 var(--layout-border-radius) var(--layout-border-radius) 0;
        }
   }

`

export default function OurCompany() {
    return (
        <Main>
            <Card className="about__text-card">
                <Aside>
                    <picture>
                        <source media="(min-width: 1440px)" srcset={aboutUsDesktop}/>
                        <source media="(min-width: 768px)" srcset={aboutUsTablet}/>
                        <img src={aboutUsMobile} alt=""/>
                    </picture>
                </Aside>
                <Article color='white'>
                    <h1>About Us</h1>
                    <p>
                        Founded in 2010, we are a creative agency that produces lasting results for our clients.
                        We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact.
                        We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                    </p>
                </Article>
            </Card>

            <Card className="about__text-card">
                <Aside>
                    <picture>
                        <source media="(min-width: 1440px)" srcset={worldClassTalentDesktop}/>
                        <source media="(min-width: 768px)" srcset={worldClassTalentTablet}/>
                        <img src={worldClassTalentMobile} alt=""/>
                    </picture>
                </Aside>
                <Article>
                    <h1>World-class talent</h1>
                    <p>
                        We are a crew of strategists, problem-solvers, and technologists.
                        Every design is thoughtfully crafted from concept to launch, ensuring success in its given market.
                        We are constantly updating our skills in a myriad of platforms.   
                        Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important.
                        We give great importance to craftsmanship, service, and prompt delivery.
                        Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.    
                    </p>
                </Article>
            </Card>

            <Card className="about__text-card">
                <Aside>
                    <picture>
                        <source media="(min-width: 1440px)" srcset={theRealDealDesktop}/>
                        <source media="(min-width: 768px)" srcset={theRealDealTablet}/>
                        <img src={theRealDealMobile} alt=""/>
                    </picture>
                </Aside>
                <Article>
                    <h1>The real deal</h1>
                    <p>
                        As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                        Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity.
                        We make design and technology more accessible and give you tools to measure success.
                        We are visual storytellers in appealing and captivating ways.
                        By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                    </p>
                </Article>
                <Aside>

                </Aside>
            </Card>
        </Main>
    )
}
