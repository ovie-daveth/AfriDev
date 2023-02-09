import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, googleProvider } from '../firebaseConfig'

const Login = ({ SetisAuth }) => {

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
   await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    SetisAuth(true)
    localStorage.setItem("isAuth", true)
    Navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  
  }

  return (
    
    <div>
      <Navbar />

       <div className="signup signin">
        <h3>Login to Meet up great connection</h3>
        <div className="google">
          <button className='googleBtn' onClick={googleSignIn}>
            Sign in With Google <FcGoogle />
          </button>
        </div>
        <div className="emailSign">
          <form className='signin' onSubmit={handleSubmit}>
              <input type="email" placeholder='Email...' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <input type="password" placeholder='Password...' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <div className="remind">
                <input type="checkbox" id="remind"/>
                <label htmlFor="remind">Remember password</label>
              </div>
              <small><Link to="/reset">Forgot Password?</Link></small>
              <input type="submit" value="Sign UP" className='signUpbtn'/>
          </form>
        </div>
      </div> 
    </div>
  )
}

export default Login
