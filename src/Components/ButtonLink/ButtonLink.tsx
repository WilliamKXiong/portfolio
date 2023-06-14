import React, { Component } from 'react';
import { Button, ButtonProps } from 'react-bootstrap';
import './ButtonLink.css';
import BoxArrowUpRight from '../SVGs/BoxArrowUpRight';

interface ButtonLinkProps extends ButtonProps {
  link: string;
  text: string;
  linkSVG?: string;
}

class ButtonLink extends Component<ButtonLinkProps> {
  render() {
    const { link, text, linkSVG, size, variant } = this.props;
    if (linkSVG === undefined || linkSVG === "") {
      return (
        <Button size={size || "sm"} variant={variant || "dark"} href={link}>
          {text}
        </Button>
      );
    } else {
      return (
        <Button size={size || "sm"} variant={variant || "dark"} href={link}>
          <BoxArrowUpRight /> {text}
        </Button>
      );
    }
  }
}

export default ButtonLink;
