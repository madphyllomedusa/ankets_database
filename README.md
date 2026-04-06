# Анкеты — База данных анкет

Веб-приложение для хранения и управления анкетами. Построено на React + TypeScript + Vite с архитектурой FSD.

## Стек

- React 19 + TypeScript
- Vite 8
- React Router 7
- SCSS Modules
- JSON Server

## Структура проекта

```
src/
├── app/          # Глобальный App, глобальные стили, роутер
├── pages/        # Страницы
│   └── home/     # Главная страница — список групп анкет
└── assets/       # Шрифты, иконки
db.json           # JSON Server
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

## Сборка

```bash
npm run build
```
