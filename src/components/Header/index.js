import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Content } from "./styles"

export default function Header() {
  const { allContentJson } = useStaticQuery(graphql`
    query GetHeader {
      allContentJson(filter: { type: { eq: "header" } }) {
        nodes {
          id
          type
          title
          description
        }
      }
    }
  `)
  const headerData = allContentJson.nodes[0]

  return (
    <Container>
      <Content>
        <div className="left">
          <h1>{headerData.title}</h1>
          <p>{headerData.description}</p>
        </div>
        <div className="right">
          <img src="/images/header-image.png" alt="image" />
        </div>
      </Content>
    </Container>
  )
}