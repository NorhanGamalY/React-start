import React from 'react'
export default function Portfolio() {
  return (
    <>
    <div id='portfolio' className='text-center pt-5'>
              <h1 className='contact'>portfolio</h1>
<div className="stylish d-flex">
    <div className="half"></div>
    <i className="fa-solid fa-star"></i>
        <div className="half"></div>
</div>
    </div>
    <div className="container pb-5 ">
    <div id='images-contaner' className='row g-5 text-center justify-content-center align-items-center'>
      <div className='port-image col-4'>
            <img className='w-100' src="portfolioImages/poert1.png" alt="pic1" />
            <div className="layer"><i class="fa-solid fa-plus"></i></div>
      </div>
 <div className='port-image col-4'>
            <img className='w-100' src="portfolioImages/port2.png" alt="pic2" />
            <div className="layer"><i class="fa-solid fa-plus"></i></div></div>
 <div className='port-image col-4'>
            <img className='w-100' src="portfolioImages/port3.png" alt="pic3" />
            <div className="layer"><i class="fa-solid fa-plus"></i></div></div>
            <div className='port-image col-4'>
            <img className='w-100' src="portfolioImages/poert1.png" alt="pic1" />
            <div className="layer"><i class="fa-solid fa-plus"></i></div>
      </div>
 <div className='port-image col-4'>
            <img className='w-100' src="portfolioImages/port2.png" alt="pic2" />
            <div className="layer"><i class="fa-solid fa-plus"></i></div></div>
 <div className='port-image col-4'>
            <img className='w-100' src="portfolioImages/port3.png" alt="pic3" />
            <div className="layer"><i class="fa-solid fa-plus"></i></div></div>
 
</div>
</div>


{/* </div> */}

    </>
  )
}
