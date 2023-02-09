import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FcGoogle } from 'react-icons/fc'
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, googleProvider } from '../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import user from '../assets/user.webp'


const Register = ({ SetisAuth}) => {

  const [ Name, setName] = useState('')
  const [ Email, setEmail ] = useState('')
  const [ Password, setPassword ] = useState('')
  const [ Photo, setPhoto ] = useState('')

  

  const Navigate = useNavigate()

  const googleSignIn = async () =>{
    try{
      await signInWithPopup(auth, googleProvider)
      SetisAuth(true)
      localStorage.setItem("isAuth", true)
      Navigate('/')
    }catch(err){
      console.error(err)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      SetisAuth(true)
      localStorage.setItem("isAuth", true)
      Navigate('/')
      console.log(auth.currentUser.email)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage)
      // ..
    });
  }
  return (
    <div>
      <Navbar />
      <div className="signup">
        <h3>Welcome to AfriDev</h3>
        <p>AfriDev is a Community of millions of developers in Africa</p>
        <div className="google">
          <button className='googleBtn' onClick={googleSignIn}>
          <span className='icon'><FcGoogle /></span> <span>Sign in With Google</span> 
          </button>
        </div>
        <h3>OR</h3>
        <div className="emailSign">
          <form className='signin' onSubmit={handleSubmit}>
              <input type="text" placeholder='FullName...'
              onChange={(e)=>setName(e.target.value)}
              />
              <input type="email" placeholder='Email...'
               onChange={(e)=>setEmail(e.target.value)}
              />
              <input type="password" placeholder='Password...' 
               onChange={(e)=>setPassword(e.target.value)}
              />
              <div className="file">
              <input type="file" id="photo" 
               onChange={(e)=>setPhoto(e.target.value)}
              />
              <label htmlFor="photo">
                <img src={user} alt="Avatar" />
                <span>Add a photo</span>
              </label>
              </div>
              <input type="submit" value="Sign Up" className='signUpbtn' />
              <small>Already have an account? <Link to="/login"> Sign In</Link></small>
          </form>
         
        </div>
      </div>
    </div>
  )
}

export default Register
//0dHGdx49JQNBxIzy
//