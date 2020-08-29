import styled from "styled-components"

import screen from "../assets/mediaqueries"
import variables from "../assets/variables"

const PrimaryHeading = styled.h1`
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: 4.8rem;
  line-height: 4.8rem;
  color: ${props => props.white ? variables.color.white : variables.color.black};
  padding-bottom: 1.6rem;

  @media ${screen.small} {
    font-size: 3.6rem;
    line-height: 3.6rem;
  }

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const SecondaryHeading = styled.h2`
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: 3.6rem;
  line-height: 3.6rem;
  padding-bottom: 1.8rem;
  color: ${props => props.white ? variables.color.white : variables.color.black};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const TertiaryHeading = styled.h3`
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.4rem;
  padding-bottom: 1.8rem;
  color: ${props => props.white ? variables.color.white : variables.color.black};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const QuarternaryHeading = styled.h4`
  font-family: ${variables.typography.titleFont};
  font-weight: 400;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: ${props => props.white ? variables.color.white : variables.color.black};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const Paragraph = styled.p`
  font-family: ${variables.typography.bodyFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${props => props.white ? variables.color.white : variables.color.black};
  opacity: ${props => props.secondary ? 0.7 : 1};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const Information = styled.p`
  font-family: ${variables.typography.bodyFont};
  font-weight: 400;
  font-size: 1.3rem;
  font-style: italic;
  line-height: 2.4rem;
  color: ${props => props.white ? variables.color.white : variables.color.black};
  opacity: ${props => props.secondary ? 0.7 : 1};

  @media ${screen.darkMode} {
    color: ${variables.color.white};
  }
`

const Lead = styled(Paragraph)`
  font-size: 1.125em;
`
export {
  PrimaryHeading,
  SecondaryHeading,
  TertiaryHeading,
  QuarternaryHeading,
  Paragraph,
  Lead,
  Information
}
