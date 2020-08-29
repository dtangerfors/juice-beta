/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import screen from "../assets/mediaqueries"
import variables from "../assets/variables"

import Header from "./header"
import GlobalStyle from "../globalStyle"

const BodyContainer = styled.div`
  background-color: ${variables.color.white};
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: grid;
  place-items: center;

  @media ${screen.darkMode} {
    background-color: ${variables.color.black};
  }
`

const MainWrapper = styled.main`
  max-width: 130rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${variables.padding.large};
  position: relative;
  display: grid;
  place-items: center;

  @media ${screen.large} {
    padding: 0 ${variables.padding.small};
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <BodyContainer>
        <MainWrapper>{children}</MainWrapper>
      </BodyContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
