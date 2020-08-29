import React from "react"
import styled from "styled-components"

import screen from "../assets/mediaqueries"
import variables from "../assets/variables";

import SocialMedia from "./SocialMedia"


const Footer = styled.footer`
    background-color: ${variables.color.white};
    padding: ${variables.padding.large};

    @media ${screen.medium} {
        padding: ${variables.padding.small};
        padding-bottom: ${variables.padding.medium};
    }

    @media ${screen.darkMode} {
        background-color: ${variables.color.black};
    }
`;



export default () => {

    return (
        <Footer>
            <SocialMedia />
        </Footer>
    )
}