import { Container, Content, DropdownMenu } from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { locale } = useRouter();

  return (
    <Container>
      <Content>
        <img src="/images/icon-navbar.jpeg" alt="M" />
        <DropdownMenu>
          <li>
            <Link href="/en" passHref locale={false}>
              <a className={locale === 'en' ? 'selected' : ''}>
                <img src="/images/usa-flag.png" alt="usa"></img>
                EN
              </a>
            </Link>
          </li>
          <li>
            <Link href="/pt" passHref locale={false}>
              <a className={locale === 'pt' ? 'selected' : ''}>
                <img src="/images/br-flag.png" alt="brazil"></img>
                PT
              </a>
            </Link>
          </li>
        </DropdownMenu>
      </Content>
    </Container>
  );
}
