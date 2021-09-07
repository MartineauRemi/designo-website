import React from 'react'
import styled from "styled-components"
import { locations } from "../data/locations"
import Location from '../layout/locations/Location'
import CTABanner from '../layout/shared/CTABanner'

const Main = styled.main`
  display: grid;
  row-gap: 1.5rem;

  @media screen and (min-width: 768px){
    row-gap: 7.5rem;
  }

  @media screen and (min-width: 1440px){
    row-gap: 10rem;
  }
`

const LocationsContainer = styled.section`
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
          <LocationsContainer>
            {locations.map((location, index) => <Location className={`location ${index === 1 ? "mirror" : ""}`} key={index} data={location}/>)}
          </LocationsContainer>
            <CTABanner />
        </Main>
    )
}
