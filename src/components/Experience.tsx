import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { ANIMATION } from '../lib/constants';
import { getSectionGradient, getGlowColor } from '../lib/themes';
import type { Experience as ExperienceType } from '../types/portfolio';

const INITIAL_SHOW_COUNT = 4;

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const { colors, mode } = useTheme();
  const { t } = useLanguage();
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll ? experiences : experiences.slice(0, INITIAL_SHOW_COUNT);
  const hasMore = experiences.length > INITIAL_SHOW_COUNT;

  return (
    <motion.section
      variants={ANIMATION.fadeIn}
      className="mb-5 sm:mb-6 relative overflow-hidden rounded-2xl p-4 sm:p-6 backdrop-blur-xl border"
      style={{
        background: getSectionGradient(colors, mode),
        borderColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
      }}
    >
      {/* Efeito de brilho */}
      <div
        className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: getGlowColor(colors, mode) }}
      />
      
      <div className="relative z-10">
        {/* Título da seção */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
          <div
            className="h-6 sm:h-8 w-1 rounded-full"
            style={{ background: `linear-gradient(to bottom, ${colors.accent}, ${colors.primary})` }}
          />
          <h2 className="text-base sm:text-lg font-semibold" style={{ color: colors.foreground }}>
            {t.experience.title}
          </h2>
        </div>

        {/* Lista de experiências */}
        <div className="space-y-2 sm:space-y-3">
          {displayedExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border overflow-hidden transition-colors"
              style={{
                backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                borderColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              }}
            >
              {/* Cabeçalho da experiência */}
              <div
                className="p-3 sm:p-4 cursor-pointer transition-colors"
                onClick={() => setExpandedExp(expandedExp === index ? null : index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <Briefcase className="w-4 h-4" style={{ color: colors.accent }} />
                      <span className="font-medium text-sm sm:text-base" style={{ color: colors.foreground }}>
                        {exp.company}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          backgroundColor: mode === 'dark' ? `${colors.accent}20` : `${colors.accent}15`,
                          color: colors.accent,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: `${colors.foreground}b3` }}>
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-2 text-xs mt-1" style={{ color: `${colors.foreground}80` }}>
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Ícone de expandir */}
                  {exp.details && exp.details.length > 0 && (
                    <motion.div
                      animate={{ rotate: expandedExp === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" style={{ color: colors.accent }} />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Detalhes expandidos */}
              {exp.details && exp.details.length > 0 && (
                <AnimatePresence>
                  {expandedExp === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0 border-t"
                        style={{ borderColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}
                      >
                        <ul className="space-y-1.5 sm:space-y-2 pt-2.5 sm:pt-3">
                          {exp.details.map((detail, i) => (
                            <li 
                              key={i} 
                              className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm" 
                              style={{ color: `${colors.foreground}b3` }}
                            >
                              <span style={{ color: colors.accent }} className="mt-1 sm:mt-1.5">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>

        {/* Botão "Ver mais" */}
        {hasMore && (
          <div className="flex justify-center mt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border cursor-pointer"
              style={{
                background: mode === 'dark' ? `${colors.accent}15` : `${colors.accent}10`,
                borderColor: mode === 'dark' ? `${colors.accent}30` : `${colors.accent}20`,
                color: mode === 'dark' ? colors.accent : colors.primary,
              }}
            >
              {showAll ? (
                <>
                  {t.experience.showLess}
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  {t.experience.showMore} {experiences.length - INITIAL_SHOW_COUNT} {t.experience.more}
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
