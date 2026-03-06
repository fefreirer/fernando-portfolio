import { createContext, useContext, useState, type ReactNode, type FC } from 'react';
import { translations, type Language, type Translations } from '../lib/i18n';

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ 
  children, 
  initialLanguage = 'pt-BR' 
}) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Salvar preferência no localStorage
    localStorage.setItem('portfolio-language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'pt-BR' ? 'en' : 'pt-BR';
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        t: translations[language],
        setLanguage,
        toggleLanguage 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Hook customizado para usar o contexto
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
}
