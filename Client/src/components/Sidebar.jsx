import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <ul className='nav_items'>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/">Listing</Link> </li>
            <li> <Link to="/">Podcast</Link> </li>
            <li> <Link to="/">Videos</Link> </li>
            <li> <Link to="/">About</Link> </li>
            <li> <Link to="/">Projects</Link> </li>
            <li> <Link to="/">Join Groups</Link> </li>
            <li> <Link to="/">Collaboration</Link> </li>
            <li> <Link to="/">FAQ</Link> </li>
        </ul>
        <h4>other...</h4>
        <ul className="other">
        <li> <Link to="/">Code of Conduct</Link> </li>
        <li> <Link to="/">Privacy Policy</Link> </li>
        <li> <Link to="/">Terms of Use</Link> </li>
        </ul>
        <div className="socials">
            <span><TiSocialFacebook /> </span>
            <span><TiSocialInstagram /></span> 
            <span><TiSocialTwitter /></span>
            <span><TiSocialLinkedin /></span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
