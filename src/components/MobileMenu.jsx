import React from 'react'


 const MobileMenu = ({handleClickMobile}) => {

  return (
    <div className='md:hidden z-40 top-0   left-0 font-KumbhSans text-black  fixed text-left'>
    <ul className={handleClickMobile ? 'pt-10 h-screen fixed  w-[60%] bg-color-light-grayish-blue ease-in-out duration-300 left-[0%]' : ' ease-in-out duration-500 fixed  h-screen w-[60%] left-[-100%]'}>
        <li className="p-3 translate-x-3 translate-y-10 ">Collections</li>
        <li className="p-3 translate-x-3 translate-y-10">Men</li>
        <li className="p-3 translate-x-3 translate-y-10 ">About</li>
        <li className="p-3 translate-x-3 translate-y-10 ">CONTACT</li>
    </ul>
</div>
  )
}

export default MobileMenu