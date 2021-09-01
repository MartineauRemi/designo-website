import React, { useState } from 'react'
import styled from "styled-components"
import iconHamburger from "../assets/shared/mobile/icon-hamburger.svg"
import iconClose from "../assets/shared/mobile/icon-close.svg"
import { Button } from "../components/Buttons"
import Logo from "../components/Logo"
import MenuLinks from './MenuLinks'

const Wrapper = styled.header`
    display: grid;
    padding: var(--header-vertical-padding) var(--page-horizontal-padding);
    background: var(--white);
    z-index: 3;
    width: 100%;
`

const Content = styled.section`
    place-self: center;
    max-width: var(--layout-max-width);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const onClickMenuBtn = () => setMenuOpen(!menuOpen)
    const menuBtnSrc = menuOpen ? iconClose : iconHamburger

    return (
        <Wrapper>
            <Content>
                <Logo dark className='logo' alt="Welcome to Designo" />
                <MenuBtn onClick={() => onClickMenuBtn()}>
                    <img
                        src={menuBtnSrc}
                        alt=""
                        width={menuOpen? "20px" : "24px"}
                        height="20px"/>
                </MenuBtn>
                <Menu menuOpen={menuOpen}>
                    <MenuLinks header/>
                </Menu>
            </Content>
        </Wrapper>
    )
}
