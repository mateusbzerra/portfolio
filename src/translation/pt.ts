import ITranslationType from './types';

const pt: ITranslationType = {
  metaTags: {
    title: 'Mateus Bezerra - Desenvolvedor de Software',
    description: 'Desenvolvimento Frontend, Backend e Mobile com Javascript'
  },
  aboutMe: {
    title: 'Sobre mim',
    description:
      'Oi, seja bem vindo ao meu site! Meu nome é Mateus e comecei a programar em 2015, fazia websites com HTML e CSS, mas queria sempre avançar, então pouco tempo depois comecei a estudar mais sobre PHP, SQL e derivados do mundo web, aquilo me enchia os olhos e fez eu ter certeza da decisão que tomei anos antes, de ser um programador. Os anos foram passando e tive que aprender a fazer aplicativos, comecei com Cordova e Phonegap, mas em 2018 resolvi mudar completamente minha stack, comecei a estudar Javascript com React, React Native e Node.js, a combinação perfeita para construir aplicações de ponta em pouco tempo, já que muito código é reaproveitado, desde então tenho focado meus objetivos em soluções e não nos problemas, foi por isso que junto com Brenda e Vitor criei o SafeGirl, o aplicativo que mudou completamente minha vida e fez eu chegar ao Vale do Silício, um lugar que jamais imaginei estar tão novo, um grande sonho da minha vida já foi realizado, mas muitos estão por vir. A tecnologia dever ser um meio e nunca a finalidade.'
  },
  achievements: {
    title: 'Conquistas',
    items: [
      {
        title: 'Ciência da Computação ',
        subtitle: 'Universidade Federal do Amapá',
        description:
          'Ingressei em 2016, aos 17 anos, e atualmente estou cursando o último semestre da graduação',
        type: 'education'
      },
      {
        title: 'Bootcamp GoStack',
        subtitle: 'Rocketseat - 2018',
        description:
          'Fui aluno da 4ª turma do Bootcamp Javascript de Node.js, React e React Native. Também fui convidado a participar como Alumni da primeira edição da RS/XP.',
        type: 'education'
      },
      {
        title: 'Moção de Aplausos',
        subtitle: 'Assembléia Legislativa do Amapá',
        description:
          'Honraria recebida pela criação do Aplicativo SafeGirl, que busca facilitar ao público feminino a escolha de locais seguros para diversão',
        type: 'award'
      },
      {
        title: 'Vencedor da Campus Mobile',
        subtitle: 'Categoria Diversidade',
        description:
          'Vencedor da 7ª edição com o aplicativo SafeGirl, na categoria diversidade, recebendo como premiação uma viagem de imersão no Vale do Silício',
        type: 'award'
      }
    ]
  },
  portfolio: {
    title: 'Portfolio',
    items: [
      {
        title: 'Tá na Mão',
        description:
          'Aplicativo criado para receber demandas da população da cidade de Santana/AP através do gabinete da Vereadora Dra. Kátia.',
        image: '/images/ta-na-mao.png',
        url: 'https://play.google.com/store/apps/details?id=com.drakatia.tanamao',
        tags: ['Expo', 'React Native', 'Styled Components', 'AdonisJS']
      },
      {
        title: 'SafeGirl',
        url: 'https://www-institutoclaro-org-br.translate.goog/nossas-novidades/campus-mobile-saiba-quais-sao-os-projetos-vencedores-da-7a-edicao/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=ajax,elem',
        image: '/images/safegirl.png',
        description:
          'Aplicativo que busca classificar ambientes de diversão de acordo com o nível de segurança proporcionado ao público feminino.',
        tags: ['React', 'React Native', 'Styled Components', 'AdonisJS']
      },
      {
        title: 'Poty Redes',
        url: 'https://play.google.com/store/apps/details?id=com.mateusbezerra.poty',
        image: '/images/poty-redes.png',
        description:
          'Aplicativo de controle de fluxo de caixa de uma pequena empresa.',
        tags: ['Expo', 'React Native', 'AdonisJS', 'Postgres']
      },
      {
        title: 'CalendApp',
        url: 'https://github.com/mateusbzerra/github-explorer',
        image: '/images/calendapp.png',
        description:
          'Aplicação Web (SPA) para controle de lembretes em um calendário mensal, com data, horário e informações climáticas do cidade.',
        tags: ['React', 'Typescript', 'Jest', 'Styled Components']
      }
    ],
    seeMore: 'Ver mais'
  },
  contact: {
    title: 'Fale comigo'
  },
  footer: {
    title: 'Feito com',
    subtitle: 'por Mateus Bezerra'
  }
};
export default pt;
