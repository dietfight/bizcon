/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import s from './Footer.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(s)
class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Food Fight</span>

          <div>
            <a className={s.link} href="/about" onClick={Link.handleClick}>About</a>
            <span className={s.spacer}>·</span>
            <a className={s.link} href="/privacy" onClick={Link.handleClick}>Contact</a>
          </div>
        </div>
      </div>
    );
  }

}

export default Footer;
