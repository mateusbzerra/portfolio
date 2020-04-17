import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardComponent from "../Card"
import { Container, List } from "./styles"

export default function Awards() {
  const { allContentJson } = useStaticQuery(graphql`
    query GetEducation {
      allContentJson(filter: { type: { eq: "education" } }) {
        nodes {
          courses {
            title
            subtitle
            description
            type
          }
        }
      }
    }
  `)

  const educationData = allContentJson.nodes[0]
  return (
    <Container>
      <h1 className="title">Conquistas</h1>
      <List>
        {educationData.courses.map(({ title, subtitle, description, type }) => (
          <CardComponent
            key={title}
            title={title}
            subtitle={subtitle}
            description={description}
            type={type}
          ></CardComponent>
        ))}
      </List>
    </Container>
  )
}
