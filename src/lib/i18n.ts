// Traduções em português brasileiro
export const pt_BR = {
  hero: {
    resume: 'Currículo',
    talk: 'Vamos conversar',
    email: 'Enviar email',
    findMe: 'Me encontre na',
    internet: 'internet',
  },
  skills: {
    title: 'Minhas',
    highlight: 'habilidades',
  },
  experience: {
    title: 'Experiência Profissional',
    showMore: 'Mostrar',
    more: 'mais',
    showLess: 'Mostrar menos',
  },
  education: {
    title: 'Educação',
    grade: 'Nota',
    showMore: 'Mostrar',
    more: 'mais',
    showLess: 'Mostrar menos',
  },
  projects: {
    title: 'Projetos em Destaque',
  },
  blog: {
    title: 'Artigos Recentes',
    readingTime: 'min de leitura',
    showMore: 'Mostrar',
    more: 'mais',
    showLess: 'Mostrar menos',
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
