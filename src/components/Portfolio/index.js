import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, List, CardWrapper, CardContent, SeeMore } from "./styles"
import { FaGithub } from "react-icons/fa"

export default function Portfolio() {
  const { allContentJson } = useStaticQuery(graphql`
    query GetProjects {
      allContentJson(filter: { type: { eq: "portfolio" } }) {
        nodes {
          projects {
            title
            url
            description
            image
          }
        }
      }
    }
  `)
  const projectsData = allContentJson.nodes[0]
  return (
    <Container>
      <h1 className="title">Portfolio</h1>
      <List>
        {projectsData.projects.map(item => (
          <CardWrapper href={item.url} target="__blank" key={item.id}>
            <CardContent>
              {item.image ? (
                <img src={item.image} alt={`${item.title}`} />
              ) : (
                <FaGithub size={100}></FaGithub>
              )}

              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </CardContent>
          </CardWrapper>
        ))}
      </List>
      <SeeMore>
        <a target="__blank" href="https://github.com/mateusbzerra">
          Veja mais no meu <FaGithub size={15} /> Github
        </a>
      </SeeMore>
    </Container>
  )
}
