/**
 * Sequences for admin part
 * @module SequencesAdmin
 */

import { set, when, wait } from "cerebral/operators";
import { resetForm } from '@cerebral/forms/operators';
import { redirect, goTo } from '@cerebral/router/operators';
import { props, state } from "cerebral/tags";
import * as factories from "./factories";
import * as actions from "./actions";
import { pageTransitionDelay } from './constants';

/* Routes */
export const rootRouted = factories.openRoute('root');
export const gameRouted = factories.openRoute('game');
export const resultsRouted = factories.openRoute('results');

/* Marks application as loaded */
export const applicationLoaded = [
  set(state`isApplicationLoaded`, true),
  wait(pageTransitionDelay),
  when(state`initialPage`),
  {
    true: set(state`currentPage`, state`initialPage`),
    false: [],
  },
];

export const startGame = [
  goTo('/game'),
];

/* Form processing */
export const showModal = set(state`env.${props`name`}.edit`, props`show`);

export const updateField = [
  set(state`${props`path`}`, props`value`),
];

export const resetEditForm = resetForm(state`${props`form`}`);

/* File signals */
export const downloadFile = actions.downloadFile;
export const loadFile = actions.loadFile;

/* Item selection */
export const selectLibrary = [
  set(state`env.libraries.selected`, props`id`),
  set(state`env.books.selected`, null),
];
export const selectBook = set(state`env.books.selected`, props`id`);
export const selectPublished = set(state`env.published.selected`, props`id`);

/* Delete items */
export const deleteEntity = [
  set(state`delete.entity`, props`entity`),
  set(state`delete.id`, props`id`),
  set(state`delete.name`, props`name`),
];
export const deleteEntityConfirm = actions.deleteEntityConfirm;

/* Item editing and creating */
export const editEntity = [
  set(state`env.${props`entity`}.edit`, props`id`),
];
export const postEntity = actions.postEntity;

