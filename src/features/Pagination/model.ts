import { createStore, createEvent } from 'effector';

export const setPage = createEvent<number>();

export const $currentPage = createStore(1).on(setPage, (_, page) => page);

export const ITEMS_PER_PAGE = 10;
