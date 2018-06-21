/**
 * Module of admin part and general part
 * @module ModuleAdmin
 */

import { Module } from "cerebral";
import * as sequences from "../app/sequences";
import FormsProvider from '@cerebral/forms';
import { state } from 'cerebral/tags';

import { longPromise } from "../app/providers";
import { authenticate } from '../app/factories';
import router from '../app/router';
// import publicModule from '../app/publicModule';

export default Module({
  state: {
    currentPage: null,
    isApplicationLoaded: false,
    user: null,
    loginError: false,
    env: {
      login: {
        edit: null,
      },
    },
    forms: {
      login: {
        name: {
          value: '',
          defaultValue: '',
        },
        pass: {
          value: '',
          defaultValue: '',
        },
      },
      // libraries: {
      //   id: { value: '', defaultValue: '' },
      //   name: { value: '', isRequired: true },
      //   address: { value: '', isRequired: true },
      //   lat: { value: '', validationRules: [/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,20}$/] },
      //   lng: { value: '', validationRules: [/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,20}$/] },
      //   isNew: { value: true, defaultValue: true },
      // },
      // published: {
      //   id: { value: '', defaultValue: '', isRequired: true, validationRules: ['existance:published']},
      //   author: { value: '', defaultValue: '', isRequired: true },
      //   name: { value: '', defaultValue: '', isRequired: true  },
      //   year: { value: '', defaultValue: '' , validationRules: [/^1[5-9]\d\d|20[0-2]\d$/] },
      //   image: { value: '', defaultValue: '' },
      //   isNew: { value: true, defaultValue: true },
      // },
      // book: {
      //   id: { defaultValue: '' },
      //   isbn: { defaultValue: '' },
      //   timeout: { defaultValue: '' },
      //   isNew: { defaultValue: true },
      // },
    },
    // delete: {
    //   entity: null,
    //   id: null,
    //   name: '',
    // },
    data: {
    }
  },
  signals: {
    rootRouted: sequences.rootRouted,
    adminRouted: authenticate(sequences.adminRouted),
    loginRouted: sequences.loginRouted,

    applicationLoaded: sequences.applicationLoaded,
    showModal: sequences.showModal,
    updateField: sequences.updateField,
    submitLogin: sequences.submitLogin,
    openLogin: sequences.openLogin,
    closeLogin: sequences.closeLogin,
    logout: sequences.logout,
    autologin: sequences.autologin,
    loadFile: sequences.loadFile,
    downloadFile: sequences.downloadFile,
    deleteEntity: sequences.deleteEntity,
    deleteEntityConfirm: sequences.deleteEntityConfirm,
    editEntity: sequences.editEntity,
    resetEditForm: sequences.resetEditForm,
    postEntity: sequences.postEntity,
  },
  providers: {
    longPromise,
    form: FormsProvider({
      // Add additional rules
      rules: {
        // existance(value, arg, get) {
        //   const arr = get(state`data.${arg}`);
        //   const isNew = get(state`forms.${arg}.isNew.value`);
        //   return !(isNew && arr.some(item => removeDashes(item.id) === removeDashes(value)));
        // },
      },

      // errorMessage property added to field when invalid with the following rules
      errorMessages: {
        existance() {
          return 'Такий ідентифікатор вже є в системі';
        },
        isRequired() {
          return 'Поле має бути заповненим';
        },
        regexp() {
          return 'Значення не відповідає формату';
        }
      }
    }),
  },
  modules: {
    router,
    // publicModule,
  },
});
