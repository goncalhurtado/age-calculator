# Age Wizard🧙🏻‍♂️

This simple and charming tool allows users to effortlessly determine their age with precision. Built with TypeScript

## Run
`npm run dev`
Initiates the application in development mode. Visit http://localhost:5173 in your browser to view the real-time application. The page will automatically refresh upon changes in the source code. Any style errors will also be displayed in the console.

`npm run build`
Builds the application for production in the build folder. This action optimizes the build for better performance by minimizing files. Once completed, your application will be ready for deployment in production.

`npm run lint`
Runs ESLint to search and display style errors in your JavaScript and JSX files. This command uses the configuration defined in your project and provides an error report without allowing warnings in your code (--max-warnings 0).

`npm run preview`
Initiates a preview of the application using Vite. This functionality enables you to visualize your application in a development environment and conduct testing.

## Technologies
* [**React**](https://es.react.dev/) - A JavaScript library for building user interfaces.
* [**Typescript**](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## Deploy on Netlify
* [**Age Wizard**](https://age-wizard.netlify.app/)

## Autor
Goncal Hurtado [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://goncalhurtado.netlify.app/) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/goncalhurtado/)


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
