import CardComponent from '../Card';
import { Container, List } from './styles';
import { useRouter } from 'next/router';
import getTranslation from '../../translation';

export default function Awards() {
  const { locale } = useRouter();
  const t = getTranslation(locale).achievements;

  return (
    <Container>
      <h1 className="title">{t.title}</h1>
      <List>
        {t.items.map(({ title, subtitle, description, type }) => (
          <CardComponent
            key={`${title}${Math.random()}`}
            title={title}
            subtitle={subtitle}
            description={description}
            type={type}
          ></CardComponent>
        ))}
      </List>
    </Container>
  );
}
