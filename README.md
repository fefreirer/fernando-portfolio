# 🎨 Portfólio Moderno

Portfólio/currículo profissional desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion. Design minimalista, responsivo e totalmente personalizável através de um único arquivo JSON.

## ✨ Características

### 📦 Tecnologias
- **React 19** - Biblioteca UI moderna
- **TypeScript** - Tipagem estática
- **Vite 7** - Build tool ultrarrápido
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos

### 🎯 Funcionalidades
- ✅ Totalmente responsivo (mobile-first)
- ✅ Modo claro/escuro com transições suaves
- ✅ 6 temas de cores pré-configurados
- ✅ Animações com Framer Motion
- ✅ Seções expansíveis (experiência, educação)
- ✅ Slider infinito de habilidades
- ✅ Cards de projetos com hover effects
- ✅ Configuração centralizada em JSON
- ✅ Performance otimizada
- ✅ SEO-friendly

## 🚀 Início Rápido

### Instalação

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## ⚙️ Configuração

Todos os dados do portfólio são gerenciados através do arquivo `src/data/data.json`. 

### 🎨 Temas Disponíveis

- `ocean` - Azul oceano (padrão)
- `sunset` - Laranja pôr do sol
- `forest` - Verde floresta
- `midnight` - Roxo meia-noite
- `rose` - Rosa elegante
- `monochrome` - Tons de cinza

Altere o campo `"theme"` no `data.json` para trocar o tema.

### 👤 Configurar Perfil

Edite as informações em `src/data/data.json`:

```json
"profile": {
  "name": "Seu Nome",
  "handle": "seunome",
  "avatar": "URL_DA_FOTO",
  "banner": "URL_DO_BANNER",
  "bio": "Sua descrição profissional",
  "location": "Cidade, País",
  "resumeUrl": "URL_DO_CURRICULO",
  "email": "seu@email.com"
}
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎯 Estrutura de Pastas

```
src/
├── components/          # Componentes React
│   ├── Portfolio.tsx    # Componente principal
│   ├── Hero.tsx         # Seção hero/perfil
│   ├── SkillSlider.tsx  # Slider de habilidades
│   ├── Experience.tsx   # Experiências
│   ├── Education.tsx    # Educação
│   ├── Projects.tsx     # Projetos
│   ├── Blog.tsx         # Blog/Artigos
│   └── Footer.tsx       # Rodapé
├── context/
│   └── ThemeContext.tsx # Gerenciamento de temas
├── lib/
│   ├── themes.ts        # Temas de cores
│   └── constants.ts     # Animações
├── types/
│   └── portfolio.ts     # Tipos TypeScript
└── data/
    └── data.json        # ⭐ Seus dados aqui
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📄 Licença

MIT License

## 💡 Inspiração

Inspirado no projeto [Porthat](https://github.com/pixperk/porthat) por pixperk.

---

Feito com ❤️ e TypeScript
