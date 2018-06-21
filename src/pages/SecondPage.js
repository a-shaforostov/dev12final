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

class SecondPage extends Component {
  render() {
    return (
      <PageWithTransition page="second">
        Second Page
        <a href="/">Main page</a>
      </PageWithTransition>
    )
  }
}

export default connect(
  {

  },
  injectSheet(styles)(SecondPage),
);
