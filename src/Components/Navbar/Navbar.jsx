import { useState } from 'react'
import './Navbar.css'
import logoWhite from './logo-white.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('Contact')
  const [toggle,setToggle] = useState(false)
  const handleClick = () => {
    (!toggle ? setToggle(true) : setToggle(false))
  }

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <img src={logoWhite} alt="" />
        <ul>
          <li onMouseMove={()=>{setMenu('Products')}} className={menu === 'Products' ? 'active' : ''} >Products</li>
          <li onMouseMove={()=>{setMenu('Developers')}} className={menu == 'Developers' ? 'active' : ''}>Developers</li>
          <li  onMouseMove={()=>{setMenu('Resources')}} className={menu == 'Resources' ? 'active' : ''}>Resources</li>
          <li  onMouseMove={()=>{setMenu('Pricing')}} className={menu == "Pricing" ? 'active' : ''}>Pricing</li>
          <li  onMouseMove={()=>{setMenu('Contact')}} className={menu == "Contact" ? 'active' : ''}>Contact</li>
        </ul>
        <a href="#">Sign in</a>
      </div>

      <div onClick={()=>{handleClick()}} className="menu-toggle">
        <span className={`first ${toggle ? 'active' : ''}`}></span>
        <span className={`second ${toggle ? 'active' : ''}`}></span>
        <span className={`third ${toggle ? 'active' : ''}`}></span>
      </div>

      <ul className={`side-menu ${toggle ? 'active' : ' '}`}>
          <li>Products</li>
          <li>Solutions</li>
          <li>Developers</li>
          <li>Resources</li>
          <li>Pricing</li>
      </ul>

    </div>
  )
}

export default Navbar