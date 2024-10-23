// Footer.tsx

import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h2 className="footer-logo">Bakevy</h2>
                <div className="socials">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Bakevy. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
