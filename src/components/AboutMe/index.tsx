import { useRouter } from 'next/dist/client/router';
import getTranslation from '../../translation';
import { Container, Wrapper, Content, Card, CardContent } from './styles';

export default function AboutMe() {
  const { locale } = useRouter();
  const t = getTranslation(locale).aboutMe;
  return (
    <Container>
      <Wrapper>
        <Content>
          <Card>
            <CardContent>
              <p>{t.description}</p>
            </CardContent>
          </Card>
        </Content>
        <img src="/images/profile.png" alt="profile" />
      </Wrapper>
    </Container>
  );
}
