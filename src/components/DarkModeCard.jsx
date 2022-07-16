import React from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState,useEffect } from 'react';
import shop from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import AddCart from './AddCart';

 const DarkModeCard = ({theme,handleMode,click,handleClick}) => {

  return (
    <div className="flex lg:gap-10 gap-3 items-center justify-center ">
    <img onClick={() => handleClick()} className="mr-auto md:ml-auto ml-0 block cursor-pointer" src={shop} alt="shop" />
    <img className="md:max-h-10 block h-8 hover:border-color-orange hover:border-2 hover:rounded-full" src={avatar} alt="avatar" />
    <DarkModeSwitch
        className="block"
        checked={theme}
        onChange={handleMode}
        size={30}
        moonColor={"black"}
    />
</div>

  )
}

export default DarkModeCard