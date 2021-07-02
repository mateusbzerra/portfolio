import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import SEO from '../components/seo';
import getTranslation from '../translation';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const t = getTranslation(locale).metaTags;
  return (
    <>
      <SEO title={t.title} description={t.description}></SEO>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
