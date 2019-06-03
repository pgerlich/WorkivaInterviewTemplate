import React from 'react'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectors, updateTime} from "../redux/home";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Last Updated at: {this.props.currentTime}!</p>
        <button onClick={() => this.props.updateTime()}>Update Time</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateTime
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    currentTime: selectors.getCurrentTime(state),
    isTimeLoading: selectors.isTimeLoading(state)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);