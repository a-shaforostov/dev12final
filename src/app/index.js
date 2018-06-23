/**
 * Module of admin part and general part
 * @module ModuleAdmin
 */

import { Module } from "cerebral";
import * as sequences from "./sequences";

import router from './router';

export default Module({
  state: {
    currentPage: null,
    isApplicationLoaded: false,

    window: { // параметри вікна
      width: 440,
      height: 440*9,
      koef: 440/500,
    },
    field: { // сантиметри
      height: 4500,
      width: 500,
      home: {
        top: 4500-512,
        left: 250,
        diam: 366,
        smallDiam: 150,
        color1: 'rgba(0, 0, 128, .5)',
        color2: 'rgba(128, 0, 0, .5)',
        width: 50,
      },
      hol: {
        pos: 512+640,
        width: 20,
      },
    },

    turnParams: {
      angle: 0,
      power: 100,
      rotation: 0,
    },

    data: {
      users: [
        {
          type: 'Гравець 1',
          name: 'Сергій',
          turns: []
        },
        {
          type: 'Гравець 2',
          name: 'Олександр',
        },
        {
          type: 'Комп\'ютер',
          name: 'Штучний інтелект',
        },
      ],
      player2Index: '1',
      game: {
        inGame: false,
        gameOver: false,
        gameResult: [],
        gameWinner: null,

        currentEnd: 1,

        currentTurn: 1,
        currentTeam: 0,
        teams: [
          {
            currentTurn: 1,
            turns: [null, null, null, null, null, null, null, null],
            ends: [3, 0, null, null, null, null, null, null, null, null],
          },
          {
            currentTurn: 1,
            turns: [null, null, null, null, null, null, null, null],
            ends: [0, 2, null, null, null, null, null, null, null, null],
          },
        ],

        balls: [],
        currentBall: null,
      },
    }
  },
  signals: {
    rootRouted: sequences.rootRouted, // Початок гри
    gameRouted: sequences.gameRouted, // Гра
    resultsRouted: sequences.resultsRouted, // Результати

    applicationLoaded: sequences.applicationLoaded,
    updateField: sequences.updateField,
    updateName: sequences.updateName,
    newGame: sequences.newGame,
    newTurn: sequences.newTurn,
    start: sequences.start,

    resetEditForm: sequences.resetEditForm,
  },
  providers: {
  },
  modules: {
    router,
  },
});
