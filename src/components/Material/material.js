/** In this file, we create a React component which incorporates components provided by material-ui */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import TimePicker from 'material-ui/lib/time-picker';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import LinearProgress from 'material-ui/lib/linear-progress';

const containerStyle = {
  textAlign: 'center',
  paddingTop: 200,
};

const standardActions = [
  {
    text: 'Okay',
  },
];

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

    this.setState({muiTheme: newMuiTheme});
  },

  _handleRequestClose() {
    this.setState({
      open: false,
    });
  },

  _handleTouchTap() {
    this.setState({
      open: true,
    });
  },

  _noop() {
    console.log('noop');
  },

  render() {
    return (
      <div style={containerStyle}>
        <h1>material-ui</h1>
        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
        <TimePicker
          format="ampm"
          hintText="12hr Format" onShow={this._noop} onDismiss={this._noop}/>
        <LinearProgress mode="determinate" value={60} />
      </div>
    );
  },
});

export default Main;
