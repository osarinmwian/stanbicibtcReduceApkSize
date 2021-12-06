import React, { Component, ErrorInfo } from "react";
import { ScrollView, Text } from "react-native";

import Fallback from "./Fallback";

interface State {
  errormessage: string;
  hasError: boolean;
  info: ErrorInfo;
}

interface Props {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      errormessage: "",
      hasError: false,
      info: { componentStack: "" },
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ errormessage: error.message, hasError: true, info });
  }

  render() {
    if (this.state.hasError) {
      if (__DEV__) {
        return (
          <ScrollView
            style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
          >
            <Text>{this.state.errormessage}</Text>
            <Text>{this.state.info?.componentStack}</Text>
          </ScrollView>
        );
      }
      return <Fallback />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
