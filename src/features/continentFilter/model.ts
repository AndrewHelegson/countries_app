import { createStore, createEvent, sample } from 'effector';
import { setPage } from '../../features/Pagination/model';

export const CONTINENTS = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];

export const setContinent = createEvent<string | null>();
export const resetContinent = createEvent();

export const $selectedContinent = createStore<string | null>(null)
  .on(setContinent, (_, value) => value)
  .reset(resetContinent);

sample({
  clock: setContinent,
  target: setPage.prepend(() => 1),
});
