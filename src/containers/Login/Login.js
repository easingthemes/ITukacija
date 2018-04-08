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
          <div className="form">
            <div className="form-holder">
              <div className="info">
                <p>Molimo vas da popunite polja ispod kako <br />
                biste pristupili vasem nalogu</p>
              </div>
              <div className="field first-field">
                <p>KORISNICKO IME</p>
                <input type="text" id="korisnicko_ime"
                       placeholder="Unesite vase ime..." />
              </div>
              <div className="field second-field">
                <p>LOZINKA</p>
                <input type="password" id="lozinka"
                       placeholder="Unesite vasu lozinku..." />
              </div>
              <input type="button" id="submit_login" value="PRIJAVI SE" />
            </div>
          </div>
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

