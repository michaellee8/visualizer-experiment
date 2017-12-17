import React from "react";
import injectSheet from "react-jss";

const styles = {
  treeNodeRoot: {
    minHeight: "2em",
    borderRadius: "1em",
    width: "100%",
    margin: "0.1em",
    textAlign: "center",
    /* border: 0.1em solid black;*/
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    boxSizing: "border-box",
    
  },
  treeNodeContent: {
    margin: "0.5em"
    // "mix-blend-mode": "difference"
  }
};

class TreeNode extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        className={this.props.classes.treeNodeRoot}
      >
        <p className={this.props.classes.treeNodeContent}>{this.props.text}</p>
        {React.Children.only(this.props.children)}
      </div>
    );
  }
}

export default injectSheet(styles)(TreeNode);
