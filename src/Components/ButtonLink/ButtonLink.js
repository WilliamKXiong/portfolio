import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import './ButtonLink.css'

/*
Button component that is able to take in two parameters ButtonLink(link, text)
*/
class ButtonLink extends Component {
    render() {
        return (
            <Button className="bg-dark" href={this.props.link}>{this.props.text}</Button>
        )
    }
}

export default ButtonLink;