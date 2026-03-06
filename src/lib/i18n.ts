// Traduções em português brasileiro
export const pt_BR = {
  hero: {
    resume: 'Resume',
    talk: 'Let\'s talk',
    email: 'Send email',
    findMe: 'Find me on the',
    internet: 'internet',
  },
  skills: {
    title: 'My',
    highlight: 'skills',
  },
  experience: {
    title: 'Professional Experience',
    showMore: 'Show',
    more: 'more',
    showLess: 'Show less',
  },
  education: {
    title: 'Education',
    grade: 'Grade',
    showMore: 'Show',
    more: 'more',
    showLess: 'Show less',
  },
  projects: {
    title: 'Featured Projects',
  },
  blog: {
    title: 'Recent Articles',
    readingTime: 'min read',
    showMore: 'Show',
    more: 'more',
    showLess: 'Show less',
  },
  footer: {
    madeWith: '',
  },
};

// Traduções em inglês
export const en = {
  hero: {
    resume: 'Resume',
    talk: 'Let\'s talk',
    email: 'Send email',
    findMe: 'Find me on the',
    internet: 'internet',
  },
  skills: {
    title: 'My',
    highlight: 'skills',
  },
  experience: {
    title: 'Professional Experience',
    showMore: 'Show',
    more: 'more',
    showLess: 'Show less',
  },
  education: {
    title: 'Education',
    grade: 'Grade',
    showMore: 'Show',
    more: 'more',
    showLess: 'Show less',
  },
  projects: {
    title: 'Featured Projects',
  },
  blog: {
    title: 'Recent Articles',
    readingTime: 'min read',
    showMore: 'Show',
    more: 'more',
    showLess: 'Show less',
  },
  footer: {
    madeWith: '',
  },
};

export type Language = 'pt-BR' | 'en';
export type Translations = typeof pt_BR;

export const translations: Record<Language, Translations> = {
  'pt-BR': pt_BR,
  'en': en,
};
