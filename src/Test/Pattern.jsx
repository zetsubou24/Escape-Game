import React from "react";
import { render } from "react-dom";

import PatternLock from "react-pattern-lock";

class Pattern extends React.Component {
  state = {
    path: [],
    isLoading: false,
    error: false,
    success: false,
    disabled: false,
    size: 5
  };

  errorTimeout = 0;

  componentDidMount() {
    window.addEventListener("keydown", ({ which }) => {
      if (which === 38) {
        this.setState({
          size: this.state.size >= 10 ? 10 : this.state.size + 1
        });
      } else if (which === 40) {
        this.setState({ size: this.state.size > 3 ? this.state.size - 1 : 3 });
      }
    });
  }

  onReset = () => {
    this.setState({
      path: [],
      success: false,
      error: false,
      disabled: false
    });
  };

  onChange = path => {
    this.setState({ path: [...path] });
  };

  onFinish = () => {
    this.setState({ isLoading: true });
    // an imaginary api call
    setTimeout(() => {
      if (this.state.path.join("-") === "20-15-16-17-12-13-14-9-8-7-6-1") {
        this.setState({ isLoading: false, success: true, disabled: true });
      } else {
        this.setState({ disabled: true, error: true });
        this.errorTimeout = window.setTimeout(() => {
          this.setState({
            disabled: false,
            error: false,
            isLoading: false,
            path: []
          });
        }, 2000);
      }
    }, 1000);
  };

  render() {
    const { size, path, disabled, success, error, isLoading } = this.state;
    return (
      <React.Fragment>
        <div className="center">
          <PatternLock
            size={size}
            onChange={this.onChange}
            path={path}
            error={error}
            onFinish={this.onFinish}
            connectorThickness={5}
            disabled={disabled || isLoading}
            success={success}
            
          />
        </div>
        {console.log(path)}
        <div className="output">Output : {this.state.path.join(", ")}</div>
        {
        // success && 
        (
          <button
            style={{ margin: "0 auto", display: "block" ,color:"red"}}
            onClick={this.onReset}
          >
            Click here to reset
          </button>
        )}
        {/* <div className="output"> */}
          Press the up/down arrow keys to increase/decrease the size of the
          input
        {/* </div> */}
      </React.Fragment>
    );
  }
}
export default Pattern