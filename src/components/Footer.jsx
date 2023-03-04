import React from 'react';
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import classes from './footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.social}>
          <a href="https://github.com/alexanderjnm/Alex-Restaurant" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
        <div className={classes.copy}>
          <p>&copy; {new Date().getFullYear()} Alex SaltBae. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;