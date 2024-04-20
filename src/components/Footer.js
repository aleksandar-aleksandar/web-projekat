import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <>
    <div className='separator-line'>
    </div>
    <div className='footer-div'>
        

        <div className='sm-links'>
            <h3>Our social media</h3>
            <a href = "https://www.instagram.com/">Instagram</a>
            <a href = "https://www.instagram.com/">Facebook</a>
        </div>

        <div className='contact-info'>
            <h3>Contact with us!</h3>
            <h4>Phone number: 62552325</h4>
            <h4>Adress: 95th Street 5</h4>
        </div>

    </div>
    </>
  )
}

export default Footer