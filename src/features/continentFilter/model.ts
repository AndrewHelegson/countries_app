import { createStore, createEvent, sample } from 'effector';
import { setPage } from '../../features/Pagination/model';

// Список всех возможных континентов
export const CONTINENTS = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];

export const setContinent = createEvent<string | null>();
export const resetContinent = createEvent();

export const $selectedContinent = createStore<string | null>(null)
  .on(setContinent, (_, value) => value)
  .reset(resetContinent);

// 🆕 Сброс страницы при смене фильтра
sample({
  clock: setContinent,
  target: setPage.prepend(() => 1),
});
