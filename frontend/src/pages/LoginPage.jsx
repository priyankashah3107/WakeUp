import React, { useState } from 'react'
import { useFirebase } from '../context/FirebaseAuth'
import { FaGoogle } from 'react-icons/fa6'
import SignupPage from './SignupPage'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  const firebase = useFirebase()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(firebase)

 const handleSubmit = async(ev) => {
     ev.preventDefault()
     console.log("Signin to the userr..............")
    const result = await firebase.SignInWithEmail(email, password)
    console.log("successfully SignIn", result)
    alert("Successfully SignIn")
 }

  return (
    <>
    <div className='w-full h-screen   '>
      <form action="" className='md:w-[500px] md:h-[550px] w-full h-full bg-black opacity-40 rounded-lg md:relative md:top-[12%] md:left-[35%]'
         onSubmit={handleSubmit}
      >


        <div className='justify-center items-center text-center'>

       
           
           <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs mt-28 ml-2 text-black" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
          

           
           <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs mt-12 ml-2 text-black" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
            
            <div className='flex flex-col gap-4 w-[73%] md:w-[64%] ml-16 md:ml-24'>
            <button className="btn btn-primary max-w-auto mt-10">Log In </button>
           <button className="btn btn-accent " onClick={firebase.LoginWithGoogle}><FaGoogle /> <span>Sigin With Google</span> </button> 
            </div>

            <div className='text-white mt-8'>Don't have an account? 
            <a href="/signin">Sign Up</a>
             </div>
          
           </div>

      </form>
    </div>
    </>
  )
}

export default LoginPage