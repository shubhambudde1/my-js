import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./styles.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


    const openSearch = () => {
      setMobileMenu(false)
      setShowSearch(true)
    }
    const opemMobileMenu = () => {
      setMobileMenu(true)
      setShowSearch(false)

    }

    return (
        <header className="header">
        <ContentWrapper>
        <div className = "logo">
            <img src={logo} alt="" />
          </div>
          <ul className="menuItems">
            <li className="menuItem" >movie</li>
            <li className="menuItem">TV shows</li>
            <li className="menuItem">
            <HiOutlineSearch />
            </li>
            
          </ul>
          <div className="mobileMenuItem">
          <HiOutlineSearch />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ):(
            <SlMenu onClick={opemMobileMenu}/>)}
          
          <VscChromeClose />
          </div>

        </ContentWrapper>
          
        </header>
    );
};

export default Header;

