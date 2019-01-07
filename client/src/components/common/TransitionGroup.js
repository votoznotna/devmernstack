import React, { Component, Fragment } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default function transitionOfComponent(InnerComponent) {
  return class extends Component {
    render() {
      return (
        <CSSTransitionGroup
          transitionName="transition"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Fragment>
            <InnerComponent {...this.props} />
          </Fragment>
        </CSSTransitionGroup>
      );
    }
  };
}
