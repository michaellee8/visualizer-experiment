import mockDb from "./mockDb";
import React from "react";
import TreeNode from "./treeNode";
import Loader from "./loader";
import VerticalFlexContainer from "./verticalFlexContainer";
import randomColor from "randomcolor";
import BottomNode from "./bottomNode";

export default class MiddleNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childColor: randomColor({ luminosity: "light" })
    };
  }
  componentWillMount() {
    Promise.all([
      mockDb.getNodeById(this.props.nodeId),
      mockDb.getPrimaryChildsIdById(this.props.nodeId)
    ])
      .then(arr => this.setState({ nodeData: arr[0], childIds: arr[1] }))
      .catch(err => console.log(err));
  }
  render() {
    return this.state.nodeData ? (
      <TreeNode text={this.state.nodeData.text} color={this.props.color}>
        <VerticalFlexContainer>
          {this.state.childIds.map(id => (
            <BottomNode nodeId={id} key={id} color={this.state.childColor} />
          ))}
        </VerticalFlexContainer>
      </TreeNode>
    ) : (
        <Loader />
      );
  }
}
