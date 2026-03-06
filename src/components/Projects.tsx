import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { ANIMATION } from '../lib/constants';
import { getSectionGradient, getGlowColor } from '../lib/themes';
import type { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const { colors, mode } = useTheme();
  const { t } = useLanguage();

  // Filtrar apenas projetos featured
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <motion.section
      variants={ANIMATION.fadeIn}
      className="mb-5 sm:mb-6 relative overflow-hidden rounded-2xl p-4 sm:p-6 backdrop-blur-xl border"
      style={{
        background: getSectionGradient(colors, mode),
        borderColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
      }}
    >
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: getGlowColor(colors, mode) }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
          <div
            className="h-6 sm:h-8 w-1 rounded-full"
            style={{ background: `linear-gradient(to bottom, ${colors.highlight}, ${colors.primary})` }}
          />
          <h2 className="text-base sm:text-lg font-semibold" style={{ color: colors.foreground }}>
            {t.projects.title}
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          variants={ANIMATION.cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={ANIMATION.cardItem}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={ANIMATION.spring}
              className="group rounded-xl border overflow-hidden cursor-pointer"
              style={{
                backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                borderColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              }}
              onClick={() => {
                if (project.demo) window.open(project.demo, '_blank');
                else if (project.github) window.open(project.github, '_blank');
              }}
            >
              {/* Imagem do projeto */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom right, ${colors.primary}80, ${colors.secondary}80)`,
                  }}
                />
                
                {/* Links do projeto */}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    >
                      <Github className="w-4 h-4 text-white" />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Informações do projeto */}
              <div className="p-4">
                <h3 
                  className="font-semibold text-base sm:text-lg mb-2" 
                  style={{ color: colors.foreground }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3" 
                  style={{ color: `${colors.foreground}99` }}
                >
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                        color: `${colors.foreground}99`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span
                      className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                        color: `${colors.foreground}66`,
                      }}
                    >
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
