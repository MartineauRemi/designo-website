import React from 'react'
import styled from "styled-components"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, PinterestIcon } from '../components/SocialMediaIcons'
import Logo from "../components/Logo"
import MenuLinks from './MenuLinks'

const socialMediaURLs = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    pinterest: "https://pinterest.com"
}

const Wrapper = styled.footer`
    background-color: var(--black-secondary);
    width: 100%;
    color: gray;
    padding: 4rem var(--page-horizontal-padding);
    display: grid;

    @media screen and (max-width: 767px){
        .footer__contact-infos, .footer__address, .footer__menu-links{
            margin-bottom: 2.5rem;
        }

        .logo, .footer__line{
            margin-bottom: 2rem;
        }
    }

    @media screen and (min-width: 768px){
        .footer__address{
            grid-area: text1;
            justify-self: flex-start;
        }

        .footer__contact-infos{
            grid-area: text2;
            justify-self: flex-start;
        }

        .footer__menu-links{
            grid-area: links;
            justify-self: flex-end;
        }
    }
`

const Content = styled.section`
    place-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: var(--layout-max-width);

    @media screen and (min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1px 2fr;
        grid-template-areas: "logo links links" "line line line" "text1 text2 socialMedia";
        row-gap: 2rem;
    }
`

const SocialMediaList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (min-width: 768px){
        grid-area: socialMedia;
        justify-self: flex-end;
    }
`

const SocialMedia = styled.li`
    &:not(:last-child){
        margin-right: 1rem;
    }
`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--dark-gray);

    @media screen and (min-width: 768px){
        grid-area: line;
    }
`

export default function Footer() {
    return (
        <Wrapper>
            <Content>
                <Logo light />
                <Line className="footer__line"/>
                <MenuLinks className="footer__menu-links" />

                <div className="footer__address">
                    <strong>Designo Central Office</strong><br/>
                    <span>3886 Wellington Street</span><br/>
                    <span>Toronto, Ontario M9C 3J5</span><br/>
                </div>
                <div className="footer__contact-infos">
                    <strong>Contact us</strong><br/>
                    <strong>P : +1 253-863-8967</strong><br/>
                    <strong>M : contact@designo.com</strong><br/>
                </div>

                <SocialMediaList>
                    <SocialMedia>
                        <a href={socialMediaURLs.facebook} target='_blank' rel='noreferrer'>
                            <FacebookIcon />
                        </a>
                    </SocialMedia>
                    <SocialMedia>
                        <a href={socialMediaURLs.youtube} target='_blank' rel='noreferrer'>
                            <YoutubeIcon />
                        </a>
                    </SocialMedia>
                    <SocialMedia>
                        <a href={socialMediaURLs.twitter} target='_blank' rel='noreferrer'>
                            <TwitterIcon />
                        </a>
                    </SocialMedia>
                    <SocialMedia>
                        <a href={socialMediaURLs.pinterest} target='_blank' rel='noreferrer'>
                            <PinterestIcon />
                        </a>
                    </SocialMedia>
                    <SocialMedia>
                        <a href={socialMediaURLs.instagram} target='_blank' rel='noreferrer'>
                            <InstagramIcon />
                        </a>
                    </SocialMedia>
                </SocialMediaList>
            </Content>
        </Wrapper>
    )
}
