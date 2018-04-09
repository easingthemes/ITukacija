import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.css';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @class Title
 */
export class Title extends Component {
  getStyle(size) {
    switch (size) {
      case 1:
        return 'largest';
      case 2:
        return 'large';
      case 3:
        return 'medium';
      case 4:
        return 'small';
      default:
        return 'medium';
    }
	}

	renderTag(size, text) {
    const Heading = `h${size}`;
    const style = this.getStyle(size);
    return (
      <Heading className={`title title--${style}`}>
        <span className="title__text">{text}</span>
      </Heading>
    );
  }

	render() {
    const { size, text } = this.props;
		return this.renderTag(size, text);
	}
}

Title.propTypes = {
	text: PropTypes.string,
  size: PropTypes.number
};

Title.defaultProps = {
	size: 3
};

export default Title;
