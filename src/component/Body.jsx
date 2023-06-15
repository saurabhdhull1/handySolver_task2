import React, { useState } from 'react'
import navimg from "../assets/navimg.png"
import logo from "../assets/logo.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import comma from "../assets/comma.png"
import arrow from "../assets/downmenu.png"
import fb from "../assets/fb.png"
import twitter from "../assets/twitter.png"
import cloud from "../assets/cloud.png"

function Body() {
    const imgages = [img1, img2, img3, img4]
    const [reviews, setReviews] = useState([
        {
            review: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
            name: "Martha",
        },
        {
            review: "Lorem ipsum dolor sit . Commodi at amet itet deserunt? Sint? amet it",
            name: "John",
        },
        {
            review: "voluptas sit aspernatur aut odit aut fugit, sed quia Nemo enim ipsam voluptatem quia ",
            name: "Sam",
        },
    ])
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <div className='relative xl:top-[-70px]'>
                <img src={logo} alt="" className='myLogo' />
                <img src={navimg} alt="" />
            </div>
            {/* */}
            <div className='topwhite'>
                <div className='topwhitecontent'>Sed fringilla <br /> mauris sit amet <br /> nibh donec <br /></div>
            </div>

            <div className='topyellow'>
                <div className="topyellowcontent1">
                    <h2>ABOUT US</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                </div>
                <div className="topyellowcontent2">

                    <div>
                        <span>01</span>
                        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
                    </div>
                    <div>
                        <span>02</span>
                        <span>Aenean commodo ligula eget dolor.</span>
                    </div>
                    <div>
                        <span>03</span>
                        <span>Cum sociis natoque penatibus et magnis dis parturient montes</span>
                    </div>
                    <div>
                        <span>04</span>
                        <span>Donec quam felis, ultricies nec, pellentesque eu, pretium</span>
                    </div>
                    <div>
                        <span>05</span>
                        <span>Nulla consequat massa quis enim.</span>
                    </div>
                    <button className='btn mybtn mt-10 px-5 py-2'>GET IN TOUCH</button>
                </div>

                <div className="topyellowcontent3">

                    {
                        imgages.map((img, index) => {
                            return (
                                <div key={`image-${index}`}>
                                    <img src={img} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='h-[1100px] topyellowspace'>h</div>


            <div className="aftertopyellow" key={"aftertopyellow - " + currentIndex}>
                <div className='aftertopyellow1'>
                    <div className="comma">
                        <img src={comma} alt="" />
                        <img src={comma} alt="" />
                    </div>
                    <div style={{}}>{reviews[currentIndex].review}</div>
                </div>
                <div className='aftertopyellowname'>-{reviews[currentIndex].name}</div>
                <div className='aftertopyellowControl'>
                    <div style={currentIndex === 0 ? { opacity: ".3" } : { opacity: "1" }}>
                        <img
                            src={arrow}
                            alt="Previous"
                            onClick={() => setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : 0)}
                        />
                    </div>
                    <div style={currentIndex === 2 ? { opacity: ".3" } : { opacity: "1" }}>
                        <img
                            src={arrow}
                            alt="Next"
                            onClick={() => setCurrentIndex((prevIndex) => prevIndex < reviews.length - 1 ? prevIndex + 1 : prevIndex)}
                        />
                    </div>
                </div>

            </div>


            <div className='secondyellowdiv'>
                <div className='secondyellowdivtxt'>SOCIAL</div>
                <div className='secondyellowdivIcon'>
                    <div className='followUs'>Follow us <img src={fb} alt="" /></div>
                    <div className='likeUs'><div>Like us <img src={twitter} alt="" /></div> </div>
                </div>
            </div>


            <div className="services">
                <h2>SERVICES</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
            </div>

            <div className="servicesdiv">
                <div>
                    <img src={cloud} alt="" />
                    <p>Service 1</p>
                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet </p>
                    <p className='cursor-pointer'>Know More →</p>
                </div>
                <div>
                    <img src={cloud} alt="" />
                    <p>Service 2</p>
                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet </p>
                    <p className='cursor-pointer'>Know More →</p>
                </div>
                <div>
                    <img src={cloud} alt="" />
                    <p>Service 3</p>
                    <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet </p>
                    <p className='cursor-pointer'>Know More →</p>
                </div>
            </div>
            <div className='p-10 md:px-40 md:relative top-20'><button className='btn mybtn mt-0 px-20 py-2'>View More</button></div>

            <div className='lastyellowdiv'></div>

            <div className='flex align-middle justify-end'>
                <div className="contactUs">
                    <h2>CONTACT US</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                    <div className="form">
                        <div>
                            <input type="text" placeholder='NAME' />
                            <input type="text" placeholder='EMAIL ADDRESS' />
                        </div>
                        <div>
                            <input type="text" placeholder='PHONE' />
                            <input type="text" placeholder='COUNTRY' />
                        </div>
                        <div className='submitDiv'>
                            <button className='btn mybtn px-20 py-2'>SUBMIT</button>
                        </div>
                    </div>
                </div>



            </div>
            <div className="footer">
                <span>Copyright © 2023 Escapade,  All Rights Reserved | made for handysolver</span>
            </div>
        </>
    )
}

export default Body