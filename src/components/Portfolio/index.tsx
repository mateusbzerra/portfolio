import React from 'react';
import {
  Container,
  List,
  CardWrapper,
  CardContent,
  CardTags,
  SeeMore
} from './styles';
import { FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';
import getTranslation from '../../translation';

export default function Portfolio() {
  const { locale } = useRouter();
  const t = getTranslation(locale).portfolio;
  return (
    <Container>
      <h1 className="title">{t.title}</h1>
      <List>
        {t.items.map((item) => (
          <CardWrapper href={item.url} target="__blank" key={item.title}>
            <CardContent>
              <div className="top-content">
                {item.image ? (
                  <img src={item.image} alt={`${item.title}`} />
                ) : (
                  <FaGithub size={100}></FaGithub>
                )}

                <div className="content">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
              <CardTags>
                {item.tags.map((tag) => (
                  <div className="tag" key={tag}>
                    <span>{tag}</span>
                  </div>
                ))}
              </CardTags>
            </CardContent>
          </CardWrapper>
        ))}
      </List>
      <SeeMore>
        <a target="__blank" href="https://github.com/mateusbzerra">
          Ver mais
        </a>
      </SeeMore>
    </Container>
  );
}
