import React from 'react';
import './index.css';

const Loading = ({className}) => (
  <div className={`spinner ${className?className:''}`} data-testid="loading">
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </div>
);
export default Loading;