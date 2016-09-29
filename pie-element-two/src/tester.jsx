import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Tester extends React.Component{
  render(){
    return <div>Element Two: <MuiThemeProvider>
      <RaisedButton label={this.props.msg}></RaisedButton>
      </MuiThemeProvider>
    </div>;
  }
}