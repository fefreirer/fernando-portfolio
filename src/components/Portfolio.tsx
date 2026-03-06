import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { ANIMATION } from '../lib/constants';
import Hero from './Hero';
import SkillSlider from './SkillSlider';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
// import Blog from './Blog';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher';
import type { PortfolioData } from '../types/portfolio';

interface PortfolioProps {
  data: PortfolioData;
}

// Componente interno que usa o ThemeContext e LanguageContext
function PortfolioContent({ data }: PortfolioProps) {
  const { colors } = useTheme();
  const { t } = useLanguage();

  return (
    <div style={{ backgroundColor: colors.background, minHeight: '100vh' }}>
      {/* Switcher de idioma */}
      <LanguageSwitcher />
      
      {/* Padrão de fundo com pontos */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.foreground}14 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Container principal */}
      <motion.div
        className="relative max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-24"
        initial="hidden"
        animate="visible"
        variants={ANIMATION.stagger}
      >
        {/* Hero - Perfil e informações principais */}
        <Hero 
          profile={data.profile} 
          roles={data.roles} 
          socials={data.socials} 
        />

        {/* Seção de Skills com slider */}
        <motion.section variants={ANIMATION.fadeIn} className="mb-6">
          <p 
            className="text-xs sm:text-sm mb-2 sm:mb-3" 
            style={{ color: `${colors.foreground}99` }}
          >
            {t.skills.title} <span style={{ color: colors.foreground }} className="font-medium">{t.skills.highlight}</span>
          </p>
          <SkillSlider skills={data.skills} />
        </motion.section>

        {/* Experiência profissional */}
        <Experience experiences={data.experience} />

        {/* Educação */}
        <Education education={data.education} />

        {/* Projetos */}
        <Projects projects={data.projects} />

        {/* Blog */}
        {/* <Blog blogs={data.blogs} /> */}

        {/* Footer */}
        <Footer handle={data.profile.handle} />
      </motion.div>
    </div>
  );
}

// Componente principal que envolve com o ThemeProvider e LanguageProvider
export default function Portfolio({ data }: PortfolioProps) {
  return (
    <ThemeProvider initialTheme={data.theme as any}>
      <LanguageProvider>
        <PortfolioContent data={data} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
