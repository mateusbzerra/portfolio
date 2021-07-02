import React from 'react';
import { IoIosSchool } from 'react-icons/io';
import { FaAward } from 'react-icons/fa';
import { Container, Content, Header, IconWrapper } from './styles';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  type: string;
}

const Card: React.FC<Props> = ({
  title,
  subtitle,
  description,
  type
}: Props) => {
  return (
    <Container>
      <IconWrapper>
        {type === 'education' ? <IoIosSchool /> : <FaAward />}
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
  );
};

export default Card;
