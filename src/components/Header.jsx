import React from 'react'
import { useState } from 'react'
import logo from '../images/logo.svg'
import menu from '../images/icon-menu.svg'
import close from '../images/icon-close.svg'
import MobileMenu from './MobileMenu';
import DarkModeCard from './DarkModeCard';
import shop from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'






const Header = ({theme,handleMode,click,handleClick}) => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

        return (
            <header>
            <div className="" >
                <nav className='w-full p-10  bg-color-white  '>
                    <div className=" flex   text-left  justify-between items-center ">
                        {nav ? <img onClick={handleNav}  src={close} alt="close" className={!nav ? " opacity-0" : "opacity-1 z-50 mt-1 cursor-pointer md:hidden fixed inline   -translate-x-4 ease-in-out duration-500" } /> : <img onClick={handleNav} src={menu} alt="menu" className="mt-1 ease-in-out duration-500 opacity-1 absolute -translate-x-4  cursor-pointer md:hidden"/>}
                        <img className="md:mr-6  mr-auto translate-x-5 md:translate-x-0  md:relative" src={logo} alt="logo" />
                        <ul className="md:flex  mr-auto cursor-pointer text-left pt-2 gap-6 text-sm font-KumbhSans hidden ">
                            <li className="hover:text-color-orange hover:duration-500 hover:transition-colors">Collections</li>
                            <li className="hover:text-color-orange hover:duration-500 hover:transition-colors">Men</li>
                            <li className="hover:text-color-orange hover:duration-500 hover:transition-colors">Women</li>
                            <li className="hover:text-color-orange hover:duration-500 hover:transition-colors">About</li>
                            <li className="hover:text-color-orange hover:duration-500 hover:transition-colors">Contact</li>
                        </ul>
                        <MobileMenu  handleClickMobile={nav} />
                        <DarkModeCard theme={theme} handleMode={handleMode} click={click} handleClick={handleClick} />

                    </div>


               

                    <hr className='lg:translate-y-6 hidden lg:block'/>

                </nav>


            

            </div>
            </header>
        )
    }

    export default Header