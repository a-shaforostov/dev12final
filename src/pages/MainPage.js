/**
 * Component. Public page
 * @file
 */

import React, { Component } from "react";
import { connect } from "@cerebral/react";
import { state, signal } from 'cerebral/tags';
import PageWithTransition from 'components/PageWithTransition';
import injectSheet from 'react-jss';

const styles = {
  wrapper: {
    height: '100%',
  },
  container: {
    display: 'flex',
    width: '100%',
    minWidth: '440px',
    maxWidth: '960px',
    margin: '0 auto',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  player: {

  },
  p1: {
    color: 'red',
  },
  p2: {
    color: 'blue',
  },
};

class MainPage extends Component {
  handleChange = path => e => {
    this.props.updateField({ path, value: e.target.value });
  };

  handleStartGame = e => {
    e.preventDefault();
    this.props.startGame();
  };

  render() {
    const { wrapper, container, player, p1, p2 } = this.props.classes;
    const { users, player2Index } = this.props;

    return (
      <PageWithTransition page="root" className={wrapper}>
        <div className={`${container}`}>
          <form onSubmit={this.handleStartGame}>
            <h3 className={`${player} ${p1}`}>Гравець 1</h3>
            <span>Ім'я:</span>&nbsp;
            <input type="text" name="name" value={users[0].name}/>

            <h3 className={`${player} ${p2}`}>Гравець 2</h3>
            <div>
              <span>Тип суперника:</span>&nbsp;
              <select name="player2Index" value={player2Index} onChange={this.handleChange('data.player2Index')}>
                <option value="1">Людина</option>
                <option value="2">Штучний інтелект</option>
              </select>
            </div>
            {
              player2Index === '1' &&
              <div>
                <span>Ім'я:</span>&nbsp;
                <input type="text" name="name" value={users[1].name}/>
              </div>
            }
            <button type="submit">Почати гру</button>
          </form>
        </div>
      </PageWithTransition>
    )
  }
}

export default connect(
  {
    users: state`data.users`,
    player2Index: state`data.player2Index`,
    updateField: signal`updateField`,
    startGame: signal`startGame`,
  },
  injectSheet(styles)(MainPage),
);
