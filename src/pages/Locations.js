import React from 'react'
import styled from "styled-components"
import { locations } from "../data/locations"
import Location from '../layout/locations/Location'

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;

  @media screen and (min-width: 768px) and (max-width: 1439px){
    row-gap: 7.5rem;
  }
`

export default function Locations() {

    return (
        <Main>
            {locations.map((location, index) => <Location className={`location ${index === 1 ? "mirror" : ""}`} key={index} data={location}/>)}
        </Main>
    )
}
