import React from 'react'

export default function Contact() {
  return (
    <>
    <div>
      <div className="container text-center py-5">
              <h1 className='contact'>conatct section</h1>
<div className="stylish d-flex">
    <div className="half"></div>
    <i className="fa-solid fa-star"></i>
        <div className="half"></div>
</div>
      <form className=' d-flex flex-column align-items-center justify-content-center gap-5' action="">
        <input className='w-50' type="text" name="userName" id="userName" placeholder=' userName' />
        <input className='w-50' type="text" name="userAge" id="userAge" placeholder=' userAge'/>
        <input className='w-50' type="email" name="userEmail" id="userEmail" placeholder='userEmail'/>
        <input className='w-50' type="password" name="userPassword" id="userPassword" placeholder='userPassword' />
<button  className='my-4'> send message</button>
      </form>
    </div>
    </div>
    </>
  )
}
