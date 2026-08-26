# 📝 Como Editar o Conteúdo do Portfólio

## 🎯 Visão Geral

**Todo o conteúdo do site** (textos, habilidades, experiência, certificações, projetos e contato) está em um único arquivo: [data.js](data.js). Você só precisa editar este arquivo!

O site é 100% estático (HTML + CSS + JavaScript), sem servidor. Pode ser hospedado gratuitamente em:
- **AWS S3** (com CloudFront + Route 53, se quiser domínio próprio)
- **Oracle OCI** (máquina gratuita com Nginx, ou Object Storage)
- **GitHub Pages**, **Netlify**, **Vercel**, **Cloudflare Pages**

## 📂 O que editar em cada seção

### 1. Perfil (dados pessoais)

No topo de `data.js`:

```javascript
profile: {
    name: 'Natan Hespanhol',
    photo: 'images/profile.svg',   // ← Substitua por 'images/profile.jpg' com sua foto real
    email: 'natan.hesp@gmail.com',
    linkedin: 'https://www.linkedin.com/in/natan-hespanhol',
    github: 'https://github.com/natan-hespanhol',
    resumeFile: 'resume.pdf'
}
```

> Para trocar a foto: coloque sua imagem em `images/` e atualize o campo `photo`.

> Para o currículo: substitua o arquivo `resume.pdf` (que hoje é um placeholder) pelo seu currículo real em PDF.

### 2. Estatísticas do Hero

Logo após `profile`, edite os números que aparecem no topo da página:

```javascript
stats: [
    { value: 7, suffix: '+', label: { pt: 'Anos de Experiência', en: 'Years of Experience' } },
    { value: 3, suffix: '', label: { pt: 'Empresas & Órgãos', en: 'Companies & Agencies' } },
    { value: 5, suffix: '+', label: { pt: 'Projetos & Iniciativas', en: 'Projects & Initiatives' } }
]
```

Os números contam animadamente de 0 até o valor quando aparecem na tela. Para remover uma estatística, apague o bloco inteiro.

### 3. Hero (apresentação) e textos fixos

Na seção `i18n`, edite os textos em **pt** e **en**:

```javascript
'hero.title': 'Software QA Engineer',
'hero.description': 'Texto da sua apresentação...',
'hero.roles.0': 'Engenheiro de QA',   // Palavras do efeito de digitação
'hero.roles.1': 'Automação de Testes',
'hero.roles.2': 'Especialista em Qualidade'
```

### 3. Habilidades

```javascript
skills: [
    {
        category: 'qa',   // Chave da tradução em i18n: 'skills.category.qa'
        items: [
            { pt: 'Automação de Testes', en: 'Test Automation' },
            { pt: 'Testes de API', en: 'API Testing' }
        ]
    }
]
```

Para adicionar uma categoria nova:
1. Adicione o bloco no array `skills`
2. Adicione a tradução do título em `i18n.pt` e `i18n.en`: `'skills.category.minhacat': 'Minha Categoria'`

### 4. Experiência

```javascript
experience: [
    {
        title: { pt: 'Cargo', en: 'Job Title' },
        company: { pt: 'Empresa', en: 'Company' },
        period: { pt: '2023 - Presente', en: '2023 - Present' },
        current: true,   // Mostra o selo "Atual" no emprego atual
        description: { pt: '...', en: '...' }
    }
]
```

### 5. Especialidades (Domain Expertise)

```javascript
domain: [
    {
        icon: '💳',   // Emoji exibido no card
        title: { pt: '...', en: '...' },
        description: { pt: '...', en: '...' }
    }
]
```

### 6. Certificações

```javascript
certifications: [
    {
        title: { pt: 'Nome da Certificação', en: 'Certification Name' },
        issuer: { pt: 'Emissor', en: 'Issuer' },
        description: { pt: '...', en: '...' },
        logo: 'images/certs/aws.png',   // URL ou caminho do logo ('' para sem logo)
        link: 'https://link-da-credencial.com'
    }
]
```

> ⚠️ Os dois certificados atuais são **exemplos placeholder**. Substitua pelos seus!

### 7. Projetos

```javascript
projects: [
    {
        title: { pt: 'Nome do Projeto', en: 'Project Name' },
        description: { pt: '...', en: '...' },
        tags: ['React', 'Node.js', 'MongoDB'],
        link: 'https://projeto.com',
        image: 'images/projects/screenshot.png',   // Screenshot ('' para placeholder)
        icon: '🚀'   // Emoji exibido quando não há imagem
    }
]
```

> Para adicionar screenshots: coloque as imagens em `images/projects/` e preencha o campo `image`. Sem imagem, o site mostra um placeholder bonito com o emoji.

### 8. Além do Código (Beyond the Code)

```javascript
beyond: [
    {
        icon: '🎵',
        title: { pt: 'Música', en: 'Music' },
        description: { pt: '...', en: '...' },
        link: ''   // Link opcional (ex: Bandcamp, Strava...)
    }
]
```

> ⚠️ Os itens atuais são exemplos placeholder. Personalize com seus hobbies!

### 9. Contato

```javascript
contact: {
    methods: [
        { key: 'email', label: 'Email', value: 'natan.hesp@gmail.com', href: 'mailto:natan.hesp@gmail.com' },
        { key: 'linkedin', label: 'LinkedIn', value: '...', href: 'https://...' },
        { key: 'github', label: 'GitHub', value: '...', href: 'https://...' }
    ]
}
```

> O formulário de contato é estático (sem backend): ao enviar, ele abre o app de email do visitante com a mensagem pronta. É a forma mais simples e gratuita de funcionar no S3/OCI.

## 🔄 Fluxo de Atualização

```
Editar data.js → Salvar → Recarregar página → Ver mudanças
```

## 🎨 Personalização Visual

- **Cores**: edite as variáveis CSS no topo de [styles.css](styles.css) (bloco `:root`). O site já tem modo claro/escuro automático (`prefers-color-scheme`).
- **Fonte**: troque o link do Google Fonts em [index.html](index.html) e a variável `font-family` em `styles.css`.
- **Animações**: os elementos usam a classe `.reveal` (aparecem ao rolar). Ajuste em `styles.css`.
- **Partículas do Hero**: o canvas com pontos conectados que reagem ao mouse usa a cor `--accent` automaticamente. A quantidade se adapta ao tamanho da tela. Para desativar, remova o `<canvas class="hero-particles">` em [index.html](index.html).
- **Spotlight dos cards**: o brilho que segue o mouse nos cards usa `--accent-glow` (em `:root` no `styles.css`). Ajuste o tamanho no `radial-gradient` de `.interactive-card::before`.
- **Botões magnéticos**: os botões seguem levemente o mouse. Intensidade em `script.js` (valores `0.22` e `0.35` na seção Magnetic buttons).

> Todas as animações respeitam `prefers-reduced-motion` (usuários que desativam animações no sistema veem o site estático).

## ❓ Solução de Problemas

**Mudanças não aparecem:**
- Salve o arquivo e recarregue com Ctrl+F5 (limpar cache)

**Erro de sintaxe:**
- Verifique vírgulas entre objetos `{}` e itens de array `[]`
- Strings entre aspas simples `'texto'`

**Tradução não funciona:**
- Verifique se `pt` e `en` estão presentes nos textos
- Chaves estáticas devem existir em `i18n.pt` E `i18n.en`

## 📚 Arquivos

- **[data.js](data.js)** - TODO o conteúdo do site (EDITE AQUI)
- **[i18n.js](i18n.js)** - Motor de tradução + renderização das seções
- **[index.html](index.html)** - Estrutura da página (raramente precisa editar)
- **[styles.css](styles.css)** - Estilos visuais
- **[script.js](script.js)** - Interações (menu, digitação, animações)
- **[resume.pdf](resume.pdf)** - Seu currículo (substitua pelo real!)
