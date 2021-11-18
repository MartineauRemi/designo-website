import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Links = styled.ul`
    font-size: ${props => props.header? '1.5rem' : '0.875rem'};
    line-height: ${props => props.header? '1.5rem' : '0.875rem'};
    line-height: 1.5rem;

    a{
        color: var(--white);

        &:hover{
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 767px){
        background-color: ${props => props.header? 'var(--black-secondary)' : 'transparent'};
        padding: 3rem 1.5rem;
        text-align: ${props => props.header? 'left' : 'center'}
    }

    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.875rem;
        line-height: 0.875rem;

        a{
            color: ${props => props.header ? 'var(--dark-gray)' : 'var(--light-gray)'};
        }
    }
`

const LinkWrapper = styled.li`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: var(--fw-regular);

    @media screen and (max-width: 767px){
        &:not(:last-child){
            margin-bottom: 2rem;
        }
    }

    @media screen and (min-width: 768px){
        &:not(:last-child){
            margin-right: 2.625rem;
        }
    }
`

export default function MenuLinks({className, header}) {

    return (
        <Links className={className} header={header}>
            <LinkWrapper>
                <Link to="/designo-website/our-company">Our Company</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/designo-website/locations">Locations</Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link to="/designo-website/contact">Contact</Link>
            </LinkWrapper>
        </Links>
    )
}
