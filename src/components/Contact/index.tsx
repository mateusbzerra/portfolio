import { useRouter } from 'next/router';
import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa';
import getTranslation from '../../translation';
import { Container, List } from './styles';

const Contact: React.FC = () => {
  const { locale } = useRouter();
  const t = getTranslation(locale).contact;
  return (
    <Container>
      <h1 className="title">{t.title}</h1>
      <List>
        <a target="__blank" href="https://github.com/mateusbzerra">
          <FaGithub size={60}></FaGithub>
          <p>/mateusbzerra</p>
        </a>
        <a target="__blank" href="https://linkedin.com/in/mateusbzerra">
          <FaLinkedin size={60}></FaLinkedin>
          <p>/in/mateusbzerra</p>
        </a>
        <a target="__blank" href="https://twitter.com/mateusbzerra">
          <FaTwitter size={60}></FaTwitter>
          <p>@mateusbzerra</p>
        </a>
        <a target="__blank" href="mailto:dev@mateusbezerra.com">
          <FaMailBulk size={60}></FaMailBulk>
          <p>dev@mateusbezerra.com</p>
        </a>
      </List>
    </Container>
  );
};

export default Contact;
