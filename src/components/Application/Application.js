/**
 * Component. Application
 * @file
 */

import React, { Component } from 'react';
import { connect } from "@cerebral/react";
import { state, signal } from 'cerebral/tags';
import injectSheet from 'react-jss';
import { pageTransitionDelay } from '../../app/constants';

import MainPage from 'pages/MainPage';
import GamePage from 'pages/GamePage';
import ResultsPage from 'pages/ResultsPage';

const styles = {
  '@global body': {
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
  },

  '@global .page-enter, .page-appear': {
    opacity: 0.01,
  },

  '@global .page-appear-active, .page-enter-active': {
    opacity: 1,
    transition: `opacity ${pageTransitionDelay}ms ease-out`,
  },

  '@global .page-exit': {
    opacity: 1,
  },

  '@global .page-exit-active': {
    opacity: 0.01,
    transition: `opacity ${pageTransitionDelay}ms ease-out`,
  },

  '@global .ui.page.modals.transition.visible': {
    display: 'flex !important',
  },

  container: {
    padding: '0',
    height: '100vh',
  },
};

class Application extends Component {
  componentDidMount() {
    this.props.applicationLoaded();
  }

  render() {
    const { classes } = this.props;
    // console.log(this.props.classes);
    // debugger;
    return (
      <div className={classes.container}>
        <MainPage />
        <GamePage />
        <ResultsPage />
      </div>
    )
  }
}

export default connect(
  {
    applicationLoaded: signal`applicationLoaded`,
  },
  injectSheet(styles)(Application),
);
