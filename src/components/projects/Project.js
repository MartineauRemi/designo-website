import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Card = styled.section`
    text-align: center;
    width: 100%;
    max-width: var(--layout-max-width);

    &:hover{
        color: var(--white);
        
        .project__description{
            background-color: var(--peach);
        }

        .project__title{
            color: var(--white);
        }
    }
    
    @media screen and (min-width: 768px) and (max-width: 1439px){
        display: flex;
        flex-direction: row;
    }

    @media screen and (min-width: 1440px){
        width: 21.875rem;
    }
`

const Img = styled.img`
    width: 100%;
    border-radius: var(--layout-border-radius) var(--layout-border-radius) 0 0;

    @media screen and (min-width: 768px) and (max-width: 1439px){
        border-radius: var(--layout-border-radius) 0 0 var(--layout-border-radius);
        width: 21.875rem;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--very-light-peach);
    border-radius: 0 0 var(--layout-border-radius) var(--layout-border-radius);
    padding: 2.5rem;
    width: 100%;

    @media screen and (min-width: 768px) and (max-width: 1439px){
        border-radius: 0 var(--layout-border-radius) var(--layout-border-radius) 0;
    }

    @media screen and (min-width: 1440px){
        padding: 2rem;
    }
`


const Title = styled.h3`
    color: var(--peach);
    text-transform: uppercase;
    margin-bottom: 1rem;
`

export default function Project({project}) {
    return (
        <Link to="#projects-gallery">
            <Card>
                <Img src={project.image} alt="" />
                <Text className="project__description">
                    <Title className="project__title">{project.name}</Title>
                    <p>
                        {project.description}
                    </p>
                </Text>
            </Card>
        </Link>
    )
}
