import React from "react"

import { Container, Content } from "./styles"
import PropTypes from "prop-types"

function Card({ title, description }) {
  return (
    <Container>
      <Content>
        <h4>{title}</h4>
        <p>{description}</p>
      </Content>
    </Container>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
export default Card
