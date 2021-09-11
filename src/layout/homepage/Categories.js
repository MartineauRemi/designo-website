import React from 'react'
import styled from 'styled-components'
import Category from '../../components/shared/Category'
import { categories } from "../../data/categories.js"

const Wrapper = styled.section`
    place-self: center;
    max-width: var(--layout-max-width);
    width: 100%;

    @media screen and (max-width: 767px){
        padding: 0 1.5rem;
    }
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

            .bg-img{
                height: 40rem;
            }
        }
        .categories__app-design{
            grid-area: app;
        }
        .categories__graphic-design{
            grid-area: graphic;
        }
    }
`
export default function Categories() {
    return (
        <Wrapper>
            <List>
                {categories.map((category, index) => (
                        <li className={`categories__${category.category}`}>
                            <Category
                            key={index}
                            data={category.data} />
                        </li>
                ))}
            </List>
        </Wrapper>
    )
}
