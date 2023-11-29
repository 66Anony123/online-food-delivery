import React,{useState} from 'react'
import { motion } from 'framer-motion'
import { loginBg,logo,googleIcon } from '../assets'
import InputField from '../components/InputField'
import  {buttonClick}  from '../animations'

import {getAuth,signInWithPopup, GoogleAuthProvider} from 'firebase/auth' // To get the authentication info and the type of provider we gonna use
//signInWithPopup shows popup box with the lists of Gmail Accounts

import  {app} from "../config/firebase.config"
const Login = () => {

  const [email,setEmail] = useState("");
const [confirmPassword,setConfirmPassword] = useState("");
const [password,setPassword] = useState("");

const [signUp,setSignUp] = useState(false);

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginGoogle = async ()=>{
  await signInWithPopup(firebaseAuth, provider).then((userCred)=>{
    firebaseAuth.onAuthStateChanged(cred=>{
      if(cred){
        console.log(cred);
      }
    })
  })
}

console.log(email)
  return (
    <div className=' w-screen h-screen relative overflow-hidden flex '>
     
<div className ="flex flex-col items-center bg-slate-100 h-full w-full p-5 px-3 py-16 gap-y-5">
       {/* logo section */}
       <div className='flex items-center justify-start gap-3 w-full'>
        <img src={logo} className="w-16"/>
        <span className='font-medium text-xl'>FoodDelivery</span>

       </div>

       {/* Enter credentials */}
<div className='w-full flex flex-col items-center justify-center gap-4 px-5'>
  <InputField placeHolder={"email"} icon='' inputState={email} inputStateFunction={setEmail} type='email' />
  <InputField placeHolder={"password"} icon='' inputState={password} inputStateFunction={setPassword} type='password'/>

  {signUp && <InputField placeHolder={"Confirm Password"} icon='' inputState={confirmPassword} inputStateFunction={setConfirmPassword} type='password' signUp={signUp}/>}
  {signUp ? (
    <p>Have An Account?
    <motion.button {...buttonClick} className='underline cursor-wait text-blue-600' onClick={()=>setSignUp(false)}>LogIn!</motion.button></p>
  ):(
    <p>Need An Account?
    <motion.button {...buttonClick} className='underline cursor-wait text-red-600' onClick={()=>setSignUp(true)}>Create One!</motion.button></p>
  )}
<motion.button {...buttonClick} className='w-full  rounded-md px-3 py-2 bg-red-500 hover:bg-red-600'>{signUp ? 'SignUp':'Login'}</motion.button>
<div className='w-full h-[1px] bg-black'></div>

<motion.div {...buttonClick} onClick={loginGoogle} className='flex flex-row px-16 py-[11px]  bg-gray-600 cursor-wait gap-6 '>
 
 <img src={googleIcon} alt='googsIcons' className='h-10 w-10'/> <p className='text-white'>Easy Peasy Google Sign In</p>
</motion.div>
</div>
 </div>
      
      <img src={loginBg} alt='backgroundImage2' className='w-2/5 h-full object-cover '/>
      <img src={loginBg} alt='backgroundImage1' className='w-2/5 h-full object-cover ml-auto'/>
  
      </div>
  )
}

export default Login