import React from "react"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import AboutMe from "../components/AboutMe"
import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
`

function Home() {
  return (
    <Container>
      <SEO title="Home" />
      <NavBar></NavBar>
      <Header></Header>
      <AboutMe></AboutMe>
    </Container>
  )
}

export default Home
