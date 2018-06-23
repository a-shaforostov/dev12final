/**
 * Module of admin part and general part
 * @module ModuleAdmin
 */

import { Module } from "cerebral";
import * as sequences from "./sequences";
import { state } from 'cerebral/tags';

import router from './router';

const koef = 440/500;

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

    teamMates: [
      'скип',
      'вице-скип',
      'первый',
      'второй',
    ],

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
      player2Index: 1,
      game: {
        currentTeam: 0,
        currentEnd: 1,
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
        ]
      }
    }
  },
  signals: {
    rootRouted: sequences.rootRouted, // Початок гри
    gameRouted: sequences.gameRouted, // Гра
    resultsRouted: sequences.resultsRouted, // Результати

    applicationLoaded: sequences.applicationLoaded,
    updateField: sequences.updateField,
    startGame: sequences.startGame,

    loadFile: sequences.loadFile,
    downloadFile: sequences.downloadFile,
    editEntity: sequences.editEntity,
    resetEditForm: sequences.resetEditForm,
    postEntity: sequences.postEntity,
  },
  providers: {
  },
  modules: {
    router,
  },
});
