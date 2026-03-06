import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import type { Skill } from '../types/portfolio';
import * as Icons from 'lucide-react';

interface SkillSliderProps {
  skills: Skill[];
}

export default function SkillSlider({ skills }: SkillSliderProps) {
  const { colors, mode } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll infinito
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, [skills]);

  // Duplicar skills para scroll infinito
  const duplicatedSkills = [...skills, ...skills];

  // Obter ícone do Lucide React
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, (g: string) => g[1].toUpperCase())];
    return IconComponent || Icons.Code;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Gradientes nas bordas */}
      <div
        className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${colors.background}, transparent)` }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${colors.background}, transparent)` }}
      />

      {/* Container de scroll */}
      <div
        ref={scrollRef}
        className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedSkills.map((skill, index) => {
          const Icon = getIcon(skill.icon);
          return (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border whitespace-nowrap flex-shrink-0"
              style={{
                backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                borderColor: `${skill.color}30`,
              }}
            >
              <Icon className="w-4 h-4" style={{ color: skill.color }} />
              <span className="text-sm font-medium" style={{ color: colors.foreground }}>
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
