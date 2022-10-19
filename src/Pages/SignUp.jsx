import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error){
            console.log(error)
        }
    }
    


  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover ' 
         src="https://miro.medium.com/max/1100/1*5lyavS59mazOFnb55Z6znQ.png" 
         alt="/" />
         <div className='bg-black/60 fixed top-0 left-0 h-screen'></div>
         <div className='fixed w-full px-4 py-24 z-15'>
            <div className='max-w-[450px] h-[650px] mx-auto bg-black/75 text-white '>
                <div className='max-w-[320px] mx-auto py-16 '>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4 '>
                        <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded'  type="email" placeholder='Email' autoComplete='email' />
                        <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-600 rounded'  type="password" placeholder='Password'/>
                        <button type='submit' className='bg-red-600 py-3 my-6  rounded font-bold '>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type="checkbox"/>remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'>
                            <span className='text-gray-600'>
                                Already subscribed to Netflix?
                             </span>
                             <Link to='/login'>Sign In</Link>
                        </p>
                        
                    </form>
                </div>
            </div>
         </div>
    </div>
    </>
  )
}

export default SignUp