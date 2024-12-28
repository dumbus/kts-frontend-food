## kts-frontend-food - Интерактивный список рецептов

![react version](https://img.shields.io/badge/react-18.3.1-brightgreen)
![react-router-dom version](https://img.shields.io/badge/react--router--dom-6-brightgreen)
![react-scripts version](https://img.shields.io/badge/react--scripts-5.0.1-brightgreen)
![sass version](https://img.shields.io/badge/sass-1.80.6-brightgreen)
![mobx version](https://img.shields.io/badge/mobx-6.13.5-brightgreen)
![eslint version](https://img.shields.io/badge/eslint-8.56.0-brightgreen)
![prettier version](https://img.shields.io/badge/prettier-3.3.3-brightgreen)
![vite version](https://img.shields.io/badge/vite-5.4.10-brightgreen)

## Использованные технологии и инструменты

1. [React](https://react.dev/)
2. [React Router](https://reactrouter.com/en/main)
3. [SCSS](https://sass-lang.com/)
4. [MobX](https://mobx.js.org/)
5. [ESLint](https://eslint.org/)
6. [Prettier](https://prettier.io/)
7. [Vite](https://vite.dev/)

## Что реализовано в приложении

1. Получение данных с помощью [Spoonacular API](https://spoonacular.com/food-api/docs)

2. Список рецептов (URL: `/recipes`):

- Содержит список рецептов с пагинацией
- Возможен поиск рецептов по названию
- Возможна фильтрация рецептов типу блюда
- Можно добавлять рецепты в избранное с помощью кнопки `Save` (до 12 рецептов)
- Возможен переход на страницу отдельного блюда с помощью клика на карточку

3. Избранные рецепты (`/recipes/favorites`):

- Содержит список рецептов, добавленных в избранное
- Рецепты можно удалять из избранного с помощью кнопки `Unsave`
- Возможен переход на страницу отдельного блюда с помощью клика на карточку

4. Страница отдельного рецепта (URL: `/recipes/:id`):

- При нажатии на карточку в списке рецептов `/recipes` происходит переход на страницу, содержащую подробную информацию о выбранном рецепте

5. Страница выбора случайного рецепта (URL: `/recipes/random`):

- При нажатии на соответствующую кнопку в меню сайта отображается страница со случайным рецептом

6. Предусмотрены компоненты для отображения состояния загрузки и ошибки

7. Реализована адаптивная вёрстка вплоть до экранов мобильных устройств шириной в 320 пикселей

8. Для удобства разработки у приложения есть 2 режима, которые переключаются в файле `src/config/appConfig.ts` (типы данных 'mock' и 'api' соответственно)

## Как посмотреть на работу приложения

1. Сайт развёрнут на gh-pages и доступен по адресу

```
https://dumbus.github.io/kts-frontend-food/
```

2. Развернуть приложение локально (см. далее)

## Как развернуть приложение локально

1. Скопировать репозиторий:

```
git clone https://github.com/dumbus/kts-frontend-food.git
```

2. Поменять текущую папку:

```
cd kts-frontend-food
```

3. Установить зависимости:

```
yarn install
```

4. Запустить приложение:

```
yarn dev
```

5. Открыть приложение в браузере:

```
http://localhost:{port}
```

> По умолчанию port = 5173
