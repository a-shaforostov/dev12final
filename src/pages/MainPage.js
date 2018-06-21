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
};

class MainPage extends Component {
  render() {
    return (
      <PageWithTransition page="root">
        Main Page
        <a href="/second">Second page</a>
      </PageWithTransition>
    )
  }
}

export default connect(
  {

  },
  injectSheet(styles)(MainPage),
);
