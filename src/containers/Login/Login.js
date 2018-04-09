import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import selectDemo from './selectors';
import {
  getDemo,
} from './actions';

import Button from '../../components/Button';

class Login extends Component {
  componentDidMount() {
    this.props.handleGetDemo('123');
  }

  handleLogin() {
    console.log('login');
  }

  render() {
    return (
      <div className="login__container">
        <div className="left">
          <p>TVOJ PUT DO IT <br />
            EDUKACIJE</p>
          <p>ITukacija je platforma za ucenje Informacionih <br />
            Tehnologija na jedan sasvim drugi nacin</p>
          <Button
            label="NAPRAVI NALOG"
            route="/register"/>
        </div>
        <div className="right">
          <form className="form">
            <div className="form-holder">
              <div className="info">
                <p>Molimo vas da popunite polja ispod kako <br />
                biste pristupili vasem nalogu</p>
              </div>
              <div className="form__row first-field">
                <label className="label">KORISNICKO IME</label>
                <input type="text" placeholder="Unesite vase ime..."
                  className="field_input"/>
              </div>
              <div className="form__row second-field">
                <label className="label">LOZINKA</label>
                <input type="password" placeholder="Unesite vasu lozinku..."
                  className="field_input"/>
              </div>
              <Button
                  label="PRIJAVI SE"
                  handleClick={this.handleLogin}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  str: PropTypes.string,
};

const mapStateToProps = selectDemo();

function mapDispatchToProps(dispatch) {
  return {
    handleGetDemo: (param) => dispatch(getDemo(param)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

