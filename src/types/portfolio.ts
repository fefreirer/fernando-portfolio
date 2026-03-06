// Interface para o perfil do usuário
export interface Profile {
  name: string;
  handle: string;
  avatar: string;
  banner: string;
  bio: string;
  location: string;
  resumeUrl: string;
  email: string;
}

// Interface para redes sociais
export interface Social {
  name: string;
  url: string;
  icon: string;
}

// Interface para habilidades
export interface Skill {
  name: string;
  icon: string;
  color: string;
}

// Interface para experiências profissionais
export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  details: string[];
}

// Interface para educação
export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  grade?: string;
  details: string[];
}

// Interface para projetos
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
}

// Interface para posts do blog
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  readingTime?: string;
}

// Interface principal que agrupa todos os dados
export interface PortfolioData {
  theme: string;
  github: string;
  profile: Profile;
  roles: string[];
  socials: Social[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  blogs: BlogPost[];
}
