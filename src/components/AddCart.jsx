import React from 'react'
import { ImMinus, ImPlus } from "react-icons/im";
import { useState, useEffect } from 'react'
import shop from '../images/icon-cart.svg'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import DarkModeCard from './DarkModeCard';
import thumbOne from "../images/image-product-1-thumbnail.jpg"
import deleteIcon from "../images/icon-delete.svg"




const AddCart = ({ theme, click }) => {

  const [count, setCounter] = useState(0)
  const [price, setPrice] = useState(0)
  const [add, setAdd] = useState(false)
  const [del, setDel] = useState(false)
  const [empty, setEmpty] = useState(" Your cart is empty. ")
  const limited = "Fall Limited Edition Sneakers";

  const addButton = () => {
    setAdd(!add)
    setPrice(count)
    setEmpty("");
  }
  const deleteButton = () => {
    setDel(!del)
    setPrice(0)
    setEmpty(" Your cart is empty. ")

  }
  const emptyText = () => {
    if (price == 0) {
      setEmpty(" Your cart is empty. ")
    } if (price == 0 && !del) {
      setEmpty(" Your cart is empty. ")

    } if (price > 0 && !add) {
      setEmpty("");
    }
  }


  return (

    <div className={!theme ? " text-white font-KumbhSans   lg:px-28 lg:p-2   p-5" : " text-white font-KumbhSans  lg:px-28 lg:p-2   p-5 "}>
      <div className={click ? ' h-[29%] shadow-2xl drop-shadow-2xl lg:h-[42%] px-3 absolute z-30 bg-white w-[95%]  md:w-[65%]  lg:w-[27%] top-[0%] bg-white-black ease-in-out duration-300 rounded-xl  left-1/2 -translate-x-1/2 translate-y-1/2 lg:translate-y-1/3 lg:translate-x-full lg:right-0 lg:-ml-28' : 'bg-white lg:right-0 lg:-ml-28 lg:translate-x-full px-3 z-30 rounded-xl shadow-2xl   left-1/2 -translate-x-1/2  translate-y-1/2  lg:translate-y-1/3 ease-in opacity-0  absolute duration-300 h-[0%]  w-[95%]  md:w-[65%]  lg:w-[27%] top-[0%] '}>
        <h2 className="text-color-dark-blue font-KumbhSans text-xl font-medium">Cart</h2>
        <hr className="w-full mt-1" />
        <p className="text-color-dark-grayish-blue text-center top-1/2 mt-12 translate-y-1/2 font-KumbhSans text-lg ">
          {empty}   </p>
        <div className={!price === 0 || !empty ? "flex  flex-wrap lg:gap-y-3 lg:gap-x-2  gap-x-2  gap-y-7 text-left" : "hidden"}>
          <img className='h-16 cursor-pointer   rounded-md ' src={thumbOne} alt="thumbnail" />
          <img onClick={() => deleteButton()} src={deleteIcon} alt="delete" className="h-5 cursor-pointer right-5 absolute mt-8 " />
          <p className="text-color-dark-grayish-blue   font-KumbhSans text-base">{limited} <br /> $125.00 x {price} <strong className='font-bold text-black'>${price * 125}</strong></p>
          <button className="bg-color-orange  min-w-full h-16 lg:h-12 text-white  font-bold  rounded-lg text-center  items-center hover:opacity-75" >Checkout</button>
        </div>
      </div>
      <div className='gap-y-6 grid '>
        <span className='text-color-orange text-lg font-bold block uppercase'>Sneaker Company</span>
        <h1 className={!theme ? "text-color-black  font-bold text-3xl lg:text-4xl" : "text-white  font-bold text-3xl lg:text-4xl"}>Fall Limited Edition Sneakers</h1>
        <p className={!theme ? "text-color-dark-grayish-blue" : "text-white"}>These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className=' flex gap-3 lg:block justify-between '>
          <span className={theme ? "font-bold text-3xl " : "text-black text-3xl font-bold"}>$125.00</span>
          <span className="mr-auto text-xl lg:ml-4  text-color-orange bg-color-pale-orange rounded-lg font-bold p-1">50%</span>
          <span className="line-through lg:block lg:mt-5 text-lg font-medium text-color-grayish-blue">$250.00</span>
        </div>
        <div className=" lg:flex lg:gap-6 ">
          <button className='lg:w-forty w-full    bg-color-light-grayish-blue items-center text-black h-14 p-5 rounded-lg flex justify-between '><ImMinus className="text-color-orange" onClick={() => count ? setCounter(count - 1) : setCounter(count * 0)} />
            {count}
            <ImPlus className="text-color-orange" onClick={() => setCounter(count + 1)} /></button>
          <button disabled={count === 0} onClick={() => addButton()} className="bg-color-orange mt-7  lg:mt-0  w-full text-white lg:w-fifty font-bold h-14 rounded-lg gap-2 text-center flex items-center justify-center hover:opacity-60" ><HiOutlineShoppingCart size={20} />Add to cart</button>
        </div>
      </div>















    </div>














  )
}

export default AddCart