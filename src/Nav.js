import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className='nav_logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className='nav_avatar'
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
    </div>
  )
}

export default Nav
