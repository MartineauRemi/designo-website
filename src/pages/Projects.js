import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProjectsHeader from '../layout/projects/ProjectsHeader'
import ProjectsGallery from "../layout/projects/ProjectsGallery"

const Main = styled.main`
    .projects__projects-header, .projects__projects-gallery{
        margin-bottom: 6rem;
    }

    @media screen and (min-width: 768px){
        .projects__projects-header, .projects__projects-gallery{
            margin-bottom: 7.5rem;
        }
    }

    @media screen and (min-width: 1440px){
        .projects__projects-header, .projects__projects-gallery{
            margin-bottom: 10rem;
        }
    }
`

export default function Projects() {
    const {category} = useParams()

    return (
        <Main>
            <ProjectsHeader
                className='projects__projects-header'
                category={category} />
            <ProjectsGallery
                className='projects__projects-gallery'
                category={category}/>
        </Main>
    )
}
