# Portfólio Pessoal — Guilherme Souza

Página de portfólio pessoal desenvolvida com **React + Vite**, apresentando quem eu sou, minhas habilidades, interesses e projetos. O visual segue um estilo de vidro (*glassmorphism*), com fundo em degradê e elementos translúcidos.

> Projeto desenvolvido como atividade prática de React, aplicando componentes, props, estado com `useState` e estilização com CSS puro.

## Funcionalidades

- **Apresentação:** nome, área de atuação, breve descrição e foto de perfil.
- **Habilidades:** tecnologias organizadas em abas (Linguagens, Frameworks e Ferramentas), alternadas com `useState`.
- **Sobre mim:** interesses e objetivos profissionais.
- **Projetos e experiências:** cards reutilizáveis que recebem dados via `props` e exibem mais detalhes ao clicar, também com `useState`.
- **Contato:** links para e-mail, LinkedIn e GitHub.
- **Layout responsivo:** adaptado para desktop e celular.

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (ES6+)
- HTML5
- CSS3 (variáveis, flexbox, grid, `backdrop-filter`)

## Conceitos aplicados

- Componentização e reaproveitamento de interface
- Comunicação entre componentes com `props`
- Gerenciamento de estado com `useState`
- Renderização de listas com `.map()`
- Renderização condicional
- Dados separados da interface (`src/data`)
- Estilização própria, sem bibliotecas de CSS

## Estrutura do projeto

```
meu-projeto/
├── public/
│   └── foto.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Como executar

**Pré-requisito:** [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git

# 2. Entre na pasta do projeto
cd NOME-DO-REPOSITORIO

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Testa localmente a versão de produção |

## Como personalizar

- **Projetos:** edite `src/data/projects.js`.
- **Habilidades:** edite `src/data/skills.js`.
- **Cores e visual:** altere as variáveis no `:root` do `src/index.css`.
- **Foto:** substitua o arquivo `public/foto.jpg`.

## Autor

**Guilherme Souza**
Suporte técnico de T.I.

- GitHub: @guiisouzax
- LinkedIn: (https://www.linkedin.com/in/guilherme-souza-320483240/))
- E-mail: guii_silvasouza@outlook.com
