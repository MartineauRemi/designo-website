import Header from "../layout/Header"
import {render, fireEvent} from "@testing-library/react"
import React from "react"

test('should contain a logo and a menuBtn', () => {
    render(<Header />)
    const logo = document.getElementsByClassName('logo')
    const menuBtn = document.getElementsByTagName('button')

    expect(logo.length).toBe(1)
    expect(menuBtn.length).toBe(1)
})

