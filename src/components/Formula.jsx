import React, { Component } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'


class Formula extends React.Component {
    render() {
      return <div className="formulaScreen">{this.props.formula}</div>;
    }
  }

  export default Formula