# React TypeScript Starter

A modern React application with TypeScript, ESLint, Prettier, and other essential tools pre-configured for enterprise-level development.

## 🚀 Features

- ⚛️ React 19 with TypeScript
- 🛠️ ESLint with TypeScript support
- 💅 Prettier for code formatting
- 🔄 Import/export sorting
- 🐶 Husky pre-commit hooks
- 📦 Common utilities included (axios, lodash, classnames, date-fns)

## 📦 Project Structure

```
src/
├── app/
│   ├── core/           # Singleton services, guards, interceptors
│   ├── features/       # Feature modules (each feature is self-contained)
│   ├── shared/         # Shared components, directives, pipes
│   ├── app.component.jsx
│   ├── app.routes.jsx
│   └── app.module.jsx
├── assets/            # Static assets (images, fonts, etc.)
├── environments/      # Environment configurations
├── styles/            # Global styles and themes
└── utils/             # Utility functions and helpers
```

## 🛠 Development Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Run tests**
   ```bash
   npm test
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🧰 Available Scripts

In the project directory, you can run:

| Script          | Description                                      |
|-----------------|--------------------------------------------------|
| `npm start`     | Runs the app in development mode                 |
| `npm test`      | Launches the test runner                        |
| `npm run build` | Builds the app for production                   |
| `npm run lint`  | Runs ESLint on your code                        |
| `npm run format`| Formats your code using Prettier                |
| `npm run type-check` | Checks TypeScript types                     |
| `npm run prepare` | Sets up Git hooks (run once after cloning)     |

## 🔧 Code Quality

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Husky** for Git hooks
- **lint-staged** for running linters on git staged files

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Create React App](https://github.com/facebook/create-react-app)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
