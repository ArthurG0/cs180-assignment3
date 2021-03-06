import React, { useState } from 'react';
import TabList from './components/TabList'
import Body from './components/Body'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tab_id: 1,
    };

    this.onChangeTabButton = this.onChangeTabButton.bind(this)
    this.changeTab = this.changeTab.bind(this)
  }

  onChangeTabButton() {
    console.log("button was pressed")
    this.changeTab((this.state.tab_id) % 5 + 1)
  }

  changeTab(newState) {
    console.log("App.js setState called with value " + newState)
    this.setState(state => {
      return {tab_id: newState}
    });
  }

  render() {

    let globalStyle = {
      paddingTop: "10px",
      paddingLeft: "10px"
    }
    return (
      <div style={globalStyle}>
        <TabList 
          onChangeTab={this.changeTab}
          currentTabID={this.state.tab_id}
        ></TabList>
        <Body
          currentTabID={this.state.tab_id}
        ></Body>
        
      </div>
    );
  }
}

export default App;