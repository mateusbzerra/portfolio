import AboutMe from '../components/AboutMe';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../theme/default';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';

export const Container = styled.div`
  height: 100%;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;
  padding: 0px 15px;
`;
const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Container>
        <NavBar></NavBar>
        <ContentWrapper>
          <AboutMe></AboutMe>
          <Awards></Awards>
          <Portfolio></Portfolio>
          <Contact></Contact>
        </ContentWrapper>
        <Footer></Footer>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
