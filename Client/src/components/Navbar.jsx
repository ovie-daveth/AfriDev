import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { IoMdNotifications } from 'react-icons/io'
import { AiFillEdit } from 'react-icons/ai'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [isAuth, SetisAuth] = useState(true)

  // const showProfile = () => {
  //    alert('clicked')
  // }
  const navigate = useNavigate()
  const logout = async ()=>{
    await signOut(auth)
    navigate('/')
    SetisAuth(false)
    localStorage.clear()
  }
  return (
    <div>
      <div className="header">
        <div className="left">
            <h2><Link to='/'>Afri<span>Dev</span></Link> </h2>
            <div className="search">
                <input type="search" placeholder='Search...' id='search' />
                <label htmlFor="search"><BsSearch /></label>
            </div>
        </div>
      <div className="nav">
        {
          !isAuth &&
          <p><Link to="/login">Login</Link></p>
        }
        {
          isAuth ? <button className='createBtn'><Link to="/create">Create Post</Link></button>
          :
          <button className='createBtn'><Link to="/register">Create Account</Link></button>
        }
        {
          isAuth && <h1><IoMdNotifications/></h1>
        }
         {
          isAuth && <div className="author_img">
            <img width="40px" height="40px" onClick={toggleMenu} src="https://res.cloudinary.com/practicaldev/image/fetch/s--R7e2_9ta--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/671687/7242818e-37e5-4696-939c-8d81e821a376.jpeg" alt="author" />
           <div className={openMenu ? 'profile_show' : 'profile_hide'}>
           <div className='profile_container' >
            <ul>
              <li><Link to=''> <span> <AiFillEdit /> </span>Edit your profile</Link></li>
              <li><Link to=''> <span> <AiFillEdit /> </span>Edit your profile</Link></li>
              <li><Link to=''> <span> <AiFillEdit /> </span>Edit your profile</Link></li>
            </ul>
              <button  className='logout' onClick={logout} >Logout</button>
           </div>
           </div>
          </div>
       
        }
        
        
        
       
      </div>
      </div>
    </div>
  )
}

export default Navbar
