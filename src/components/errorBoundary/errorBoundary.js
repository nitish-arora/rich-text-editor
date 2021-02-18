import React from "react";
import { Component } from "react";

import "./errorBoundary.css";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <h2>Something went wrong</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
