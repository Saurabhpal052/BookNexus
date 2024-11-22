import React from 'react'
import Login from './Login'
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
function Signup() {
  const location=useLocation();
  const from=location.state?.from?.pathname || "/";
  const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit =async (data) => {
        const userInfo={
          fullname:data.fullname,
          email:data.email,
          password:data.password
        }
        await axios.post("https://book-nexusapi.vercel.app/user/signup",userInfo)
        .then((res)=>{
          console.log(res.data);
          if(res.data){
            toast.success('signup Successfully');
            navigate(from,{replace:true});
            setTimeout(()=>{
              window.location.reload();
            },1000);
          }
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err)=>{
           if(err.response){
            console.log(err);
            toast.error("Error: "+err.response.data.message);
           }

          
        })
      }
  return (
    <div className='flex h-screen items-center justify-center '>
         <div className='w-[600px]' >
  <div className='modal-box' >
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span><br/>
        <input type='text' placeholder='Enter your FUll name' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("fullname", { required: true })}/><br/>
        {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span><br/>
        <input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}/><br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
   {/*password */}
   <div className='mt-4 space-y-2'>
        <span>Password</span><br/>
        <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })}/><br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
  {/*button*/}
  <div className='flex justify-around mt-4'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign up</button>
    <p className='text-xl'>Have account? <button className='text-blue-500 underline cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login </button><Login/></p>

  </div>
  </form>

  </div>
</div>
    </div>
  )
}

export default Signup
