import React from "react";
import { HiMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black footer-head">
      <div className="bg-black container  footer">
        <div className="row ">
          <div className="col-md-2">
            <h1 className="py-3">Onii</h1>
            <p>
              123 LondonBridge Street<p>london</p>{" "}
            </p>
            <span>support@onii.co</span>
            <p>(+012) 3456 789</p>
          </div>
          <div className="col-md-2">
            <h4 className="py-3">COMPANY</h4>
            <p>Our Store </p>
            <p>About Us</p>
            <p>Work With Us</p>
            <p>Our Blog</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="col-md-2">
            <h4 className="py-3">USEFUL LINK</h4>
            <p>Help</p>
            <p>Track My Order</p>
            <p>Men</p>
            <p>Women</p>
            <p>Shoes</p>
          </div>
          <div className="col-md-2">
            <h4 className="py-3">SHOP GUIDE</h4>
            <p>Shipping</p>
            <p>Size Guide </p>
            <p>Returns</p>
            <p>Size Guide</p>
            <p>Gift Vouchers</p>
          </div>
          <div className="col-md-3">
            <h4 className="py-3">DON'T MISS ANYTHING </h4>
            <p>
              Sign up for email updates on the latest Onii collections,
              campaigns and exclusive offers.
            </p>
            <input type="text" placeholder="EMAIL ADDRESS" />
            <i className="overlay-icon">
              <HiMail />
            </i>
          </div>
        </div>
      </div>
      <hr style={{color : "grey"}}/>
      <div className="container footer2">
        <div className="row">
        <div className="col-md-4 icons">
          <i className="">
            <FaFacebookF />
          </i>
          <i className="">
            <AiOutlineTwitter />
          </i>
          <i className="">
            <FaPinterestP />
          </i>
          <i className="">
            <SiInstagram />
          </i>
        </div>
        <div className="col-md-4 copyright">
          <p className=" m-0">Copyright @ 2022. All Rights reserved </p>
        </div>
        <div className="col-md-4 text-center pay">
          <i className="">
            <FaCcVisa />
          </i>
          <i className="">
            <FaCcMastercard />
          </i>
          <i className="">
            <FaCcVisa />
          </i>
          <i className="">
            <FaCcMastercard />
          </i>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
