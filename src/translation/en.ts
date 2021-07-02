import ITranslationType from './types';

const en: ITranslationType = {
  metaTags: {
    title: 'Mateus Bezerra - Software Developer',
    description: 'React, React Native & Node.js Developer'
  },
  aboutMe: {
    title: 'About me',
    description:
      "Hello and welcome to my page! I'm Mateus and I've started programming in 2015, learning at first HTML, CSS and javascript, later I started using PHP for almost 3 years, and It was my primary stack for developing my own and side web projects, in the meantime I learned and launched a mobile app using Cordova (Framework7) and PHP. In 2018 I've changed my stack to ReactJS, React Native and NodeJS and since there I'm working on this ecosystem, using such as great libraries like NextJS, Styled Components, Reactstrap, GraphQL (Yoga and Apollo) and Material UI, more recently I'm passioned about tests using Jest and styling using TailwindCSS."
  },
  achievements: {
    title: 'Achievements',
    items: [
      {
        title: "Bachelor's Degree in Computer Science",
        subtitle: 'Federal University of Amapá',
        description:
          ' I’ve started in 2016 and currently I’m in the last year of this undergraduate degree. It has been such a great experience to learn the bases and patterns about software engineering that helps me a lot as a Software Developer.',
        type: 'education'
      },
      {
        title: 'React/React Native/Node.js Bootcamp',
        subtitle: 'Rocketseat ',
        description:
          'I’ve started learning about my main stack in 2018 during a 3-month Bootcamp by Rocketseat, learning about mobile, web and backend development using frameworks like NextJS, Styled Components, Jest, Express, AdonisJS with related and no-related databases like Postgres and Mongo, besides patterns and best practices like SOLID, TDD and Clean Code.',
        type: 'education'
      },
      {
        title: '"Moção de Aplausos" Award',
        subtitle: 'Amapá State Legislature',
        description:
          'I received from the Amapá State Legislature an honor award for creating the application SafeGirl, which helps women to find safe places to have fun, without the risk of gender violence or any abuse.',
        type: 'award'
      },
      {
        title: 'Campus Mobile Winner',
        subtitle: 'Diversity Category',
        description:
          'Brenda, Vitor and I created the SafeGirl app, as the only Software Developer in the team it was a huge challenge to develop everything by myself, but I have learned a lot! The app was the winner of the diversity category of the 7th edition of Campus Mobile, powered by Claro Brasil, and as a reward, we had a 7 day trip to Silicon Valley to visit big tech companies like Twitter, Facebook, Google and Linkedin.',
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
          'Android application to receive population requests about Santana (Amapá-BR) city improvements',
        image: '/images/ta-na-mao.png',
        url: 'https://play.google.com/store/apps/details?id=com.drakatia.tanamao',
        tags: ['Expo', 'React Native', 'Styled Components', 'AdonisJS']
      },
      {
        title: 'SafeGirl',
        url: 'https://www-institutoclaro-org-br.translate.goog/nossas-novidades/campus-mobile-saiba-quais-sao-os-projetos-vencedores-da-7a-edicao/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=ajax,elem',
        image: '/images/safegirl.png',
        description:
          'Android application to evaluate safe places to have fun by women, preventing any gender violence',
        tags: ['React', 'React Native', 'Styled Components', 'AdonisJS']
      },
      {
        title: 'Poty Redes',
        url: 'https://play.google.com/store/apps/details?id=com.mateusbezerra.poty',
        image: '/images/poty-redes.png',
        description:
          'Android application to control income/outcome flow of a hammock store',
        tags: ['Expo', 'React Native', 'AdonisJS', 'Postgres']
      },
      {
        title: 'CalendApp',
        url: 'https://github.com/mateusbzerra/github-explorer',
        image: '/images/calendapp.png',
        description:
          'Web calendar application to manage reminders with location, weather, date and time',
        tags: ['React', 'Typescript', 'Jest', 'Styled Components']
      }
    ],
    seeMore: 'See more'
  },
  contact: {
    title: 'Be in touch'
  },
  footer: {
    title: 'Built with',
    subtitle: 'by Mateus Bezerra'
  }
};

export default en;
