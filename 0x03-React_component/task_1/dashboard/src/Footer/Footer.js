import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

const Footer = () => {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
};

export default Footer;
