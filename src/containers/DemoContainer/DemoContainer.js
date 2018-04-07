import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import selectDemo from './selectors';
import {
  getDemo,
} from './actions';

import DemoComponent from '../../components/DemoComponent';

class DemoContainer extends Component {
  componentDidMount() {
  this.props.handleGetDemo(456);
  }

  render() {
    return (
      <div>
        DemoContainer
        <DemoComponent />
      </div>
    );
  }
}

DemoContainer.propTypes = {
  str: PropTypes.number,
};

DemoContainer.defaultProps = {
	str: 0
};

const mapStateToProps = selectDemo();

function mapDispatchToProps(dispatch) {
  return {
    handleGetDemo: (param) => dispatch(getDemo(param)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
