import React from 'react'
import styled from "styled-components"
import { locations } from "../data/locations"
import Location from '../layout/locations/Location'
import CTABanner from '../layout/shared/CTABanner'
import Page from '../layout/shared/Page'

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
        <Page>
          <LocationsContainer>
            {locations.map((location, index) => <Location key={index} className={`location ${index === 1 ? "mirror" : ""}`} data={location}/>)}
          </LocationsContainer>
            <CTABanner />
        </Page>
    )
}
