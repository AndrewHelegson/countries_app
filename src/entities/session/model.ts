import { createStore, createEvent } from 'effector';

export const setAuth = createEvent<boolean>();
export const logout = createEvent();

export const $isAuthenticated = createStore(false)
  .on(setAuth, (_, auth) => auth)
  .reset(logout);

logout.watch(() => {
  localStorage.removeItem('token');
});
