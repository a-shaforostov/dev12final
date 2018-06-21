/**
 * Sequences for admin part
 * @module SequencesAdmin
 */

import { set, when, wait } from "cerebral/operators";
import { resetForm } from '@cerebral/forms/operators';
import { redirect } from '@cerebral/router/operators';
import { props, state } from "cerebral/tags";
import * as factories from "./factories";
import * as actions from "./actions";
import { pageTransitionDelay } from './constants';

/* Routes */
export const rootRouted = factories.openRoute('root');
export const adminRouted = factories.openRoute('admin');
export const secondRouted = factories.openRoute('second');

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

/* Form processing */
export const showModal = set(state`env.${props`name`}.edit`, props`show`);

export const updateField = [
  set(state`forms.${props`form`}.${props`name`}.value`, props`value`),
  set(state`forms.${props`form`}.${props`name`}.isPristine`, false),
];

export const resetEditForm = resetForm(state`${props`form`}`);

/* Login signals */
export const submitLogin = actions.submitLogin;

export const openLogin = [
  set(state`env.login.edit`, true),
  resetForm(state`forms.login`),
];

export const closeLogin = [
  set(state`env.login.edit`, false),
  set(state`loginError`, false),
  ({ longPromise }) => longPromise.rejectPromise(),
];
export const logout = [
  set(state`user`, null),
  actions.logout,
  redirect('/'),
];

export const autologin = [
  actions.autologin,
  ({props}) => console.log('props', props),

  when(props`notFound`),
  {
    true: [
      when(props`silent`),
      {
        true: redirect('/'),
        false: openLogin,
      },
    ],
    false: [],
  },
];

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

