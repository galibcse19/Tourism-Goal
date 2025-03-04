import React from 'react';
import { CiYoutube } from 'react-icons/ci';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-white lg:px-20 md:px-20 px-4  pb-8 pt-12 mt-6'>
            <div className='grid lg:grid-cols-2 grid-cols-1 mb-8'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:mb-0 mb-10'>
                <div>
                     <button className='font-bold text-4xl '>Tourism<span className='text-blue-500'>Goal</span></button>
                     <div className='flex justify-start my-4'>
                         <span className='text-2xl'><FaInstagram /></span>
                         <span className='mx-4 text-2xl'><FaLinkedinIn /></span>
                         <span className='text-2xl'><CiYoutube /></span>
                         <span className='ml-4 text-2xl'><FiFacebook /></span>
                     </div>
                     <div className=''>
                        <p className='font-semibold text-lg mt-10'>Conatct</p>
                        <div className='opacity-75'>
                        <p >Dhaka, Bangladesh</p>
                        <p >+8801711111111</p>
                        <p >tourismgoalinfo@gmail.com</p>
                        </div>
                     </div>
                </div>
                <div>
                    <p className='font-bold text-lg mb-4 lg:mt-0 md:mt-0 mt-4'>Links</p>
                    <div className='opacity-75'>
                    <Link><p>Home</p></Link>
                    <Link><p className='my-2'>Top News</p></Link>
                    <Link><p>Destination to go</p></Link>
                    <Link><p className='my-2'>Goals to do</p></Link>
                    <Link><p>Books & Notes</p></Link>
                    <Link><p className='my-2'>Tourism Association</p></Link>   
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div>
                    <h2 className='font-semibold text-lg mb-4'>About Us</h2>
                    <div className='opacity-75'>
                    <Link to={'/whoWeAre'}><p>Who we are</p></Link>
                    <Link><p className='my-2'>What we do</p></Link>
                    <Link to={'/outStory'}><p>Our story</p></Link>
                    </div>
                    <div className='col-span-3 mt-10'>
                        <h2 className='font-bold text-lg mb-3'>The Daily Newsletter</h2>
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2'>
                             <input type="text" placeholder="Enter Your Email" className="input input-bordered lg:w-[200%] md:w-[220%] w-[220%]" />
                            </div>
                            <div className='ml-2'>
                             <button className="btn btn-primary font-semibold text-lg py-4 px-6 lg:ml-40 md:ml-40 ml-20">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-lg mb-4'>Insights</h2>
                    <div className='opacity-75'>
                    <Link to={'photoGallery'}><p>Photo Gallery</p></Link>
                    <Link><p className='my-2'>Articles</p></Link>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-lg mb-4'>Others</h2>
                    <div className='opacity-75'>
                    <Link to={'/privacyPolicy'}><p>Privacy & Policy</p></Link>
                    <Link><p className='my-2'>Faqs</p></Link>
                    <Link to={'/jobs'}><p>Jobs</p></Link>
                    </div>
                </div>
                
            </div>
            </div>
            <hr />
            <div className='lg:mt-8 md:mt-8 mt-4'>
                <p className='text-center lg:text-lg md:text-lg text-md'>© copyright Technosoft. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;