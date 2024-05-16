"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="https://www.su.se/cmlink/stockholm-university" onClick={handleClose}>
            <img
              src="/imgs/logo.png"
              alt="logo"
              className="shadow-dark"
            />
          </Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == "/" && "active"}`}>
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/about"
              className={`${pathUrl == "/about" && "active"}`}
            >
              <i className="fa fa-user" /> About
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/portfolio"
              className={`${pathUrl == "/portfolio" && "active"}`}
            >
              <i className="fa fa-briefcase" /> Portfolio
            </Link>
          </li>
          {/* <li onClick={handleClose}>
            <Link href="/blog" className={`${pathUrl == "/blog" && "active"}`}>
              <i className="fa fa-envelope" /> Blog
            </Link>
          </li> */}
          <li onClick={handleClose}>
            <Link
              href="/services"
              className={`${pathUrl == "/services" && "active"}`}
            >
              <i className="fa fa-list" /> Reviews
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/contact"
              className={`${pathUrl == "/contact" && "active"}`}
            >
              <i className="fa fa-comments" /> Contact
            </Link>
          </li>
        </ul>
        <div className="copyright">
          Created with ❤️ By{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            Ivan
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
