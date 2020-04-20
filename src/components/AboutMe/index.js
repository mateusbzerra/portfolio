import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Wrapper, Content, Card, CardContent } from "./styles"

export default function AboutMe() {
  const { getAbout } = useStaticQuery(graphql`
    query GetAbout {
      getAbout: allContentJson(filter: { type: { eq: "about" } }) {
        nodes {
          title
          description
        }
      }
    }
  `)

  const aboutData = getAbout.nodes[0]
  return (
    <Container>
      <h1 className="title">Sobre mim</h1>
      <Wrapper>
        <Content>
          <Card>
            <CardContent>
              <p>{aboutData.description}</p>
            </CardContent>
          </Card>
        </Content>
        <img src="/images/profile.png" alt="profile" />
      </Wrapper>
    </Container>
  )
}
