import mockDb from "./mockDb";
import React from "react";
import TreeNode from "./treeNode";
import Loader from "./loader";
import HorizontalFlexContainer from "./horizontalFlexContainer";
import randomColor from "randomcolor";
import MiddleNode from "./middleNode";

export default class TopNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Promise.all([
      mockDb.getNodeById(this.props.nodeId),
      mockDb.getPrimaryChildsIdById(this.props.nodeId)
    ])
      .then(arr =>
        this.setState({
          nodeData: arr[0],
          childIds: arr[1],
          color: randomColor({ luminosity: "light" }),
          childColor: randomColor({ luminosity: "light", count: arr[1].length })
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    return this.state.nodeData ? (
      <TreeNode text={this.state.nodeData.text} color={this.state.color}>
        <HorizontalFlexContainer>
          {this.state.childIds.map((childId, index) => (
            <MiddleNode nodeId={childId} key={childId} color={this.state.childColor[index]} />
          ))}
        </HorizontalFlexContainer>
      </TreeNode>
    ) : (
        <Loader />
      );
  }
}
