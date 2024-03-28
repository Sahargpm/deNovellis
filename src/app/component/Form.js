"use client"
import React from 'react';
import { useState } from 'react';


export default function Form() {

  const initialErrorState={
    lastname:false,
    email:false,
    message:false
  }
  const [dataSend, setDataSend] = useState({})
  const [error, setError] = useState(initialErrorState)
  const [success, setSuccess] = useState(false)
  const [status, setStatus] = useState(false)
  const [result, setResult] = useState("")

  const handleInput=async(e)=>{
    setDataSend({...dataSend,[e.target.name]:e.target.value})
    setError(initialErrorState);
    let hasError=false;
    await Object.keys(initialErrorState).map((error)=>{
    if(dataSend[error]==""){
    setError({...error,[error]:true});
   hasError=true
    }});
    if(hasError) return;
    }
    const addData=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch('/api/dbconnection',{
        method:"POST",
        headers:{
          "Content-Type":"application.json()"
        },
        body:JSON.stringify(dataSend)
      })
        if(response.ok)
        {
          alert("Sussess")
        }
        else{
          console.log("Data not added")
        }
    
    }
    catch(err){console.log(err
      )}
    }

//   const handleSubmit=async (event)=>{
//     event.preventDefault();
//     setError(initialErrorState);
//     let hasError=false;
//     await Object.keys(initialErrorState).map((error)=>{
//     if(dataSend[error]==""){
// setError({...error,[error]:true});
//    hasError=true
//     }});
//     if(hasError) return;
//     console.log("Error",dataSend)
//   }
  
  //   const data={
  //     firstname:String(event.target.firstname.value),
  //     lastname:String(event.target.lastname.value),
  //     email:String(event.target.email.value),
  //     message:String(event.target.message.value)
  //   }
  //   console.log(data)

  // const response=await fetch('/api/contact' ,{
  //   method:"POST",
  //    headers:{
  //     "Contact-Type":"application.json"
  //    },
  //   body:JSON.stringify(data)
  // })
  // if(response.ok){
  //   console.log("Message send Successfully" )
  // }
  // if(!response.ok){
  //   console.log("Error Message not send",response)
  // }


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
                    {error.firstname && !dataSend.firstname &&<span className=' my-2 text-red-500 text-sm'> (Required)</span>}

                    <input type='text' id="firstname" name="First Name" placeholder="Firstname" required="" onBlur={()=>setError({...error,firstname:true})} onChange={handleInput} className="w-full rounded-md py-4  px-4 mb-4 border text-sm outline-[#a38c2e] text-black" />
                   
                    <label className=' mt-4' htmlFor='lastname' >Last name</label>
                    {error.lastname && !dataSend.lastname &&<span className='my-2 text-red-500 text-sm'> (Required)</span>}

                    <input type='text' id="lastname" required="" name="Last Name" placeholder="Lastname"  onBlur={()=>setError({...error,lastname:true})} onChange={handleInput} className="w-full rounded-md py-4 mb-4 px-4 border text-sm outline-[#a38c2e] text-black" />

                    <label className='mt-4' htmlFor='email'>Email</label>
                    {error.email && (!dataSend.email ||!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(dataSend.email)) &&<span className='mx-2 my-2 text-red-500 text-sm'>Enter your Email Address(Required)</span>}

                    <input type='email' id="email" placeholder='Email' name="Email" onBlur={()=>setError({...error,email:true})} onChange={handleInput}
                        className="w-full rounded-md py-4 px-4 mb-6 border text-sm outline-[#a38c2e] text-black" />

                    <label className='mt-4' htmlFor='message'>Message</label>
                    {error.message && !dataSend.message &&<span className='mx-2 my-2 text-red-500 text-sm'>(Required)</span>}
                    <textarea id="message" placeholder='Message' name="Message" rows="6" onBlur={()=>setError({...error,message:true})} onChange={handleInput}
                        className="w-full text-black rounded-md mb-6 px-4 border text-sm pt-2.5 outline-[#a38c2e]"></textarea>

                    <button type='submit' onClick={addData} className='my-4 w-32 bg-white text-black rounded-md py-3 hover:bg-[#a38c2e]'>Send Email</button>
                {status && <div className='my-8 text-center text-xl text-white transition duration-500 ease-in-out'>Sending....</div>}
                  {success &&<div className='text-secondaryColor my-8 text-center text-xl'>{result}</div>}  
                </form>
            </div>
            <div className='h-20 md:hidden'></div>
        </div>
     
   
  )
}
