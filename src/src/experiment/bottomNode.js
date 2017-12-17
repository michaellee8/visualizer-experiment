import mockDb from "./mockDb";
import React from "react";
import TreeNode from "./treeNode";
import Loader from "./loader";

export default class BottomNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    mockDb
      .getNodeById(this.props.nodeId)
      .then(data => this.setState({ nodeData: data }))
      .catch(err => console.log(err));
  }
  render() {
    return this.state.nodeData ? (
      <TreeNode text={this.state.nodeData.text} color={this.props.color}>
        {<span />}
      </TreeNode>
    ) : (
        <Loader />
      );
  }
}
