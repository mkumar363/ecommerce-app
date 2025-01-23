import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import newsletter from "../images/newsletter.png"; 

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-item-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-0.5"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-1" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="text-white">
                <address className="text-white fs-6">
                  Hno. 163 Garden City,
                  <br /> Sector 6, Gurugram, Haryana,
                  <br />
                  pincode: 122001
                  <br /> India
                </address>
                <a
                  href="tel: +91 8770273840"
                  className="mt-3 d-block mb-1 text-white"
                >
                  
                  +91 8770273840
                </a>
                <a
                  href="mailto:info@yourdomain.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  
                  ahirwarvidit@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <Link to="www.github.com">
                    <BsGithub className="text-white fs-5" />
                  </Link>
                  <Link to="www.linkedin.com">
                    <BsLinkedin className="text-white fs-5" />
                  </Link>
                  <Link to="www.instagram.com">
                    <BsInstagram className="text-white fs-5" />
                  </Link>
                  <Link to="www.youtube.com">
                    <BsYoutube className="text-white fs-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/term-and-conditions">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Faq
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Link</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: Powered by Developer's
                M-Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
