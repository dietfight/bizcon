/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import s from './LoginPage.scss';
import withStyles from '../../decorators/withStyles';
import RaisedButton from 'material-ui/lib/raised-button';

const title = 'Log In';

@withStyles(s)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>

          <div>
            <RaisedButton label="Login via Google" />
          </div>

          <div>
            <RaisedButton label="Login via Facebook" />
          </div>
        </div>
      </div>
    );
  }

}

export default LoginPage;
