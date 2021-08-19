import darkLogo from "../assets/shared/desktop/logo-dark.png"
import lightLogo from "../assets/shared/desktop/logo-light.png"
import styled from "styled-components"
import React from 'react'

const Image = styled.img`
    width: 12.625rem;
    height: 1.625rem;
`

export default function Logo(props, alt) {
    const logoSrc = props.dark ? darkLogo : lightLogo
    const altText = props.alt ? alt : ""
    return (
        <Image src={logoSrc} alt={altText} className="logo"/>
    )
}
