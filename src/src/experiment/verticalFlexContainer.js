import React from "react";
import injectSheet from "react-jss";

const style = {
  verticalFlexContainer: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    minWidth: "100%"
  }
};

class VerticalFlexContainer extends React.Component {
  render() {
    return (
      <div className={this.props.classes.verticalFlexContainer}>
        {this.props.children}
      </div>
    );
  }
}

export default injectSheet(style)(VerticalFlexContainer);
