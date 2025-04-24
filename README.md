
# 📁 Projeto Marina – Automação com Gulp

Este projeto usa Gulp para automatizar tarefas comuns de desenvolvimento front-end como compilação de SCSS, minificação e ofuscação de JavaScript, e compressão de imagens.

---

## ⚙️ Tecnologias e Plugins Utilizados

- **[Gulp](https://gulpjs.com/)** – Orquestrador de tarefas
- **gulp-sass** – Compila arquivos `.scss` para `.css`
- **gulp-sourcemaps** – Gera mapas de origem para facilitar o debug
- **gulp-uglify** – Minifica arquivos JavaScript
- **gulp-javascript-obfuscator** – Ofusca JavaScript
- **gulp-imagemin** (v7.1.0) – Otimiza imagens
- **sass** – Engine de compilação SCSS

---

## 📦 Instalação

1. Clone o projeto:

```bash
git clone ...
cd projeto-marina
```

2. Instale as dependências:

```bash
npm install
```

---

## 🚀 Rodando a automação

Execute:

```bash
npm run gulp
```

O Gulp vai:

- Monitorar alterações em:
  - `source/styles/*.scss` → Compilar e minificar para `build/styles`
  - `source/scripts/*.js` → Minificar + ofuscar para `build/scripts`
  - `source/imagens/*` → Comprimir e copiar para `build/imagens`

---

## 📂 Estrutura de Pastas

```
Projeto-Marina/
├── build/
│   ├── styles/
│   ├── scripts/
│   └── imagens/
├── source/
│   ├── styles/
│   ├── scripts/
│   └── imagens/
├── gulpfile.js
└── package.json
```

---

## 💡 Dicas

- Sempre reinicie o Gulp após alterar o `gulpfile.js`.
- Quer mais performance? Podemos incluir:
  - Cache para imagens e scripts
  - Live reload com BrowserSync
  - Suporte a WebP/AVIF
  - Separação de ambiente de produção/desenvolvimento

---

## 👨‍💻 Autor

Feito por [Elias Lima Leite]
