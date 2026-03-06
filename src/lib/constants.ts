// Variantes de animação do Framer Motion
export const ANIMATION = {
  // Fade in básico
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  
  // Stagger para múltiplos elementos
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },

  // Stagger para cards
  cardStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  },

  // Item individual de card
  cardItem: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  },

  // Spring animation
  spring: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 20
  }
};

// Configurações de transição padrão
export const TRANSITIONS = {
  default: { duration: 0.3, ease: 'easeInOut' },
  fast: { duration: 0.15, ease: 'easeInOut' },
  slow: { duration: 0.6, ease: 'easeInOut' }
};
