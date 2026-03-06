// Presets de temas do portfólio
export const THEME_PRESETS = {
  ocean: {
    primary: '#0ea5e9',
    secondary: '#06b6d4',
    accent: '#0891b2',
    highlight: '#22d3ee',
    muted: '#164e63'
  },
  sunset: {
    primary: '#f97316',
    secondary: '#fb923c',
    accent: '#ea580c',
    highlight: '#fdba74',
    muted: '#9a3412'
  },
  forest: {
    primary: '#10b981',
    secondary: '#34d399',
    accent: '#059669',
    highlight: '#6ee7b7',
    muted: '#065f46'
  },
  midnight: {
    primary: '#6366f1',
    secondary: '#818cf8',
    accent: '#4f46e5',
    highlight: '#a5b4fc',
    muted: '#312e81'
  },
  rose: {
    primary: '#ec4899',
    secondary: '#f472b6',
    accent: '#db2777',
    highlight: '#f9a8d4',
    muted: '#831843'
  },
  monochrome: {
    primary: '#6b7280',
    secondary: '#9ca3af',
    accent: '#4b5563',
    highlight: '#d1d5db',
    muted: '#1f2937'
  }
};

export type ThemePreset = keyof typeof THEME_PRESETS;

// Cores dinâmicas baseadas no tema e modo (claro/escuro)
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  highlight: string;
  muted: string;
  background: string;
  foreground: string;
  border: string;
}

// Função para obter cores do tema baseado no modo
export const getThemeColors = (
  themeName: ThemePreset,
  mode: 'light' | 'dark'
): ThemeColors => {
  const preset = THEME_PRESETS[themeName];
  
  return {
    ...preset,
    background: mode === 'dark' ? '#1a2e19ff' : '#ccccccff',
    foreground: mode === 'dark' ? '#ffffff' : '#0a0a0a',
    border: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
  };
};

// Função para gerar gradiente baseado nas cores do tema
export const getGradient = (colors: ThemeColors): string => {
  return `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`;
};

// Função para gerar gradiente de seção
export const getSectionGradient = (_colors: ThemeColors, mode: 'light' | 'dark'): string => {
  if (mode === 'dark') {
    return `linear-gradient(to bottom right, rgba(255,255,255,0.02), rgba(255,255,255,0.01))`;
  }
  return `linear-gradient(to bottom right, rgba(0,0,0,0.02), rgba(0,0,0,0.01))`;
};

// Função para gerar cor de brilho (glow)
export const getGlowColor = (colors: ThemeColors, mode: 'light' | 'dark'): string => {
  return mode === 'dark' ? `${colors.primary}20` : `${colors.primary}15`;
};
