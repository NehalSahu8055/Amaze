import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <footer className="flex items-center justify-between  px-8 py-6">
      <small>All Rights Reserved 2024 | Amaze Software Technologies</small>
      <ul className="flex gap-2 ">
        <li>
          <FacebookIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <XIcon className="text-xl" />
        </li>
        <li>
          <InstagramIcon />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
