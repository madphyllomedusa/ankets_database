# Анкеты — База данных анкет

Веб-приложение для хранения и управления анкетами. Построено на React + TypeScript + Vite с архитектурой FSD.

## Стек

| Технология | Назначение |
|---|---|
| React 19 + TypeScript | UI |
| Vite 8 | Сборка и dev-сервер |
| React Router 7 | Маршрутизация |
| SCSS Modules | Стили (вложенные классы, BEM) |
| JSON Server | REST API для разработки |

## Структура проекта

```
src/
├── app/          # Точка входа, глобальные стили, роутер
├── pages/        # Страницы (FSD)
│   └── home/     # Главная страница — список групп анкет
└── assets/       # Шрифты, иконки
db.json           # База данных JSON Server
```

## Запуск

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Запустить JSON Server (порт 3001)
npm run server
```

## API

JSON Server на `http://localhost:3001`.

| Метод | Эндпоинт | Описание |
|---|---|---|
| GET | `/ankety` | Список всех анкет |
| POST | `/ankety` | Создать анкету |
| PUT | `/ankety/:id` | Обновить анкету |
| DELETE | `/ankety/:id` | Удалить анкету |

## Сборка

```bash
npm run build
```