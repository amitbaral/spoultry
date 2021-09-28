import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
const MainWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
`
const HeroWraper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding: 60px 0px;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  text-align: center;
`
const Container = styled.div`
  display: flex;
  height: 100vh;
`
const Title = styled.h1`
  font-family: "limelight", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`
const TinyFont = styled.p`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 11px;
`
const CornerImages = styled.div`
  background: red;
  .gatsby-image-wrapper {
    &:nth-child(1) {
      position: absolute;
      left: 0%;
      top: 0px;
    }
    &:nth-child(2) {
      position: absolute;
      top: 0%;
      right: 0px;
    }
    &:nth-child(3) {
      position: absolute;
      bottom: 0%;
      left: 0px;
    }
    &:nth-child(4) {
      position: absolute;
      bottom: 0%;
      right: 0px;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MainWrapper>
      <Container>
        <CornerImages>
          <StaticImage
            placeholder="blurred"
            src="../images/top-left.svg"
            alt="A dinosaur"
          />
          <StaticImage
            placeholder="blurred"
            src="../images/top-right.svg"
            alt="A dinosaur"
          />
          <StaticImage
            placeholder="blurred"
            src="../images/bottom-left.svg"
            alt="A dinosaur"
          />
          <StaticImage
            placeholder="blurred"
            src="../images/bottom-right.svg"
            alt="A dinosaur"
          />
        </CornerImages>

        <HeroWraper>
          <Title
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease"
          >
            Shubham Poultry
          </Title>
          <p
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="5000"
          >
            We are launching soon
          </p>

          <TinyFont>
            By &nbsp;
            <a href="https://www.lastdoorsolutions.com.au/" target="_blank">
              Last Door Solutions
            </a>
          </TinyFont>
        </HeroWraper>
      </Container>
    </MainWrapper>
  </Layout>
)

export default IndexPage
