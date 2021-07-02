export default interface ITranslationType {
  metaTags: {
    title: string;
    description: string;
  };
  aboutMe: {
    title: string;
    description: string;
  };
  achievements: {
    title: string;
    items: {
      title: string;
      subtitle: string;
      description: string;
      type: string;
    }[];
  };
  portfolio: {
    title: string;
    items: {
      title: string;
      description: string;
      image: string;
      url: string;
      tags: string[];
    }[];
    seeMore: string;
  };
  contact: {
    title: string;
  };
  footer: {
    title: string;
    subtitle: string;
  };
}
