import React, { useState } from 'react';
import './Animate.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Animate(): JSX.Element {
    const [showCircle, setShowCircle] = useState(false);

    const handleClick = () => {
        setShowCircle(true);
        setTimeout(() => {
          setShowCircle(false);
        }, 1000); // Duration of the animation in milliseconds
      };
    

  return (
    <div>
        <a href="#/animate" onClick={handleClick}>
            Click me to test2
        </a>
        {showCircle && <div className="circleAnimate"/>}
    </div>
  );
};