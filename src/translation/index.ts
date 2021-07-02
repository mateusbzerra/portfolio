import en from './en';
import pt from './pt';

function getTranslation(locale: string | undefined) {
  if (locale === 'pt') return pt;
  return en;
}
export default getTranslation;
