import React from 'react'
import {Link} from 'react-router-dom'
import './Styles/Header.css'
import Button  from '@material-ui/core/Button'
// import HomeIcon from '@material-ui/icons/HomeIcon'
function Header() {
  return (
    <div className='container'>
        {/* <Link to="/home"><HomeIcon fontSize='large' color='primary'/></Link> */}
        <h2>PRODUCT-APP</h2>
    </div>
  )
}

export default Header