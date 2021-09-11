import React from 'react'
import styled from "styled-components"
import { PeachBtn } from '../../components/Buttons'
import illustrationAustralia from '../../assets/shared/desktop/illustration-australia.svg'
import illustrationCanada from '../../assets/shared/desktop/illustration-canada.svg'
import illustrationUK from '../../assets/shared/desktop/illustration-united-kingdom.svg'
import { HashLink as Link } from "react-router-hash-link"

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 69.375rem;
    row-gap: 3rem;
    
    @media screen and (min-width: 768px){
        row-gap: 3.625rem;
    }

    @media screen and (min-width:1440px){
        grid-template-columns: repeat(3, auto);
        column-gap: 1.875rem;
    }
`

const Card = styled.li`
    width: 21.875rem;
    height: 22.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    place-self: center;
`

const ImgContainer = styled.div`
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;

    &::before{
        content: "";
        border-radius: 50%;
        background: linear-gradient(90deg, rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 500%);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`

const Title = styled.h3`
    margin-bottom: 2rem;
`

const LinkPeachBtn = styled(PeachBtn)`
    a{
        color: var(--white);
    }
`



export default function LocationsCards({className}) {
    const baseURL = "/locations"
    
    return (
        <List className={className}>
            <Card>
                <ImgContainer>
                    <img src={illustrationCanada} alt="" />
                </ImgContainer>
                <Title>Canada</Title>
                <LinkPeachBtn>
                    <Link to={baseURL + "#location-Central"}>see location</Link>
                </LinkPeachBtn>
            </Card>

            <Card>
                <ImgContainer>
                    <img src={illustrationAustralia} alt="" /></ImgContainer>
                <Title>Australia</Title>
                <LinkPeachBtn>
                    <Link to={baseURL + "#location-AU"}>see location</Link>
                </LinkPeachBtn>
            </Card>

            <Card>
                <ImgContainer>
                    <img src={illustrationUK} alt="" />
                </ImgContainer>
                <Title>United Kingdom</Title>
                <LinkPeachBtn>
                    <Link to={baseURL + "#location-UK"}>see location</Link>
                </LinkPeachBtn>
            </Card>
        </List>
    )
}
