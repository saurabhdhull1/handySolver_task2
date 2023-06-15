import React, { useState } from 'react'
import downmenu from "../assets/downmenu.png"

function Navbar() {

    const [showMenu, setshowMenu] = useState(true)
    const [showMenuIcon, setshowMenuIcon] = useState(true)

    const handleMenu = () => {
        setshowMenuIcon(!showMenuIcon);
        setshowMenu(!showMenu)
    }
    //  {
    //                 showMenuIcon ?
    //                     <img src={downmenu}
    //                         alt=""
    //                         className='cursor-pointer h-[60px]'
    //                         onClick={handleMenu} /> :
    //                     <img src={menucross}
    //                         alt=""
    //                         className='cursor-pointer h-[60px]'
    //                         onClick={handleMenu} />
    //             }
    return (
        <>
            {/* mobile menu */}
            <div className='mobnavbar'>
                <img src={downmenu}
                    alt=""
                    style={showMenuIcon ? { transform: 'rotate(0deg)', transition: "all .5s" } : { transform: 'rotate(180deg)', transition: "all .5s" }}
                    className='cursor-pointer h-[60px]'
                    onClick={handleMenu} />
            </div>

            <div
                className='bg-[#FFC001CC] py-10 sm:py-0 px-10 flex align-middle justify-end sm:flex-row flex-col gap-[20px] sm:gap-[30px] fixed w-[100%] top-0 shadow-md z-[99] mobmynavbar'
                style={showMenu ? { transform: "translateY(-130%)", transition: "all .6s" } : { transform: "translateY(0%)", transition: "all .6s" }}
            >
                <span className='sm:p-5 ' onClick={handleMenu}>Home</span>
                <span className='sm:p-5 ' onClick={handleMenu}>About Us</span>
                <span className='sm:p-5 ' onClick={handleMenu}>Social</span>
                <span className='sm:p-5 ' onClick={handleMenu}>Services</span>
                <span className='sm:p-5 ' onClick={handleMenu}>Contact Us</span>
            </div>


            {/* laptop menu */}
            <div className='bg-[#FFC001CC] py-10 sm:py-0 px-10 flex align-middle justify-end sm:flex-row flex-col gap-[40px] sm:gap-[50px] fixed xl:sticky w-[100%] top-0 shadow-sm mynavbar'>
                <span className='sm:p-5 ' onClick={handleMenu}>Home</span>
                <span className='sm:p-5 ' onClick={handleMenu}>About Us</span>
                <span className='sm:p-5 ' onClick={handleMenu}>Social</span>
                <span className='sm:p-5 ' onClick={handleMenu}>Services</span>
                <span className='sm:p-5 ' onClick={handleMenu}>Contact Us</span>
            </div>
        </>
    )
}

export default Navbar