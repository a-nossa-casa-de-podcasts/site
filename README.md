<img src="https://raw.githubusercontent.com/a-nossa-casa-de-podcasts/site/refs/heads/main/public/img/logo-horizontal.svg" alt="A Nossa Casa de Podcasts" width="300">

Este é um projeto desenvolvido com [Next.js](https://nextjs.org/) para ser o front da plataforma "Nossa Casa de Podcasts".
---

## O que está incluído?

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript para tipagem estática.
- [Next.js](https://nextjs.org/) - Framework React para aplicações web.
- [Styled Components](https://styled-components.com/) - Estilização baseada em componentes.
- [Jest](https://jestjs.io/) - Framework de testes.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - Biblioteca para testes de componentes React.
- [Storybook](https://storybook.js.org/) - Ferramenta para desenvolvimento de componentes isolados.
- [Eslint](https://eslint.org/) - Ferramenta para análise de código.
- [Prettier](https://prettier.io/) - Ferramenta para formatação de código.
- [Husky](https://github.com/typicode/husky) - Ferramenta para hooks de Git.
- [Mailchimp](https://mailchimp.com/) - Serviço de marketing por e-mail.
- [Nodemailer](https://nodemailer.com/) - Biblioteca para envio de e-mails.

---

## Funcionalidades

- Front-end responsivo para apresentar os podcasts e artigos
- Integração com serviços de e-mail (Mailchimp e Nodemailer).
- Interface estilizada com Styled Components.
- Testes automatizados com Jest e React Testing Library.
- Desenvolvimento de componentes isolados com Storybook.

---

### Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passo a Passo

1. Clone o repositório:

 ```bash
 git clone https://github.com/seu-usuario/seu-repositorio.git
 cd seu-repositorio
 ```

2. Instale as dependências:

Instale todas as dependências necessárias para o projeto com o comando:

  ```bash
  npm install
  # ou
  yarn
  ```

3. Inicie o servidor de desenvolvimento:

Inicie o servidor de desenvolvimento local com o comando:

  ```bash
  npm run dev
  # ou
  yarn dev
  ```

4. Acesse o projeto no navegador:

Abra o navegador e acesse http://localhost:3000 para visualizar o projeto em execução.

5. Edite o projeto:

As alterações serão refletidas automaticamente no navegador.

Comandos
- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook


Deploy
O projeto pode ser facilmente implantado na [Vercel](https://vercel.app/). Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.
