import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { getThemeColors, type ThemePreset, type ThemeColors } from '../lib/themes';

// Interface do contexto de tema
interface ThemeContextType {
  themeName: ThemePreset;
  mode: 'light' | 'dark';
  colors: ThemeColors;
  setTheme: (theme: ThemePreset) => void;
  setMode: (mode: 'light' | 'dark') => void;
  toggleMode: () => void;
}

// Criar o contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider do contexto de tema
export function ThemeProvider({ 
  children, 
  initialTheme = 'ocean' 
}: { 
  children: ReactNode;
  initialTheme?: ThemePreset;
}) {
  // Estado do tema e modo
  const [themeName, setThemeName] = useState<ThemePreset>(initialTheme);
  const [mode, setModeState] = useState<'light' | 'dark'>('dark');
  
  // Obter cores do tema baseado no modo atual
  const colors = getThemeColors(themeName, mode);

  // Aplicar classe dark ao html quando o modo for dark
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  // Função para alternar entre light e dark
  const toggleMode = () => {
    setModeState(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Função para definir modo específico
  const setMode = (newMode: 'light' | 'dark') => {
    setModeState(newMode);
  };

  // Função para definir tema
  const setTheme = (theme: ThemePreset) => {
    setThemeName(theme);
  };

  return (
    <ThemeContext.Provider value={{ 
      themeName, 
      mode, 
      colors, 
      setTheme, 
      setMode,
      toggleMode 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook customizado para usar o contexto de tema
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}
