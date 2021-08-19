import styled from "styled-components"

export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: var(--fw-medium);
    text-transform: uppercase;
    padding: var(--button-padding);
    transition: all .3s ease-in-out;
    border-radius: var(--btn-border-radius);
`

export const WhiteBtn = styled(Button)`
    background-color: var(--white);
    color: var(--dark-gray);

    &:hover{
        color: var(--white);
        background-color: var(--light-peach);
    }
`

export const PeachBtn = styled(Button)`
    background-color: var(--peach);
    color: var(--white);

    &:hover{
        background-color: var(--light-peach);
    }
`