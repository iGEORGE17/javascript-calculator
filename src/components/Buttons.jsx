import React, { Component } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import '../App.css'

class Buttons extends Component {
    render() {
      return (
        <Container id="numberArea">
        <ButtonGroup id="numbers">
          <Button
            className="jumbo"
            id="clear"
            onClick={this.props.initialize}
            value="AC"
          >
            AC
          </Button>
          <Button
            id="percent"
            onClick={this.props.operators}
            value="%"
          >
            %
          </Button>          
          <Button id="nine" onClick={this.props.numbers} value="9">
            9
          </Button>
          <Button id="eight" onClick={this.props.numbers} value="8">
            8
          </Button>          
          <Button id="seven" onClick={this.props.numbers} value="7">
            7
          </Button>          
          <Button id="six" onClick={this.props.numbers} value="6">
            6
          </Button>          
          <Button id="five" onClick={this.props.numbers} value="5">
            5
          </Button>          
          <Button id="four" onClick={this.props.numbers} value="4">
            4
          </Button>
          <Button id="three" onClick={this.props.numbers} value="3">
            3
          </Button>
          <Button id="two" onClick={this.props.numbers} value="2">
            2
          </Button>
          <Button id="one" onClick={this.props.numbers} value="1">
            1
          </Button> 
          <Button id="decimal" onClick={this.props.decimal} value=".">
            .
          </Button>                   
          <Button
            className="jumbo"
            id="zero"
            onClick={this.props.numbers}
            value="0"
          >
            0
          </Button>

          </ButtonGroup>
          
          <ButtonGroup id="operators">
          <Button
            id="divide"
            onClick={this.props.operators}
            value="/"
          >
            /
          </Button>
          <Button
            id="multiply"
            onClick={this.props.operators}
            value="x"
          >
            x
          </Button>          
          <Button
            id="subtract"
            onClick={this.props.operators}
            value="‑"
          >
            ‑
          </Button>          
          <Button
            id="add"
            onClick={this.props.operators}
            value="+"
          >
            +
          </Button>          
          <Button
            id="equals"
            onClick={this.props.evaluate}
            value="="
          >
            =
          </Button>
          </ButtonGroup>
        </Container>
      );
    }
  }

  export default Buttons