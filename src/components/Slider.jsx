import { LazyResult } from 'postcss'
import React from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { useState,useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';

import productOne from "../images/image-product-1.jpg"
import productTwo from "../images/image-product-2.jpg"
import productThree from "../images/image-product-3.jpg"
import productFour from "../images/image-product-4.jpg"
import thumbOne from "../images/image-product-1-thumbnail.jpg"
import thumbTwo from "../images/image-product-2-thumbnail.jpg"
import thumbThree from "../images/image-product-3-thumbnail.jpg"
import thumbFour from "../images/image-product-4-thumbnail.jpg"
import DarkModeCard from './DarkModeCard';



const Slider = ({ theme, handleMode }) => {

  const [slider, setSlider] = useState(0)
  const [items, setImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [productOne, productTwo, productThree, productFour];
  const imagesThumb = [thumbOne, thumbTwo, thumbThree, thumbFour];

  const counterPlus = () => {

    setImage(true)
    setSlider(slider + 1)


  }
  const counterMinus = () => {
    setImage(false)
    setSlider(slider - 1)


  }

  const doSlide = () => {

    if (slider < 0) {
      setSlider(3)
    }
    if (slider > 3) {
      setSlider(0)
    }


  }
 

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(false);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  doSlide();
  return (
    <figure>
      <div className=" justify-between  lg:p-4  lg:top-0   ">
        <MdOutlineNavigateNext onClick={() => counterMinus()} size={40} className="lg:hidden cursor-pointer bg-white rounded-full ml-4 p-2 absolute top-1/4 rotate-180  z-10 " />
        <MdOutlineNavigateNext onClick={() => counterPlus()} size={40} className="lg:hidden cursor-pointer bg-white rounded-full mr-4 p-2  absolute top-1/4  right-0 z-10 " />       
        <img onClick={() => setIsViewerOpen(true)}  src={images[slider]} alt="images" className={items ? 'lg:cursor-pointer  max-w-full h-auto top-0 lg:w-3/5  lg:translate-x-1/2    lg:rounded-lg lg:ml-12  ' : '  lg:cursor-pointer max-w-full h-auto  top-0 lg:w-3/5 lg:ml-12 lg:translate-x-1/2  lg:rounded-lg'} />
        <div className='  gap-5 mt-4 lg:grid grid-cols grid-flow-col hidden translate-x-1/2 lg:ml-12   w-3/5  justify-center  '>
          <img onClick={() => setSlider(0)} className='hover:opacity-50 cursor-pointer  rounded-lg ' src={thumbOne} alt="" />
          <img onClick={() => setSlider(1)} className='hover:opacity-50 cursor-pointer  rounded-lg' src={thumbTwo} alt="" />
          <img onClick={() => setSlider(2)} className='hover:opacity-50 cursor-pointer  rounded-lg ' src={thumbThree} alt="" />
          <img onClick={() => setSlider(3)} className='hover:opacity-50  cursor-pointer  rounded-lg ' src={thumbFour} alt="" />
        </div>
      </div>
      <div className="hidden lg:block">
      {images.map((src, index) => (
        <img className='hidden'
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer className="hidden"
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ true }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
   </div>


    </figure>
  )
}




export default Slider