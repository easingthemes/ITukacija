import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import selectDemo from './selectors';
import {
  getDemo,
} from './actions';

import Button from "../../components/Button";
import Title from "../../components/Title/Title";

class Components extends Component {
  render() {
    return (
      <div>
        <Title text="Button" size={2} />
        <Title text="Default"/>
        <Button />
        <Title text="Link"/>
        <Button href="http://google.com" />
        <Title text="Route"/>
        <Button route="/" />
      </div>
    );
  }
}

Components.propTypes = {
  str: PropTypes.string,
};

const mapStateToProps = selectDemo();

function mapDispatchToProps(dispatch) {
  return {
    handleGetDemo: (param) => dispatch(getDemo(param)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Components);

