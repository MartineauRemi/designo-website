import React from 'react'
import styled from 'styled-components'
import Category from '../../components/categories/Category'
import data from "../../data/categories.json"
import webDesignMobile from "../../assets/home/mobile/image-web-design.jpg"
import appDesignMobile from "../../assets/home/mobile/image-app-design.jpg"
import graphicDesignMobile from "../../assets/home/mobile/image-graphic-design.jpg"
import webDesignTablet from "../../assets/home/tablet/image-web-design.jpg"
import appDesignTablet from "../../assets/home/tablet/image-app-design.jpg"
import graphicDesignTablet from "../../assets/home/tablet/image-graphic-design.jpg"
import webDesignDesktop from "../../assets/home/desktop/image-web-design-small.jpg"
import appDesignDesktop from "../../assets/home/desktop/image-app-design.jpg"
import graphicDesignDesktop from "../../assets/home/desktop/image-graphic-design.jpg"


const Wrapper = styled.section`
    place-self: center;
    max-width: var(--layout-max-width);
    width: 100%;
`
const List = styled.ul`
    display: grid;
    row-gap: 1.5rem;
    column-gap: 1.875rem;
    grid-template-rows: repeat(3, 15.625rem);

    @media screen and (min-width: 768px){
        grid-template-rows: repeat(3, 12.5rem);
    }

    @media screen and (min-width: 1440px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, 19.25rem);
        grid-template-areas: 'web app' 'web graphic';

        .categories__web-design{
            grid-area: web;
        }
        .categories__app-design{
            grid-area: app;
        }
        .categories__-design{
            grid-area: graphic;
        }
    }
`

export default function Categories() {
    const imagesPaths = {
        webDesign : {
            mobile: webDesignMobile,
            tablet: webDesignTablet,
            desktop: webDesignDesktop,
        },
        appDesign: {
            mobile: appDesignMobile,
            tablet: appDesignTablet,
            desktop: appDesignDesktop,
        },
        graphicDesign: {
            mobile: graphicDesignMobile,
            tablet: graphicDesignTablet,
            desktop: graphicDesignDesktop,
        }
    }
    
    return (
        <Wrapper>
            <List>
                <Category
                    className="categories__web-design"
                    title='web design'
                    data={data.categories.webDesign}
                    imgPaths={imagesPaths.webDesign}/>
                <Category
                    className="categories__app-design"
                    title='app design'
                    data={data.categories.appDesign}
                    imgPaths={imagesPaths.appDesign}/>
                <Category
                    className="categories__graphic-design"
                    title='graphic design'
                    data={data.categories.graphicDesign}
                    imgPaths={imagesPaths.graphicDesign}/>
            </List>
        </Wrapper>
    )
}
