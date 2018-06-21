/**
 * Controller for operate application
 * @module controller
 */

import { Controller } from 'cerebral';
import Devtools from 'cerebral/devtools';

import app from './modules/index';

const controller = Controller(app, {
  // devtools: null,
  devtools: navigator.userAgent.toLowerCase().includes('chrome')
    ? Devtools({
      host: 'localhost:8686',
      bigComponentsWarning: 20,
    })
    : null
});

// try to login silently (w/o login form)
const autologin = controller.getSignal('autologin');
autologin({ silent: true });

export default controller;