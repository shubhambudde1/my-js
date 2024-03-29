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

    const searchQueryHandler = (event) => {
      if (event.key === 'Enter' && query.length > 0) {
        navigate(`/search/${query}`);
        setTimeout(() => {
          setShowSearch(false);
        }, 1000)
      }
    };


    const openSearch = () => {
      setMobileMenu(false)
      setShowSearch(true)
    }
    const opemMobileMenu = () => {
      setMobileMenu(true)
      setShowSearch(false)

    }

    return (
        <header className = {`header ${mobileMenu ? "mobileView" : " "}  ${show}`}>
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
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false )} />
          ):(
            <SlMenu onClick={opemMobileMenu}/>)}
          
          
          </div>

        </ContentWrapper>
        {showSearch && <div className="searchBar">
        <ContentWrapper>
        <div className='searchInput'>
            <input
              type='text'
              placeholder='search for movie or tv shows...'
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <VscChromeClose onClick={() => setMobileMenu(false )} />
            
          </div>
        </ContentWrapper>
        </div>}
          
        </header>
    );
};

export default Header;

