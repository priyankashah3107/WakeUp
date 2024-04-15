import React, { useState } from 'react'
import { useFirebase } from '../context/FirebaseAuth'
import { FaGoogle } from 'react-icons/fa6'
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
    <div className='w-full md:h-screen  bg-white '>
      <form action="" className='w-[500px] h-[500px] bg-black opacity-40 rounded-lg md:relative top-[12%] left-[35%]'
         onSubmit={handleSubmit}
      >


        <div className='justify-center items-center text-center'>

       
           <label className='text-white  gap-6  text-xl'>Email:
           <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs mt-28 ml-2 text-black" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
           </label>

           <label className='text-white  gap-6  ml-9 text-xl'>Password:
           <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs mt-12 ml-2 text-black" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
           </label>
           <button className="btn btn-primary max-w-auto mt-10">SignIn </button>
           <button className="btn btn-accent ml-4" onClick={firebase.LoginWithGoogle}><FaGoogle /> <span>Sigin With Google</span> </button>
           </div>

      </form>
    </div>
    </>
  )
}

export default LoginPage