import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProjectsHeader from '../layout/projects/ProjectsHeader'
import ProjectsGallery from "../layout/projects/ProjectsGallery"
import { categories } from "../data/categories"
import Category from "../components/shared/Category"
import Page from "../layout/shared/Page"
import CTABanner from '../layout/shared/CTABanner'

const Container = styled.div`
    width: 100%;
    display: grid;
    row-gap: 1.5rem;
    column-gap: 1.875rem;
    grid-template-rows: repeat(2, 15.625rem);

    @media screen and (min-width: 768px){
        grid-template-rows: repeat(2, 12.5rem);
    }

    @media screen and (min-width: 1440px){
        grid-template-columns: repeat(2, auto);
        grid-template-rows: 19.25rem;
    }
`

export default function Projects() {
    const {category} = useParams()
    const selectedCategory = categories.find(cat => cat.category === category)
    const otherCategories = categories.filter(cat => cat.category !== category)

    return (
        <Page>
            <ProjectsHeader
                className='projects__projects-header'
                category={selectedCategory} />
            <ProjectsGallery
                className='projects__projects-gallery'
                projects={selectedCategory.projects}/>
            <Container>
                {otherCategories
                    .map((project, index) => (
                        <li className={`projects__${project.category}`}> 
                            <Category
                                    key={index}
                                    data={project} />
                        </li>
                    ))}
            </Container>
            <CTABanner />
        </Page>
    )
}
