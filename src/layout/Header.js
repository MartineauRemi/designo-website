import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/shared/desktop/logo-dark.png"
import iconHamburger from "../assets/shared/mobile/icon-hamburger.svg"
import iconClose from "../assets/shared/mobile/icon-close.svg"
import { Button } from "../components/Buttons"

const Wrapper = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: var(--header-vertical-padding) var(--page-horizontal-padding);
    background: var(--white);
    z-index: 2;
    width: 100%;
`

const Logo = styled.img`
    width: 12.625rem;
    height: 1.625rem;
`

const MenuBtn = styled(Button)`
    display: grid;
    padding: 0;

    img{
        place-self: center;
    }

    @media screen and (min-width: 768px){
        display: none;
    }
`

const Menu = styled.nav`
    @media screen and (max-width: 767px){
        position: fixed;
        left: 0;
        top: var(--page-top-padding);
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);

        display: ${props => props.menuOpen
                                ? 'block'
                                : 'none'};
    }
`

const Links = styled.ul`
    @media screen and (max-width: 767px){
        background-color: var(--black);
        padding: 3rem 1.5rem;
    }

    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

const LinkWrapper = styled.li`
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: 2px;
    font-weight: var(--fw-regular);
    
    a{
        color: var(--white);
    }

    @media screen and (max-width: 767px){
        &:not(:last-child){
            margin-bottom: 2rem;
        }
    }

    @media screen and (min-width: 768px){
        font-size: 0.875rem;
        line-height: 0.875rem;
        a{
            color: var(--dark-gray);
        }

        &:not(last-child){
            margin-right: 2.625rem;
        }
    }
`

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const onClickMenuBtn = () => setMenuOpen(!menuOpen)
    const menuBtnSrc = menuOpen ? iconClose : iconHamburger

    return (
        <Wrapper>
            <Logo className='logo' src={logo} alt="Welcome to Designo" />
            <MenuBtn onClick={() => onClickMenuBtn()}>
                <img
                    src={menuBtnSrc}
                    alt=""
                    width={menuOpen? "20px" : "24px"}
                    height="20px"/>
            </MenuBtn>
            <Menu menuOpen={menuOpen}>
                <Links>
                    <LinkWrapper>
                        <Link to="/our-compagny">Our Compagny</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link to="/locations">Locations</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link to="/contact">Contact</Link>
                    </LinkWrapper>
                </Links>
            </Menu>
        </Wrapper>
    )
}
