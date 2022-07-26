import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='mt-8' style={{ background: `url(${ footer })`, backgroundSize: 'cover' }}>
            <footer className="footer py-5 lg:py-10 px-12">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="" className="link link-hover">Branding</Link>
                    <Link to="" className="link link-hover">Design</Link>
                    <Link to="" className="link link-hover">Marketing</Link>
                    <Link to="" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to="" className="link link-hover">Terms of use</Link>
                    <Link to="" className="link link-hover">Privacy policy</Link>
                    <Link to="" className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/about" className="link link-hover">About us</Link>
                    <Link to="/contact" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="" className="link link-hover">Press kit</Link>
                </div>
            </footer>
            <footer>
                <p className='text-center py-4'>Copyright &copy; {year} All Rights Reserved</p>
            </footer>
        </section>
    );
};

export default Footer;