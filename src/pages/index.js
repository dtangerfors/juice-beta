import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import variables from "../assets/variables"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {PrimaryHeading, Paragraph} from "../components/typography"

import Blob from "../components/Blob";
import meta_card from "../images/juice-meta-card.jpg"

const TextWrapper = styled.header`
  position: relative;
  z-index: 2;
`

const TextLink = styled.a`
  display: inline-block;
  font-family: ${variables.typography.titleFont};
  color: inherit;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 5px;
    background-image: linear-gradient(90deg, #ae5ae0, #ff5978, #ffcb00, #ff5500);
    transition: all .3s ease;
    z-index: -1;
  }

  &:hover::after {
    height: 3rem;
    transition: all .3s ease;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Frontend developer based in Stockholm" />
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/xgf4jbu.css"/>
      <meta property="og:image" content={meta_card}></meta>
      <meta property="twitter:image" content={meta_card}></meta>
      </Helmet>
    <TextWrapper>
    <PrimaryHeading>A driven and multifaceted frontend developer with a background in design and photography.</PrimaryHeading>
    <Paragraph 
      style={{
        fontSize: '2.4rem',
        lineHeight: '3.6rem'
      }}>Hey there! Welcome to my website. I am currently working to update this site with new a refreshed design and new projects. In the meantime you can connect with me through <TextLink target="blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-t%C3%A4ngerfors/">LinkedIn</TextLink>, view my projects on <TextLink target="blank" rel="noopener noreferrer" href="https://github.com/dtangerfors">GitHub</TextLink>. I also produce my own calendars with motifs from Gotland and Fårö. They can be ordered <TextLink as={Link} to="/almanacka">here</TextLink>.</Paragraph>
    </TextWrapper>
    <Blob/>
  </Layout>
)

export default IndexPage
