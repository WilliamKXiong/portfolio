import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import './ButtonLink.css'
import BoxArrowUpRight from '../SVGs/Box-arrow-up-right';
import GithubSVG from '../SVGs/GithubSVG';
/*
Button component that is able to take in two parameters ButtonLink(link, text)
*/
class ButtonLink extends Component {
    render() {
        if(this.props.linkSVG == ""){
            return(
                <Button size={this.props.size || ""} variant={this.props.variant || "dark"} href={this.props.link}>{this.props.text}</Button>
            )
        }else{
            return (
                <Button size={this.props.size || ""} variant={this.props.variant || "dark"} href={this.props.link}><BoxArrowUpRight/> {this.props.text}</Button>
            )
        }
    }
}

export default ButtonLink;