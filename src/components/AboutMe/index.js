import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Container,
  Content,
  Wrapper,
  Card,
  CardContent,
  CardList,
} from "./styles"
import CardComponent from "../Card"

export default function AboutMe() {
  const { getAbout, getEducation } = useStaticQuery(graphql`
    query GetAbout {
      getAbout: allContentJson(filter: { type: { eq: "about" } }) {
        nodes {
          title
          description
        }
      }
      getEducation: allContentJson(filter: { type: { eq: "education" } }) {
        nodes {
          courses {
            title
            description
          }
        }
      }
    }
  `)

  const aboutData = getAbout.nodes[0]
  const educationData = getEducation.nodes[0]
  return (
    <Container>
      <Wrapper>
        <Content>
          <Card>
            <CardContent>
              <h1>{aboutData.title}</h1>
              <p>{aboutData.description}</p>
            </CardContent>
          </Card>
        </Content>
        <img src="/images/profile.png" alt="profile-image" />
      </Wrapper>
      <CardList>
        {educationData.courses.map(({ title, description }) => (
          <CardComponent
            key={title}
            title={title}
            description={description}
          ></CardComponent>
        ))}
      </CardList>
    </Container>
  )
}
