import React, { Component } from "react";
import { connect } from "@cerebral/react";
import { state } from 'cerebral/tags';
import { CSSTransition } from 'react-transition-group';
import { pageTransitionDelay } from 'app/constants';
import injectSheet from 'react-jss';

const styles = {
  page: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
};

class PageWithTransition extends Component {
  render() {
    // const { classes } = this.props;
    const { children, currentPage, page, ...props } = this.props;
    return (
      <CSSTransition
        in={currentPage === page}
        timeout={pageTransitionDelay}
        classNames="page"
        unmountOnExit
      >
        <div {...props}>
          {children}
        </div>
      </CSSTransition>
    )
  }
}

export default connect(
  {
    currentPage: state`currentPage`,
  },
  injectSheet(styles)(PageWithTransition),
);
