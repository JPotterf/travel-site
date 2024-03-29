import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const Trips = () => {
  const data = useStaticQuery(graphql`query TripsQuery {
  allTripsJson {
    edges {
      node {
        alt
        button
        name
        img {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`)

  function getTrips(data){
    const tripsArray =[]
    data.allTripsJson.edges.forEach((item,index) => {
      tripsArray.push(
        <div>
          <GatsbyImage
            image={item.node.img.childImageSharp.gatsbyImageData}
            src={item.node.img.childImageSharp.gatsbyImageData.src} /> 
        </div>
      )
    })
    return tripsArray
  }

  return (
      <ProductsContainer>
        <ProductsHeading>Heading</ProductsHeading>
        <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
      </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) /2);
  background:red;
  color:#fff;
`
const ProductsHeading = styled.div`
  font-size:clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom:5rem;
  color:#000;
`
const ProductsWrapper = styled.div``