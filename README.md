<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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
 -->
 
 # Wowvendor Products

## Содержит
- [x] [webpack](https://webpack.js.org/)
- [x] [gulp](https://gulpjs.com/)
- [x] [babel](https://babeljs.io/)
- [x] [sass](https://sass-lang.com/documentation/)

## Setup
`$ npm install`
## Структура
`./src` - рабочая директория. Все исходные файлы лежат здесь
`./dist` - директория, в которую попадает собранный проект. Сюда смотрит локальный сервер по адресу `http://localhost:3000`
`./gulp-task` - файлы, отвечающие за сборку проекта
`./node-modules` - node пакеты (https://docs.npmjs.com/about-packages-and-modules)
### Ассеты
`./src/assets` - статичные файлы
`./src/assets/fonts` - шрифты
`./src/assets/icons` - svg иконки. Cобираются в спрайт `dist/assets/icons/sprite.svg`
`./src/assets/img` - растровые изображения(jpg, png, webp)
### Компоненты
`./src/components/` - директория с компонентами, из которых собирается итоговая страница. 
`./src/components/component-name/component-name.html` - файл с разметкой компонента. Подключается в `src/index.js` следующим образом: `@@include("./components/compnonent-name/compnonent-name.html")`
`./src/components/component-name/component-name.scss` - файл со стилями компонента. Подключается в `src/components/components.scss.scss` следующим образом: `@import 'component-name/component-name';`
### Скрипты
`./src/js/scripts.js` - весь js тут. Рекомендуется опираться на ES6+ стандарты. Собранный, минифицированный файл попадает в `./dist/js/scripts.min.js`
### Файлы с побочными стилями
`./src/styles/scss/helpers/_variables.scss` - здесь хранятся переменные шрифтов и цветов, для использования в scss-файлах (https://sass-lang.com/documentation/variables)
`./src/styles/scss/helpers/_mixins.scss` - здесь лежат миксины (https://sass-lang.com/documentation/at-rules/mixin)
`./src/styles/scss/helpers/_variables.scss` - здесь хранятся значения ширины основных используемых устройств и миксины для медиа-запросов
`./src/styles/scss/_btn.scss` - тут описаны компоненты кнопок
`./src/styles/scss/_link.scss` - тут описаны компоненты ссылок
`./src/styles/scss/styles.scss` - файл, в который импортируются стили компонентов, побочные файлы
## Запуск
`npm run build:build` - сборка проекта
`npm run build:run` - сборка проекта и дальнейший запуск на локальном сервере (http://localhost:3000)


