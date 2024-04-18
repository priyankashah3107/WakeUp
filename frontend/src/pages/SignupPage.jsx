import React, { useState } from 'react'
import { useFirebase } from '../context/FirebaseAuth'
const SignupPage = () => {
  const firebase = useFirebase()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(firebase)

 const handleSubmit = async(ev) => {
     ev.preventDefault()
     console.log("Signin to the userr..............")
    const result = await firebase.createUserWithEmail(email, password)
    console.log("successfully Registered", result)
    alert("Successfully Registered")
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
            <button className="btn btn-primary max-w-auto mt-10">Create Account </button>
          
            </div>

            <div className='text-white mt-8'>Already have an account? 
            <a href="">Log In</a>
             </div>
          
           </div>

      </form>
    </div>
    </>
  )
}

export default SignupPage