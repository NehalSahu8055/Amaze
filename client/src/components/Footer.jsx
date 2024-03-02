import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="flex items-center justify-between  px-8 py-6">
      <small>All Rights Reserved 2024 | Amaze Software Technologies</small>
      <ul className="flex gap-2 ">
        <li>
          <Link to="https://fb.com/">
            <FacebookIcon />
          </Link>
        </li>
        <li>
          <Link to="https://linkedin.com/">
            <LinkedInIcon />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/">
            <XIcon className="text-xl" />
          </Link>
        </li>
        <li>
          <Link to="https://instagram.com/">
            <InstagramIcon />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
