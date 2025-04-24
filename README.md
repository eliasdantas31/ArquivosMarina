
# 📁 Projeto Marina

Este projeto usa Gulp para automatizar tarefas comuns de desenvolvimento front-end como compilação de SCSS, minificação e ofuscação de JavaScript, e compressão de imagens.
Utiliza também de jQuery e Bootstrap para levar o front end do projeto ao máximo de sua performasse.

---

## ⚙️ Tecnologias css/js e Plugins Utilizados

- **[Bootstrap](https://getbootstrap.com/)** – biblioteca `css`
- **[jQuery](https://jquery.com/)** – biblioteca `JavaScript`
- **jQuery Validation** – Facilita a validação simples de formulários do lado do cliente
- **jQuery Mask Plugin** – Aplica marcaras a campos input

## ⚙️ Tecnologias gulp/scss e Plugins Utilizados

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
git clone https://github.com/eliasdantas31/ArquivosMarina.git
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
│   ├── imagens/.{png,jpg,jpeg,gif,svg}
│   ├── lib/bootstrap.budle.min.js, bootstrap.min.css
│   ├── scripts/main.js, jquery.mask.min.js, jquery.validate.min.js, messages_pt_BR.min.js
│   ├── styles/main.css
│   │   └── maps/main.css.map
│   └──index.html
├── source/
│   ├── imagens/.{png,jpg,jpeg,gif,svg}
│   ├── scripts/main.js
│   └── styles/main.scss
│       └── config/reset.scss, variaveis.scss
├── gulpfile.js
└── package.json
```

---

## 💡 Dicas

- Sempre reinicie o Gulp após alterar o `gulpfile.js`.
- Evitar mexer em `gulpfiles.js`, `package-lock.json`, `package.json`. 

---

## 👨‍💻 Autor

Feito por [Elias Lima Leite]
