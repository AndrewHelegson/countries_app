// src/entities/session/init.ts
import { setAuth } from './model';

export const initAuth = () => {
  const token = localStorage.getItem('token');
  if (token) {
    setAuth(true);
  }
};
