/**
 * @module providers
 */

import { Provider } from "cerebral";

let ggg;

/**
 * Gives service for long leaving of promise to process delete confirmation.<br>
 * Promise is created when user wants to delete item.<br>
 * Promise is resolved or rejected as result of user confirmation.<br>
 * @type {Provider}
 */
export const longPromise = Provider({
  createPromise() {
    return new Promise((resolve, reject) => ggg = { resolve, reject });
  },

  resolvePromise(arg) {
    ggg && ggg.resolve && ggg.resolve(arg);
  },

  rejectPromise(arg) {
    ggg && ggg.reject && ggg.reject(arg);
  }
});
