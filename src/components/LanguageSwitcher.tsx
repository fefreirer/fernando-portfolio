import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { colors, mode } = useTheme();

  return (
    <div className="fixed top-4 left-4 z-50 flex gap-2">
      {(['pt-BR', 'en'] as const).map((lang) => (
        <motion.button
          key={lang}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer border ${
            language === lang ? 'border-2' : 'border'
          }`}
          style={{
            backgroundColor: language === lang 
              ? mode === 'dark' ? `${colors.primary}20` : `${colors.primary}15`
              : 'transparent',
            borderColor: language === lang ? colors.primary : `${colors.foreground}30`,
            color: language === lang ? colors.primary : colors.foreground,
          }}
        >
          {lang === 'pt-BR' ? '🇧🇷 PT' : '🇺🇸 EN'}
        </motion.button>
      ))}
    </div>
  );
}
