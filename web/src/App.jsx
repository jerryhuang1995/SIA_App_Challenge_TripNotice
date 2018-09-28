import React, { Component } from "react";
import MediaQuery from "react-responsive";

import Desktop from "./Desktop";
import Mobile from "./Mobile";

class App extends Component {
  render() {
    return (
      <MediaQuery maxWidth={1366}>
        {isMatch => {
          if (isMatch) return <Mobile />;
          return <Desktop />;
        }}
      </MediaQuery>
    );
  }
}

export default App;
