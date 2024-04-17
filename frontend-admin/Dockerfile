# Используйте официальный образ node как базовый
FROM node:16-alpine

# Установите рабочий каталог в контейнере
WORKDIR /app

# Скопируйте файлы проекта в контейнер
COPY ./frontend-admin/package*.json ./

# Установка зависимостей
RUN npm install

EXPOSE 8081

# Копируйте остальные файлы проекта, включая shared
COPY ./frontend-admin .
COPY ./shared ./shared

# Запустите приложение
CMD ["npm", "run", "dev"]