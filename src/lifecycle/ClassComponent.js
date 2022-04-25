import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleCount = this.handleCount.bind(this);
  }

  render() {
    return (
      <>
        <div className="container mt-4">
          <button
            onClick={this.handleCount}
            className="btn btn-primary">
            Count
          </button>
          <p>{this.state.count}</p>
        </div>
      </>
    );
  }

  handleCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  /**
   * ketika component dibuat sampai akhirnya di render ke DOM/Browser.
   */
  componentDidMount() {
    console.log("ClassComponent componentDidMount");
  }

  /**
   * ketika ada perubahan di component, biasanya terjadi ketika ada perubahan pada state, props.
   */
  componentDidUpdate() {
    console.log("ClassComponent componentDidUpdate");
  }

  /**
   * ketika component dihapus atau di destroy pada DOM
   */
  componentWillUnmount() {
    console.log("ClassComponent componentWillUnmount");
  }
}

export default ClassComponent;
