/**
 * Module of admin part and general part
 * @module ModuleAdmin
 */

import { Module } from "cerebral";
import * as sequences from "./sequences";
import FormsProvider from '@cerebral/forms';
import { state } from 'cerebral/tags';

import { hashProvider, longPromise } from "./providers";
import { authenticate } from './factories';
import router from './router';

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
    },
    delete: {
      entity: null,
      id: null,
      name: '',
    },
    users: {
      'test@gmail.com': {
        id: 'test@gmail.com',
        name: 'Тарас Шевченко',
        pass: 'e42776aa51230617b6ac2d4690d78771d26acd39',
      },
      'test2@gmail.com': {
        id: 'test2@gmail.com',
        name: 'Леся Українка',
        pass: 'e42776aa51230617b6ac2d4690d78771d26acd39',
      },
    },
    data: {
    }
  },
  signals: {
    rootRouted: sequences.rootRouted,
    adminRouted: authenticate(sequences.adminRouted),
    secondRouted: authenticate(sequences.secondRouted),

    submitLogin: sequences.submitLogin,
    openLogin: sequences.openLogin,
    closeLogin: sequences.closeLogin,
    logout: sequences.logout,
    autologin: sequences.autologin,

    applicationLoaded: sequences.applicationLoaded,
    showModal: sequences.showModal,
    updateField: sequences.updateField,
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
    hash: hashProvider,
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
  },
});
