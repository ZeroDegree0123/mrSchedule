import "./NavBar.css"
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { useEffect, useState } from "react";

export default function NavBar({ user, setUser }) {
  const [nav, setNav] = useState();
  const [toggle, setToggle] = useState();
  const [userInfo, setUserInfo] = useState();
  const [titles, setTitles] = useState();
  const [navItems, setNavItems] = useState();
  
  useEffect(function() {
    const getNav = async function() {
      const navbar = document.querySelector('.nav-bar')
      setNav(navbar);
    }
    getNav();

    const getUserInfo = async function() {
      const userInfo = document.querySelector('.user-info')
      setUserInfo(userInfo);
    }
    getUserInfo();

    const getTitles = async function() {
      const titles = document.querySelector('.nav-titles');
      setTitles(titles)
    }
    getTitles()

    const getToggle = async function() {
      const toggle = document.querySelector('.nav-toggle')
      setToggle(toggle);
    }
    getToggle();
    
    const getNavItems = async function() {
      const navItems = document.querySelector('.nav-list')
      setNavItems(navItems);
    }
    getNavItems();
    
  }, [])
  
  function handleClick() {
    if (nav.className === 'nav-bar') {
      nav.classList.add('open')
    } else (
      nav.classList.remove('open')
    )

    if (toggle.className === 'nav-toggle') {
      toggle.classList.add('open')
    } else (
      toggle.classList.remove('open')
    )
      
    if (navItems.className === 'nav-list') {
      navItems.classList.add('open')
    } else (
      navItems.classList.remove('open')
    )

    if (userInfo.className === 'user-info') {
      userInfo.classList.add('open');
    } else (
      userInfo.classList.remove('open')
    )

    if (titles.className === 'nav-titles') {
      titles.classList.add('open')
    } else (
      titles.classList.remove('open')
    )
  }
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  

  function setActive() {
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.remove("active");
      })
      item.classList.add("active")
    })
  }




  console.log(nav)
  // console.log(toggle)
  console.log(navItems)
  
  return (
    <nav className="nav-bar">
      <button className="nav-toggle" onClick={handleClick}>&#62;</button>

      <div className="user-info">
        <img src="https://imgur.com/XSenBva.png" alt="" />
        <h2 className="user-name">{user.name.toUpperCase()}</h2>
      </div>

      <div className="nav-titles">Navigation</div>

      <div className="nav-list">
        <Link id="logout" className="nav-item" setActive to="/">Home</Link>
        <Link id="logout" className="nav-item"  to="/events">Events</Link>
        <Link id="logout" className="nav-item"  to="/account">Account</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
        {/* <Link className="nav-links" to="/login">Login</Link> */}
      </div>
      <hr />

    {/* Effected */}
      {/* <div className="nav-titles">
          Support
      </div> */}
    {/* Effected */}
      {/* <div className="nav-list"> 
        <Link id="logout" className="nav-item active" onClick={handleLogOut} to="/">Logout</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
      </div> */}
    </nav>
  );
}
