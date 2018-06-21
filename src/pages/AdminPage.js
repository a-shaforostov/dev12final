/**
 * Component. Admin page
 * @file
 */

import React, { Component } from "react";
import { connect } from "@cerebral/react";
import { state, signal } from 'cerebral/tags';
import injectSheet from 'react-jss';

import PageWithTransition from 'components/PageWithTransition';

const styles = {
  page: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
};

class AdminPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <PageWithTransition page="admin">
          Admin
      </PageWithTransition>
    )
  }
}

export default connect(
  {
  },
  injectSheet(styles)(AdminPage),
);
