import React from "react";
import injectSheet from "react-jss";

const styles = {
  loader: {
    border: "16px solid #f3f3f3" /* Light grey */,
    "border-top": "16px solid #3498db" /* Blue */,
    "border-radius": "50%",
    width: "3em",
    height: "3em",
    animation: "spin 2s linear infinite"
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  }
};

class Loader extends React.Component {
  render() {
    return <div className={this.props.classes.loader} />;
  }
}

export default injectSheet(styles)(Loader);
