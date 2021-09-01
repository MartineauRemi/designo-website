import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
    margin-top: 15rem;
`

export default function Projects() {
    const {category} = useParams()

    return (
        <div>
            <Title>{category}</Title>
        </div>
    )
}
