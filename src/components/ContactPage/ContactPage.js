/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import s from './ContactPage.scss';
import withStyles from '../../decorators/withStyles';
import TextField from 'material-ui/lib/text-field';

const title = 'Contact Us';

@withStyles(s)
class ContactPage extends Component {

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
            <TextField
                hintText="Hint Text"
                floatingLabelText="Name" />
          </div>

          <div>
            <TextField
                hintText="Hint Text"
                floatingLabelText="Email" /></div>

          <div>
            <TextField
                hintText="Hint Text"
                floatingLabelText="Message" />
          </div>
        </div>
      </div>
    );
  }

}

export default ContactPage;
