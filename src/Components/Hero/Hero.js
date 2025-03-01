import React from 'react';
import './Hero.css';
import f1 from '../../images/f1.jpg'
import f2 from '../../images/f2.jpg'
import f3 from '../../images/f3.jpg'
import f4 from '../../images/f4.jpg'
import f5 from '../../images/f5.jpg'
import f6 from '../../images/f6.jpg'

const Hero = () => {
    return (
       <div className='container'>
                 <div className='bg-brand'>
            <h2>Category</h2>
            <div className='d-flex flex-warp hero-container'>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2'>
                    <img src={f1} className='img-fluid' alt='hero-product'/>
                    <p className='card-title'>Lorem ipsum dolor sit amet, consectetur</p>
                    <h4 className='card-price'>৳300</h4>
                    <h4 className='card-text'>৳100<strike className='text-muted'>-30%</strike></h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2'>
                    <img src={f2} className='img-fluid' alt='hero-product'/>
                    <p className='card-title'>Lorem ipsum dolor sit amet, consectetur</p>
                    <h4 className='card-price'>৳300</h4>
                    <h4 className='card-text'>৳100<strike className='text-muted'>-30%</strike></h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2'>
                    <img src={f3} className='img-fluid' alt='hero-product'/>
                    <p className='card-title'>Lorem ipsum dolor sit amet, consectetur</p>
                    <h4 className='card-price'>৳300</h4>
                    <h4 className='card-text'>৳100<strike className='text-muted'>-30%</strike></h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2'>
                    <img src={f4} className='img-fluid' alt='hero-product'/>
                    <p className='card-title'>Lorem ipsum dolor sit amet, consectetur</p>
                    <h4 className='card-price'>৳300</h4>
                    <h4 className='card-text'>৳100<strike className='text-muted'>-30%</strike></h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2'>
                    <img src={f5} className='img-fluid' alt='hero-product'/>
                    <p className='card-title'>Lorem ipsum dolor sit amet, consectetur</p>
                    <h4 className='card-price'>৳300</h4>
                    <h4 className='card-text'>৳100<strike className='text-muted'>-30%</strike></h4>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 p-2'>
                    <img src={f6} className='img-fluid' alt='hero-product'/>
                    <p className='card-title'>Lorem ipsum dolor sit amet, consectetur</p>
                    <h4 className='card-price'>৳300</h4>
                    <h4 className='card-text'>৳100<strike className='text-muted'>-30%</strike></h4>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Hero;