import React from 'react'

export default function Footer() {
return (
    <>
    <div className='footer text-center'>
    <div className="container py-4">
        <div className="row g-5 py-5">
            <div className="col-4">
        <h3>LOCATION</h3>
        <h5>2215 John Daniel Drive</h5>
        <p>Clark, MO 65243</p>
            </div>
                        <div className="col-4">
        <h3>AROUND THE WEB</h3>
<div id='icon'><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-linkedin"></i><i class="fa-solid fa-globe"></i></div>            </div>
                        <div className="col-4">
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
        </div>

    <div className="margine py-3 text-center">
        <p>Copyright © Your Website 2021</p>
    </div>
    </>
)
}
