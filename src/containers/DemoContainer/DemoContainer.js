import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import selectDemo from './selectors';
import {
  getDemo,
} from './actions';

class DemoContainer extends Component {
  componentDidMount() {
  this.props.handleGetDemo(123);
  }

  render() {
    return (
      <div>
        DemoContainer
      </div>
    );
  }
}

DemoContainer.propTypes = {
  str: PropTypes.string,
};

const mapStateToProps = selectDemo();

function mapDispatchToProps(dispatch) {
  return {
    handleGetDemo: (param) => dispatch(getDemo(param)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);

