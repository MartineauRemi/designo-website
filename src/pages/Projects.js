import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProjectsHeader from '../layout/projects/ProjectsHeader'
import ProjectsGallery from "../layout/projects/ProjectsGallery"
import { categories } from "../data/categories"
import Category from "../components/shared/Category"


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

const Container = styled.div`
    width: 100%;
    display: grid;
    row-gap: 1.5rem;
    column-gap: 1.875rem;
    grid-template-rows: repeat(2, 15.625rem);
    margin-bottom: 6rem;

    @media screen and (min-width: 768px){
        grid-template-rows: repeat(2, 12.5rem);
        margin-bottom: 7.5rem;
    }

    @media screen and (min-width: 1440px){
        grid-template-columns: repeat(2, auto);
        grid-template-rows: 19.25rem;
        margin-bottom: 10rem;
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
            <Container>
                {categories
                    .filter(item => item.category !== category)
                    .map((item, index) => (
                        <Category
                                key={index}
                                className={`projects__${item.category}`}
                                data={item.data} />
                    ))}
            </Container>
        </Main>
    )
}
