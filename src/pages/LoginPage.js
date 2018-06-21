/**
 * Component. Public page
 * @file
 */

import React, { Component } from "react";
import { connect } from "@cerebral/react";
import { state } from 'cerebral/tags';
import PageWithTransition from 'components/PageWithTransition';
import injectSheet from 'react-jss';

const styles = {
  page: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
};

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <PageWithTransition page="login">
        Login Page
        <a href="/">home</a>

      </PageWithTransition>
    )
  }
}

export default connect(
  {
  },
  injectSheet(styles)(LoginPage),
);
