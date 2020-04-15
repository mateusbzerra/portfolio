import React from "react"

import { Container, Content } from "./styles"

export default function Header() {
  return (
    <Container>
      <Content>
        <div className="left">
          <h1>Desenvolvimento de Software</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            qui reprehenderit ad recusandae ex voluptatibus neque iste vitae
            rerum. Doloribus laboriosam, vero expedita odio, architecto eligendi
            numquam sed magnam quisquam molestias consequatur libero, sit
            officiis placeat nulla et dolor ipsa!
          </p>
        </div>
        <div className="right">
          <img src="/images/header-image.png" alt="image" />
        </div>
      </Content>
    </Container>
  )
}
