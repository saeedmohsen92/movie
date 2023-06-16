import React, { useRef } from 'react'
import style from './Sidebar.module.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {

  let sidebar = useRef (null);
  let innerSidebar= useRef (null);
  let sidebarIcon = useRef (null);

  function openAndCloseNav()
  {
    let left = window.getComputedStyle(sidebar.current).getPropertyValue("left")

    if(left == '0px')
    {
      closeSideBar()
    }else
    {
      openSideBar()
    }
  };

  function closeSideBar()
  {
    sidebar.current.style.left="-250px"
  }

  function openSideBar()
  {
    sidebar.current.style.left="0px"
  }
  
  

  return <>
  <nav ref={sidebar} className={`${style['main-nav']} position-fixed`}>

    <div ref={innerSidebar} className='d-flex flex-column justify-content-between'>


      <ul className='list-unstyled px-4 py-4'>
        <li className='p-0 my-2'> 
          <NavLink onClick={closeSideBar} to="/search">Search</NavLink>
        </li>
        <li className='p-0 my-2'>
          <NavLink onClick={closeSideBar} to="/area">Area</NavLink>
        </li>
        <li className='p-0 my-2'>
          <NavLink onClick={closeSideBar} to="/category">Category</NavLink>
        </li>
        <li className='p-0 my-2'>
          <NavLink onClick={closeSideBar} to="/ingrediant">Ingrediant</NavLink>
        </li>
        <li className='p-0 my-2'>
          <NavLink onClick={closeSideBar} to="/contactus">Contact us</NavLink>
        </li>
      </ul>

      <div className="copyright">
            <div className="social-icons">
              <a href="https://facebook.com">
                <i className="fa-brands fa-facebook-f p-2 pointer"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fa-brands fa-twitter p-2 pointer"></i>
              </a>
              <a href="https://youtube.com">
                <i className="fa-brands fa-youtube p-2 pointer"></i>
              </a>
            </div>
            <p>Copyright &copy; 2023 All Rights Reserved.</p>
    </div>

    </div>
    
    <div className="text-black px-2 py-3 d-flex flex-column justify-content-between align-items-center">
          
<Link to={'/'}>
<img
              src={logo}
              className={`${style.logo} pointer`}
              alt="Yummy Logo"
            /> 
</Link> 

          <i ref={sidebarIcon} onClick={openAndCloseNav} className="fa-solid fa-bars fa-2x pointer"></i>
          <div className="icons d-flex flex-column gy-2">
            <i className="fa-solid fa-earth-americas pointer"></i>
            <i className="fa-solid fa-share-nodes pointer"></i>
          </div>
        </div>

  </nav>

  </>
}
