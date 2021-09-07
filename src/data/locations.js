import canadaTablet from "../assets/locations/tablet/image-map-canada.png"
import australiaTablet from "../assets/locations/tablet/image-map-australia.png"
import ukTablet from "../assets/locations/tablet/image-map-uk.png"
import canadaDesktop from "../assets/locations/desktop/image-map-canada.png"
import australiaDesktop from "../assets/locations/desktop/image-map-australia.png"
import ukDesktop from "../assets/locations/desktop/image-map-uk.png"

export const locations = [
    {
        name: "Canada",
        short: "Central",
        street: "3886 Wellington Street",
        city: "Toronto, Ontario M9C 3J5",
        phone: "+1 253-863-8967",
        email: "contact@designo.ca",
        images: {
            tablet: canadaTablet,
            desktop: canadaDesktop
        }
    },
    {
        name: "Australia",
        short: "AU",
        street: "19 Balonne Street",
        city: "New South Wales 2443",
        phone: "(02) 6720 9092",
        email: "contact@designo.au",
        images: {
            tablet: australiaTablet,
            desktop: australiaDesktop
        }
    },
    {
        name: 'United-Kingdom',
        short: "UK",
        street: "13 Colorado Way",
        city: "Rhyd-y-fro SA8 9GA",
        phone: "078 3115 1400",
        email: "contact@designo.uk",
        images: {
            tablet: ukTablet,
            desktop: ukDesktop
        }
    }
]