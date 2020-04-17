import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Content, Card, CardContent } from "./styles"

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
      <Content>
        <Card>
          <CardContent>
            <h1>{aboutData.title}</h1>
            <p>{aboutData.description}</p>
          </CardContent>
        </Card>
      </Content>
      <img src="/images/profile.png" alt="profile" />
    </Container>
  )
}
