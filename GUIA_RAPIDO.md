# 🎯 Guia Rápido - Primeiros Passos

## ✅ Checklist para deixar o site pronto

- [ ] Abra [data.js](data.js) e confira `profile` (nome, email, LinkedIn, GitHub)
- [ ] Substitua `images/profile.svg` pela sua foto real (e atualize `profile.photo`)
- [ ] Substitua [resume.pdf](resume.pdf) (placeholder) pelo seu currículo real
- [ ] Edite `hero.description` e as palavras do efeito de digitação (`hero.roles.*`)
- [ ] Revise `skills` (categorias e itens, em pt e en)
- [ ] Revise `experience` (cargos, empresas, períodos, descrições)
- [ ] Revise `domain` (especialidades)
- [ ] Substitua as **certificações placeholder** pelas suas reais
- [ ] Revise `projects` e adicione screenshots em `images/projects/`
- [ ] Personalize `beyond` com seus hobbies reais
- [ ] Teste a troca de idioma 🇧🇷 PT / 🇺🇸 EN
- [ ] Teste no celular (menu hambúrguer)

## 🖥️ Testando localmente

Basta abrir `index.html` no navegador (clique duplo no arquivo).

Ou, se preferir um servidor local:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Depois acesse `http://localhost:8000`.

## ☁️ Publicando de graça

### AWS S3 (opção citada)
1. Crie um bucket com o mesmo nome do domínio (ex: `natanhespanhol.com`)
2. Ative **Static website hosting** e **Block all public access** desligado (ou use CloudFront)
3. Envie os arquivos: `index.html`, `data.js`, `i18n.js`, `script.js`, `styles.css`, `resume.pdf`, pasta `images/`
4. Importante: defina `Content-Type` correto (o console da AWS faz isso automaticamente no upload)

### Oracle OCI (máquina grátis)
1. Crie a VM Always Free (Ubuntu)
2. `sudo apt install nginx`
3. Copie os arquivos para `/var/www/html`
4. Libere a porta 80 no Security List

### Alternativas ainda mais simples
- **GitHub Pages**: grátis, só push no repositório
- **Cloudflare Pages**: grátis, deploy arrastando a pasta
- **Netlify**: grátis, deploy arrastando a pasta

## 💡 Estrutura dos arquivos

```
portfolio/
├── index.html          # Estrutura da página
├── data.js             # TODO o conteúdo (edite aqui!)
├── i18n.js             # Motor de tradução PT/EN
├── script.js           # Interações e animações
├── styles.css          # Estilos e cores
├── resume.pdf          # Seu currículo em PDF
├── images/
│   ├── profile.svg     # Sua foto (substitua!)
│   └── projects/       # Screenshots dos projetos
├── EDITAR_CONTEUDO.md  # Guia completo de edição
├── GUIA_RAPIDO.md      # Este arquivo
└── I18N.md             # Como funciona o PT/EN
```

## 🆘 Problemas comuns

| Problema | Solução |
|---|---|
| Mudanças não aparecem | Ctrl+F5 para limpar cache |
| Seção não renderiza | Verifique vírgulas no final dos objetos em `data.js` |
| Imagem não aparece | Confira o caminho (relativo à raiz do site) |
| Certificado placeholder visível | Edite ou remova os itens em `certifications` |
