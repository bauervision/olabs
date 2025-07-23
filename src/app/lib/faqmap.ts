export const faqKeys = [
  'what does cx-edge do',
  'how does hatteras help',
  'what is sentinel',
  'what is semantic-edge',
  'how do you use mixed reality',
] as const;

export type FaqKey = (typeof faqKeys)[number];

export type InfoLevel = 'basic' | 'advanced';

export const faqMap: Record<FaqKey, Record<InfoLevel, string>> = {
  'what does cx-edge do': {
    basic: '...',
    advanced: '...',
  },
  'how does hatteras help': {
    basic: '...',
    advanced: '...',
  },
  'what is sentinel': {
    basic: '...',
    advanced: '...',
  },
  'what is semantic-edge': {
    basic: '...',
    advanced: '...',
  },
  'how do you use mixed reality': {
    basic: '...',
    advanced: '...',
  },
};
