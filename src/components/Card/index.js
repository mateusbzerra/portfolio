import React from "react"
import { IoIosSchool } from "react-icons/io"
import { FaAward } from "react-icons/fa"
import { Container, Content, Header, IconWrapper } from "./styles"
import PropTypes from "prop-types"

function Card({ title, subtitle, description, type }) {
  return (
    <Container>
      <IconWrapper>
        {type === "education" ? <IoIosSchool /> : <FaAward />}
      </IconWrapper>
      <Content>
        <Header>
          <div className="header-title">
            <h4>{title}</h4>
            <span>{subtitle}</span>
          </div>
        </Header>
        <p>{description}</p>
      </Content>
    </Container>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
export default Card
