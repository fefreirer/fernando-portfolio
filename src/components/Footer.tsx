import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  handle: string;
}

export default function Footer({ handle }: FooterProps) {
  const { colors } = useTheme();
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center py-6 sm:py-8"
    >
      {/* Créditos */}
      <p className="text-[10px] sm:text-xs" style={{ color: `${colors.foreground}4d` }}>
        {t.footer.madeWith}<span style={{ color: colors.accent }}>{handle}</span>
      </p>
    </motion.section>
  );
}
