import { motion } from 'framer-motion';
import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { ANIMATION } from '../lib/constants';
import { getSectionGradient, getGlowColor } from '../lib/themes';
import type { BlogPost } from '../types/portfolio';

const INITIAL_SHOW_COUNT = 4;

interface BlogProps {
  blogs: BlogPost[];
}

export default function Blog({ blogs }: BlogProps) {
  const { colors, mode } = useTheme();
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const displayedBlogs = showAll ? blogs : blogs.slice(0, INITIAL_SHOW_COUNT);
  const hasMore = blogs.length > INITIAL_SHOW_COUNT;

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
        className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: getGlowColor(colors, mode) }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
          <div
            className="h-6 sm:h-8 w-1 rounded-full"
            style={{ background: `linear-gradient(to bottom, ${colors.secondary}, ${colors.accent})` }}
          />
          <h2 className="text-base sm:text-lg font-semibold" style={{ color: colors.foreground }}>
            {t.blog.title}
          </h2>
        </div>

        <motion.div
          className="space-y-2 sm:space-y-3"
          variants={ANIMATION.cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedBlogs.map((blog) => (
            <motion.a
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              variants={ANIMATION.cardItem}
              whileHover={{ x: 4 }}
              className="group flex flex-col sm:flex-row gap-3 p-3 sm:p-4 rounded-xl border transition-colors cursor-pointer"
              style={{
                backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                borderColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';
              }}
            >
              <div className="flex-1">
                <h3 
                  className="font-medium text-sm sm:text-base mb-1 group-hover:underline" 
                  style={{ color: colors.foreground }}
                >
                  {blog.title}
                </h3>
                <p 
                  className="text-xs sm:text-sm line-clamp-2 mb-2" 
                  style={{ color: `${colors.foreground}99` }}
                >
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-xs" style={{ color: `${colors.foreground}80` }}>
                  <span>{new Date(blog.date).toLocaleDateString('pt-BR')}</span>
                  {blog.readingTime && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readingTime} {t.blog.readingTime}
                      </span>
                    </>
                  )}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                        color: `${colors.foreground}99`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {hasMore && (
          <div className="flex justify-center mt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border cursor-pointer"
              style={{
                background: mode === 'dark' ? `${colors.secondary}15` : `${colors.secondary}10`,
                borderColor: mode === 'dark' ? `${colors.secondary}30` : `${colors.secondary}20`,
                color: mode === 'dark' ? colors.secondary : colors.primary,
              }}
            >
              {showAll ? (
                <>
                  {t.blog.showLess}
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  {t.blog.showMore} {blogs.length - INITIAL_SHOW_COUNT} {t.blog.more}
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
