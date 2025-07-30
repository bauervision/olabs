export const faqKeys = [
  'What does CXEdge do for customers',
  'How does Hatteras help me',
  'What is Sentinel',
  'what is Semantic Edge used for',
  'How does Echonet locate targets',
  'How do you use mixed reality',
] as const;

export type FaqKey = (typeof faqKeys)[number];

export type InfoLevel = 'basic' | 'advanced';

export const faqMap: Record<FaqKey, Record<InfoLevel, string>> = {
  'What does CXEdge do for customers': {
    basic:
      'CXEdge enables tactical teams to collect, analyze, and distribute mission critical data in real time on handheld devices[Learn More](/cxedge)',
    advanced: '...',
  },
  'How does Hatteras help me': {
    basic:
      'Hatteras is the perfect solution to ensure that your ML models are developed, deployed and maintained with a systematic approach that embraces automation, scalability and security in addition to other great features[Learn More](/hatteras)',
    advanced: '...',
  },
  'What is Sentinel': {
    basic:
      'Sentinel is a a computer vision ML pipeline built on the latest open-source, state-of-the-art ML frameworks.[Learn More](/sentinel)',
    advanced: '...',
  },
  'what is Semantic Edge used for': {
    basic:
      'Semantic Edge brings real-time intelligence and decision support to the battelfield when access to the cloud is not an option. [Learn More](/semantic-edge)',
    advanced: '...',
  },
  'How does Echonet locate targets': {
    basic:
      'EchoNet collects sound waves throughout an environment, detects and identifies sound sources, locates sound-emitting objects of interest, and tracks the direction and movement of those objects in real time [Learn More](/echonet)',
    advanced: '...',
  },
  'How do you use mixed reality': {
    basic:
      'We use mixed reality in various ways to support our customers, to include a cutting edge way to display data, real-time updates about the battlefield, and immersive training [Learn More](/mixed-reality)',
    advanced: '...',
  },
};

export const generalFaqKeys: FaqKey[] = [
  'What does CXEdge do for customers',
  'How does Hatteras help me',
  'What is Sentinel',
  'what is Semantic Edge used for',
  'How does Echonet locate targets',
  'How do you use mixed reality',
];

export const pageSpecificFaqMap: Record<string, FaqKey[]> = {
  '/cx-edge': ['What does CXEdge do for customers'],
  '/hatteras': ['How does Hatteras help me'],
  '/sentinel': ['What is Sentinel'],
  '/semantic-edge': ['what is Semantic Edge used for'],
  '/echonet': ['How does Echonet locate targets'],
  '/mixed-reality': ['How do you use mixed reality'],
};
