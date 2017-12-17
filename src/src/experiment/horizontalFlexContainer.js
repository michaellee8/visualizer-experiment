import React from "react";
import injectSheet from "react-jss";

const style = {
  horizontalFlexContainer: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    minWidth: "100%"
  }
};

class HorizontalFlexContainer extends React.Component {
  render() {
    return (
      <div className={this.props.classes.horizontalFlexContainer}>
        {this.props.children}
      </div>
    );
  }
}

export default injectSheet(style)(HorizontalFlexContainer);
