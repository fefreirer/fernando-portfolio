import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download, Sun, Moon, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { ANIMATION } from '../lib/constants';
import type { Profile, Social } from '../types/portfolio';

// Componente de ícone social reutilizável
const SocialIcon = ({ name }: { name: string }) => {
  const icons: Record<string, any> = {
    github: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  };
  
  return icons[name.toLowerCase()] || null;
};

interface HeroProps {
  profile: Profile;
  roles: string[];
  socials: Social[];
}

export default function Hero({ profile, roles, socials }: HeroProps) {
  const { colors, mode, toggleMode } = useTheme();
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotacionar roles automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
      {/* Banner com avatar */}
      <motion.div variants={ANIMATION.fadeIn} className="relative mb-6">
        <div className="relative overflow-hidden rounded-2xl h-32 sm:h-40">
          <img 
            src={profile.banner} 
            alt="Banner" 
            className="w-full h-full object-cover"
          />
          {/* Botão de tema */}
          <button
            onClick={toggleMode}
            className="absolute top-3 right-3 p-2 rounded-lg transition-colors backdrop-blur-sm hover:bg-white/30 cursor-pointer"
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: '#fff',
            }}
          >
            {mode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
        
        {/* Avatar */}
        <div className="absolute -bottom-12 left-6 sm:left-8 z-20">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 shadow-xl"
            style={{ borderColor: colors.background, backgroundColor: colors.background }}
          >
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Informações do perfil */}
      <motion.section
        variants={ANIMATION.fadeIn}
        className="pt-14 mb-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 
              className="text-2xl sm:text-3xl font-bold mb-1"
              style={{ color: colors.foreground }}
            >
              {profile.name}
            </h1>
            <div className="flex items-center gap-2 text-sm" style={{ color: `${colors.foreground}99` }}>
              <MapPin className="w-4 h-4" />
              {profile.location}
            </div>
          </div>
          
          {/* Botão de currículo */}
          <motion.a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer"
            style={{
              backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
              color: colors.foreground
            }}
          >
            <Download className="w-3 h-3" />
            Currículo
          </motion.a>
        </div>

        {/* Bio */}
        <p 
          className="text-sm sm:text-base leading-relaxed mb-5 sm:mb-6" 
          style={{ color: `${colors.foreground}b3` }}
        >
          {profile.bio}
        </p>

        {/* Botões de ação */}
        {/* <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6">
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              background: getGradient(colors), 
              boxShadow: `0 10px 15px -3px ${colors.primary}40` 
            }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white relative overflow-hidden group transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10" />
            <span className="relative z-10">{t.hero.talk}</span>
          </motion.a>
          
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium border-2 transition-all duration-300 cursor-pointer"
            style={{
              borderColor: colors.primary,
              color: colors.primary,
            }}
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {t.hero.email}
          </motion.a>
        </div> */}

        {/* Role rotativo */}
        <div className="h-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm"
              style={{ color: `${colors.foreground}99` }}
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Links sociais */}
        <div>
          <p 
            className="text-xs sm:text-sm mb-2 sm:mb-3 mt-4" 
            style={{ color: `${colors.foreground}99` }}
          >
            {t.hero.findMe} <span style={{ color: colors.foreground }} className="font-medium">{t.hero.internet}</span>
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer"
                style={{
                  backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                  color: colors.foreground,
                }}
              >
                <SocialIcon name={social.icon} />
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
