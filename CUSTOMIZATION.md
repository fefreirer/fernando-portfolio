# 🎨 Guia de Personalização

Este guia mostra como personalizar seu portfólio além das configurações básicas.

## 📝 Editando seus Dados

Todos os dados estão em `src/data/data.json`. Edite este arquivo para personalizar:

### 1. Informações Básicas

```json
{
  "theme": "ocean",  // Escolha: ocean, sunset, forest, midnight, rose, monochrome
  "github": "seu-usuario-github",
  "profile": {
    "name": "Seu Nome Completo",
    "handle": "nickname",
    "avatar": "https://github.com/seu-usuario.png",
    "banner": "https://images.unsplash.com/photo-...",
    "bio": "Descreva você em 1-2 frases",
    "location": "Cidade, País",
    "resumeUrl": "link-para-seu-curriculo.pdf",
    "email": "contato@email.com"
  }
}
```

**Dicas:**
- Use imagens do Unsplash para o banner (https://unsplash.com/)
- Avatar: pode usar a foto do GitHub (`https://github.com/USERNAME.png`)
- Bio: seja conciso e objetivo

### 2. Roles/Cargos

```json
"roles": [
  "Desenvolvedor Full Stack",
  "Engenheiro de Software",
  "UI/UX Designer"
]
```

Estes textos rotacionam automaticamente no hero.

### 3. Redes Sociais

```json
"socials": [
  {
    "name": "GitHub",
    "url": "https://github.com/seu-usuario",
    "icon": "github"  // github, linkedin, twitter
  }
]
```

**Ícones disponíveis:** github, linkedin, twitter

### 4. Habilidades

```json
"skills": [
  {
    "name": "React",
    "icon": "code",  // Ícone do Lucide React
    "color": "#61DAFB"  // Cor do ícone
  }
]
```

**Ícones Lucide disponíveis:**
- `code` - Programação geral
- `database` - Bancos de dados
- `server` - Backend/Servidores
- `zap` - Performance/Velocidade
- `git-branch` - Git/Versionamento
- `box` - Containers/Docker
- `palette` - Design/UI

**Cores sugeridas:**
- React: `#61DAFB`
- TypeScript: `#3178C6`
- Node.js: `#68A063`
- Python: `#3776AB`
- Tailwind: `#06B6D4`

### 5. Experiência

```json
"experience": [
  {
    "company": "Nome da Empresa",
    "role": "Seu Cargo",
    "type": "Full-time",  // Full-time, Part-time, Freelance, Contract
    "period": "2022 - Presente",
    "location": "Remoto",  // Remoto, Cidade, Híbrido
    "details": [
      "Conquista ou responsabilidade mensurável",
      "Use números quando possível (ex: 40% de melhoria)",
      "Foque em resultados, não apenas tarefas"
    ]
  }
]
```

**Dicas:**
- Use verbos de ação: Desenvolvi, Implementei, Otimizei
- Quantifique resultados quando possível
- Máximo 3-4 bullets por experiência

### 6. Educação

```json
"education": [
  {
    "institution": "Nome da Universidade",
    "degree": "Bacharelado",  // Bacharelado, Mestrado, Técnico
    "field": "Ciência da Computação",
    "period": "2016 - 2020",
    "location": "Cidade, País",
    "grade": "8.5/10",  // Opcional
    "details": [
      "Menções honrosas ou projetos relevantes",
      "Atividades acadêmicas importantes"
    ]
  }
]
```

### 7. Projetos

```json
"projects": [
  {
    "id": "1",  // ID único
    "title": "Nome do Projeto",
    "slug": "nome-projeto",  // URL-friendly
    "description": "Breve descrição (1-2 linhas)",
    "image": "https://images.unsplash.com/photo-...",
    "tags": ["React", "Node.js", "PostgreSQL"],
    "github": "https://github.com/user/repo",
    "demo": "https://projeto.vercel.app",
    "featured": true  // Aparece na página principal
  }
]
```

**Dicas para imagens:**
- Use Unsplash, Pexels ou prints do projeto
- Tamanho recomendado: 800x600px
- Use imagens relacionadas ao tipo de projeto

### 8. Blog/Artigos

```json
"blogs": [
  {
    "slug": "titulo-do-post",
    "title": "Título do Artigo",
    "date": "2024-01-15",  // YYYY-MM-DD
    "excerpt": "Resumo curto do artigo (1-2 frases)",
    "tags": ["React", "Performance"],
    "readingTime": "5 min"  // Opcional
  }
]
```

### 9. Citações

```json
"quotes": [
  "Citação inspiradora sobre programação ou tecnologia",
  "Outra citação que você gosta",
  "Máximo 3-4 citações"
]
```

Uma citação aleatória aparece no footer.

## 🎨 Personalizando Temas

### Trocar Tema Pré-definido

No `data.json`:
```json
"theme": "midnight"  // ocean, sunset, forest, midnight, rose, monochrome
```

### Criar Seu Próprio Tema

Edite `src/lib/themes.ts`:

```typescript
export const THEME_PRESETS = {
  // ... temas existentes
  meuTema: {
    primary: '#FF6B6B',    // Cor principal
    secondary: '#4ECDC4',  // Cor secundária
    accent: '#45B7D1',     // Cor de destaque
    highlight: '#FFA07A',  // Cor de realce
    muted: '#95E1D3'       // Cor suave
  }
}
```

Depois use no `data.json`:
```json
"theme": "meuTema"
```

## 🖼️ Dicas de Imagens

### Fontes Gratuitas
- **Unsplash** - https://unsplash.com/
- **Pexels** - https://www.pexels.com/
- **Pixabay** - https://pixabay.com/

### Tamanhos Recomendados
- Banner: 1200x400px (formato 3:1)
- Avatar: 400x400px (quadrado)
- Projetos: 800x600px (formato 4:3)

### Otimização
Use serviços como:
- TinyPNG - https://tinypng.com/
- Squoosh - https://squoosh.app/

## 🚀 Dicas de Performance

1. **Otimize imagens** - Use WebP quando possível
2. **Minimize o data.json** - Mantenha descrições concisas
3. **Lazy loading** - Já implementado automaticamente
4. **CDN** - Use CDNs para imagens (Cloudinary, Imgur)

## 📱 Mobile-First

O design já é responsivo, mas teste em:
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1440px

Use DevTools do navegador para testar.

## 🔍 SEO

Edite `index.html` para melhorar SEO:

```html
<title>Seu Nome | Portfólio</title>
<meta name="description" content="Sua descrição profissional" />
```

## 💡 Próximos Passos

1. ✅ Preencha todos os dados em `data.json`
2. ✅ Escolha ou crie um tema
3. ✅ Adicione suas imagens
4. ✅ Teste responsividade
5. ✅ Faça o deploy!

## ❓ Dúvidas Comuns

**P: Como adiciono mais seções?**
R: Crie um novo componente em `src/components/` e adicione no `Portfolio.tsx`

**P: Posso mudar as cores do tema dinamicamente?**
R: Sim, o botão de sol/lua alterna entre claro/escuro

**P: Como adiciono mais ícones de redes sociais?**
R: Adicione o SVG do ícone no componente `Hero.tsx` no objeto `icons`

**P: O slider de skills está muito rápido/lento**
R: Ajuste o `scrollSpeed` em `SkillSlider.tsx` (linha 18)

---

Precisa de ajuda? Abra uma issue no GitHub!
