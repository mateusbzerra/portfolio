import React from "react"

import { Container } from "./styles"

export default function Footer() {
  return (
    <Container>
      <p>
        Feito com
        <a target="__blank" href="https://github.com/mateusbzerra">
          Gatsby
        </a>{" "}
        por Mateus Bezerra
      </p>
    </Container>
  )
}
