import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app/App';
import { withProviders } from './app/providers/with-providers';
import './app/styles/index.css'; // Tailwind + глобальные стили

import { initAuth } from './entities/session/init';

// Инициализируем авторизацию (читаем токен из localStorage)
initAuth();

// Оборачиваем приложение всеми провайдерами (Apollo, Router, Theme и т.д.)
const Root = withProviders(() => <App />);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
