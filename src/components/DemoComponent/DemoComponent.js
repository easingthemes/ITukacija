import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DemoComponent.css';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @class DemoComponent
 */
export class DemoComponent extends Component {
  constructor(props) {
 		super(props);
 		this.state = {
 			isLoading: true
 		};
 	}

  componentDidMount () {

	}

	render() {
		return (
			<div className='c-DemoComponent'>
				<h1>DemoComponent</h1>
			</div>
		);
	}
}

DemoComponent.propTypes = {
	str: PropTypes.string,
	oneof: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

DemoComponent.defaultProps = {
	str: 'string',
	oneof: 0
};

export default DemoComponent;
