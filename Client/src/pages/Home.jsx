import React from 'react'
import Advert from '../components/Advert'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Post />
      <Post />
      <Post />
      <Post />
      <Advert />
    </div>
  )
}

export default Home
