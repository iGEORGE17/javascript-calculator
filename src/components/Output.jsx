import React, { Component } from 'react'
import { Container } from 'react-bootstrap'


class Output extends Component {
    render() {
      return (
        <Container className="outputScreen" id="display">
          {this.props.currentValue}
        </Container>
      );
    }
  }

  export default Output