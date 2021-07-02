import { useRouter } from 'next/router';
import getTranslation from '../../translation';
import * as S from './styles';

const Footer: React.FC = () => {
  const { locale } = useRouter();

  const t = getTranslation(locale).footer;

  return (
    <S.Container>
      <p>
        {t.title} <span>♥</span> {t.subtitle}
      </p>
    </S.Container>
  );
};

export default Footer;
