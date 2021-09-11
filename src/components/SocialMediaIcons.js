import styled from "styled-components"
import facebook from "../assets/shared/desktop/icon-facebook.svg"
import instagram from "../assets/shared/desktop/icon-instagram.svg"
import twitter from "../assets/shared/desktop/icon-twitter.svg"
import youtube from "../assets/shared/desktop/icon-youtube.svg"
import pinterest from "../assets/shared/desktop/icon-pinterest.svg"

export const Icon = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--peach);
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: var(--light-peach);
    }
`

export const FacebookIcon = styled(Icon)`
    -webkit-mask: url(${facebook}) no-repeat center;
    mask: url(${facebook}) no-repeat center;
`

export const InstagramIcon = styled(Icon)`
    -webkit-mask: url(${instagram}) no-repeat center;
    mask: url(${instagram}) no-repeat center;
`

export const TwitterIcon = styled(Icon)`
    -webkit-mask: url(${twitter}) no-repeat center;
    mask: url(${twitter}) no-repeat center;
`

export const YoutubeIcon = styled(Icon)`
    -webkit-mask: url(${youtube}) no-repeat center;
    mask: url(${youtube}) no-repeat center;
`

export const PinterestIcon = styled(Icon)`
    -webkit-mask: url(${pinterest}) no-repeat center;
    mask: url(${pinterest}) no-repeat center;
`
