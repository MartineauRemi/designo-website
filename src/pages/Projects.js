import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProjectsHeader from '../layout/projects/ProjectsHeader'

const Main = styled.main`

`

export default function Projects() {
    const {category} = useParams()

    return (
        <Main>
            <ProjectsHeader
                category={category} />
        </Main>
    )
}
