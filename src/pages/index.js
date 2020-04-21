import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/global"
import theme from "../theme/default"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import AboutMe from "../components/AboutMe"
import Awards from "../components/Awards"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import styled from "styled-components"
import Portfolio from "../components/Portfolio"

export const Container = styled.div`
  height: 100%;
`
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;
  padding: 0px 15px;
`
function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Container>
        <SEO title="" />
        <NavBar></NavBar>
        <Header></Header>
        <ContentWrapper>
          <AboutMe></AboutMe>
          <Awards></Awards>
          <Portfolio></Portfolio>
          <Contact></Contact>
        </ContentWrapper>
        <Footer></Footer>
      </Container>
    </ThemeProvider>
  )
}

export default Home
