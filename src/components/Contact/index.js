import React from "react"
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"
import { Container, List } from "./styles"

export default function Contact() {
  return (
    <Container>
      <h1 className="title">Fale Comigo</h1>
      <List>
        <a target="__blank" href="https://github.com/mateusbzerra">
          <FaGithub size={70}></FaGithub>
          <p>/mateusbzerra</p>
        </a>
        <a target="__blank" href="https://linkedin.com/in/mateusbzerra">
          <FaLinkedin size={70}></FaLinkedin>
          <p>/in/mateusbzerra</p>
        </a>
        <a target="__blank" href="https://twitter.com/mateusbzerra">
          <FaTwitter size={70}></FaTwitter>
          <p>@mateusbzerra</p>
        </a>
        <a target="__blank" href="mailto:dev@mateusbezerra.com">
          <FaMailBulk size={70}></FaMailBulk>
          <p>dev@mateusbezerra.com</p>
        </a>
      </List>
    </Container>
  )
}
