import { createStore, createEvent, createEffect } from 'effector';
import { setAuth } from '../../entities/session/model';

export const setEmail = createEvent<string>();
export const setPassword = createEvent<string>();
export const resetForm = createEvent();

export const $email = createStore('')
  .on(setEmail, (_, val) => val)
  .reset(resetForm);

export const $password = createStore('')
  .on(setPassword, (_, val) => val)
  .reset(resetForm);

// Эффект логина
export const loginFx = createEffect<
  { email: string; password: string },
  string,
  Error
>(async ({ email, password }) => {
  // эмуляция запроса (можно заменить на fetch или axios)
  await new Promise((r) => setTimeout(r, 800));

  if (email === 'admin@example.com' && password === '123456') {
    localStorage.setItem('token', 'fake-token');
    return 'ok';
  }

  throw new Error('Неверный email или пароль');
});

loginFx.done.watch(() => {
  setAuth(true);
});

export const $loginError = createStore<string | null>(null)
  .on(loginFx.failData, (_, error) => error.message)
  .reset(loginFx, resetForm);
