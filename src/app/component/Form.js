"use client"
import React from 'react';
import { useState } from 'react';

  
export default function Form() {
  const [value,setValue]=useState({
    firstname:"",
    lastname:"",
    email:"",
    message:""
  })
  const  [error,setError]=useState({})
  const handleInput=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
  }
    const addData=async(e)=>{
    e.preventDefault();
    setError(Validation)
    
    if(value.firstname && value.lastname && value.email && value.message!=="")
    {
          try{
            const response=await fetch('/api/dbconnection',{
              method:"POST",
              headers:{
                "Content-Type":"application.json()"
              },
              body:JSON.stringify(value)
            })
              if(response.ok)
              { 
                alert("Your Message send Successfully!!")
              }
             
          }
          catch(err){console.log(err
            )}
          }        
      }

  const Validation=()=>{
  let error={}

  if(!value.firstname){
    error.firstname="Required"
  }
  if(!value.lastname){
    error.lastname="Required"
  }
  if(!value.email){
    error.email="Required"
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email))
  {
    error.email="Enter valid Email"
  }
  if(!value.message){
    error.message=" Required"
  }
  return error;
}


  return (
    
    <div className="bg-primary max-w-screen-2xl  pt-10 tk-pt-serif body-letter-spacing mx-auto ">
            <div className="grid md:grid-cols-2 items-start gap-16 p-12 mx-auto max-w-7xl  text-white  rounded-md sm:grid-cols-1">
              <div >
                <h2 className='test-white pb-7 font-bold text-3xl'>CONTACT US</h2>
            <a href="mailto:info@denovellis-studio.com" className="mt-3 hover:text-secondary hover:-translate-y-0.5 hover:text-md transform transition">INFO@DENOVELLIS-STUDIO.COM</a>
            <br></br>
          <a href="tel:07484 651901" className='mt-3 hover:text-secondary hover:-translate-y-0.5 hover:text-md transform transition'>07484 651901</a>          
              </div>
            
                <form className="ml-auto float-start  ">
                    <label className='' htmlFor='firstname'>First name</label> 
                    {error.firstname && <span className='my-2 text-red-500 text-sm'> {error.firstname}</span>}
                    <input type='text' id="firstname" name="firstname" placeholder="Firstname" onChange={handleInput} value={value.firstname} className="w-full rounded-md py-4  px-4 mb-4 border text-sm outline-[#a38c2e] text-black" />

                    <label className=' mt-4' htmlFor='lastname' >Last name</label>
                    {error.lastname && <span className='my-2 text-red-500 text-sm'> {error.lastname}</span>}
                    <input type='text' id="lastname"  name="lastname" placeholder="Lastname"  onChange={handleInput}  value={value.lastname} className="w-full rounded-md py-4 mb-4 px-4 border text-sm outline-[#a38c2e] text-black" />
                    <label className='mt-4' htmlFor='email'>Email</label>
                    {error.email && <span className='mx-2 my-2 text-red-500 text-sm'>{error.email}</span>}
                    <input type='email' id="email" placeholder='email' name="email"  onChange={handleInput} value={value.email}
                        className="w-full rounded-md py-4 px-4 mb-6 border text-sm outline-[#a38c2e] text-black" />

                    <label className='mt-4' htmlFor='message'>Message</label>
                    {error.message && <span className='my-2 text-red-500 text-sm'> {error.message}</span>}
                    <textarea id="message" placeholder='Message' name="message" rows="6"  onChange={handleInput} value={value.message}
                        className="w-full text-black rounded-md mb-6 px-4 border text-sm pt-2.5 outline-[#a38c2e]"></textarea>
                    <button type='submit' onClick={addData} className='my-4 w-32 bg-white text-black rounded-md py-3 hover:bg-[#a38c2e]'>Send Email</button>
                </form>
            </div>
            <div className='h-20 md:hidden'></div>
        </div>
     
   
  )
}
