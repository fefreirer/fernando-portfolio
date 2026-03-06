# 🚀 Comandos Úteis

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Abrir em http://localhost:5173
```

## Build e Deploy

```bash
# Criar build de produção
npm run build

# Testar build localmente
npm run preview

# Verificar erros de TypeScript
npm run build -- --mode development
```

## Estrutura Rápida

```
src/
├── components/     # Todos os componentes React
├── context/        # Context API (Temas)
├── data/          # ⭐ Edite data.json aqui
├── lib/           # Utilitários (temas, animações)
└── types/         # Tipos TypeScript
```

## Editando o Portfólio

### 1. Dados Básicos
Edite `src/data/data.json` - **Este é o arquivo principal!**

### 2. Trocar Tema
```json
"theme": "ocean"  // ou: sunset, forest, midnight, rose, monochrome
```

### 3. Usar SkillSlider (padrão) ou SkillsGrid

**Slider (padrão):**
```tsx
import SkillSlider from './components/SkillSlider';
<SkillSlider skills={data.skills} />
```

**Grid:**
```tsx
import SkillsGrid from './components/SkillsGrid';
<SkillsGrid skills={data.skills} />
```

Edite em `src/components/Portfolio.tsx` linha ~48

## Ícones Disponíveis (Lucide React)

### Para Skills
- `Code` - Programação
- `Database` - Bancos de dados
- `Server` - Backend
- `Zap` - Performance
- `GitBranch` - Git
- `Box` - Docker
- `Palette` - Design
- `Globe` - Web
- `Terminal` - CLI

### Importar mais ícones
```tsx
import { NomeDoIcone } from 'lucide-react';
<NomeDoIcone className="w-4 h-4" />
```

Veja todos em: https://lucide.dev/

## Personalizações Rápidas

### Mudar velocidade do slider
`src/components/SkillSlider.tsx` linha 18:
```tsx
const scrollSpeed = 0.5; // Aumente ou diminua
```

### Mudar número de itens iniciais
Em Experience, Education, Blog:
```tsx
const INITIAL_SHOW_COUNT = 4; // Mude para 3, 5, etc
```

### Adicionar nova cor ao tema
`src/lib/themes.ts`:
```tsx
export const THEME_PRESETS = {
  meuTema: {
    primary: '#cor1',
    secondary: '#cor2',
    accent: '#cor3',
    highlight: '#cor4',
    muted: '#cor5'
  }
}
```

### Mudar fonte
`src/index.css`:
```css
body {
  font-family: 'Inter', system-ui, sans-serif;
}
```

Depois importe no `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Snippets Úteis

### Adicionar nova seção social
`src/data/data.json`:
```json
"socials": [
  {
    "name": "Instagram",
    "url": "https://instagram.com/seu-usuario",
    "icon": "instagram"
  }
]
```

Depois adicione o ícone em `src/components/Hero.tsx` no objeto `icons`.

### Criar projeto destacado
```json
"projects": [
  {
    "id": "unique-id",
    "title": "Meu Projeto",
    "slug": "meu-projeto",
    "description": "Descrição curta e atraente",
    "image": "https://...",
    "tags": ["Tag1", "Tag2"],
    "github": "https://github.com/...",
    "demo": "https://...",
    "featured": true  // ⭐ Importante!
  }
]
```

## Dicas de Performance

### 1. Otimizar imagens
```bash
# Instale imagemin
npm i -g imagemin-cli

# Otimize
imagemin src/assets/*.{jpg,png} --out-dir=dist/assets
```

### 2. Analisar bundle
```bash
npm run build
npx vite-bundle-visualizer
```

### 3. Lazy load de imagens
Já implementado com `loading="lazy"` nos componentes.

## Troubleshooting

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de TypeScript
```bash
# Verificar erros
npx tsc --noEmit

# Ou ignore temporariamente
// @ts-ignore
```

### Tailwind não funciona
Verifique se tem as diretivas no `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Animações lentas
Reduza a duração em `src/lib/constants.ts`:
```tsx
transition: { duration: 0.3 } // Era 0.5
```

## Deploy

### Vercel
```bash
npm i -g vercel
vercel login
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Ajuste vite.config.ts
export default defineConfig({
  base: '/nome-do-repo/',
})

# Build e push
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

## Recursos

- **Lucide Icons**: https://lucide.dev/
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Unsplash**: https://unsplash.com/ (imagens)
- **Coolors**: https://coolors.co/ (paletas)

## Checklist Antes do Deploy

- [ ] Preenchi todos os dados em `data.json`
- [ ] Testei em mobile (375px)
- [ ] Testei em desktop (1440px)
- [ ] Otimizei todas as imagens
- [ ] Links funcionam (socials, projetos)
- [ ] Email está correto
- [ ] Currículo está atualizado
- [ ] `npm run build` sem erros
- [ ] Testei `npm run preview`

---

Bom desenvolvimento! 🚀
