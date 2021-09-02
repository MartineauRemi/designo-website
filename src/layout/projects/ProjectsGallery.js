import React from 'react'
import styled from 'styled-components'
import {projects} from "../../data/projects"
import Project from '../../components/projects/Project'

const List = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: auto;

    .projects-gallery__project{
        margin-bottom: 2.5rem;
    }

    @media screen and (max-width: 767px){
        padding: 0 1.5rem;
    }

    @media screen and (min-width: 768px){
        .projects-gallery__project{
            margin-bottom: 2rem;
        }
    }

    @media screen and (min-width: 1440px){
        grid-template-columns: repeat(3, auto);
        column-gap: 1.875rem;
        row-gap: 2rem;

        .projects-gallery__project{
            margin-bottom: 0;
        }
    }
`

export default function ProjectsGallery({className, category}) {
    const items = projects.filter(p => p.category === category)[0]

    return (
        <List
            id="projects-gallery" 
            className={className}>
            {items.projects.map(project => (
                <li className="projects-gallery__project">
                    <Project project={project}/>
                </li>
            ))}
        </List>
    )
}
