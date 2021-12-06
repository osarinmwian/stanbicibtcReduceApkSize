import React, { Component, ErrorInfo } from "react";
import { ScrollView, Text } from "react-native";

import Fallback from "./Fallback";
import { boundaryStyles as styles } from "./styles";

interface State {
  errorMessage: string;
  hasError: boolean;
  info: ErrorInfo;
}

interface Props {
  children: React.ReactNode;
}

/**
 * ErrorBoundary is a component that catches errors in its children and displays a fallback UI.
 * We can get the information about which part of our code threw the error by using the `getDerivedStateFromError` method.
 * And forwarding this message to a logging service
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      errorMessage: "",
      hasError: false,
      info: { componentStack: "" },
    };
  }

  static getderivedStateFromError() {
    return { haError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ errorMessage: error.message, info });
  }

  render() {
    if (this.state.hasError) {
      if (__DEV__) {
        return (
          <ScrollView style={styles.container}>
            <Text>{this.state.errorMessage}</Text>
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
