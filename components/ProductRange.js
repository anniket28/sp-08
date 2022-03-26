import React,{useState} from 'react'
import Link from 'next/link'
import {IoMdArrowDroprightCircle,IoMdArrowDropleftCircle} from 'react-icons/io'
import Script from 'next/script'

const ProductRange = () => {
     // Use State
     const [slide, setslide] = useState(1)
     const totalSlides=5

     // Prvious Slide
     const prevSlide=()=>{
         if(slide-1>0){
             setslide(slide-1)
        }
        else{
            setslide(totalSlides)
        }
        }
        
        // Next Slide
        const nextSlide=()=>{
        if(slide!==totalSlides){
            setslide(slide+1)
        }
         else{
            setslide(1)
         }
     }

  return (
    <div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
        {/*  */}
        <div id="carouselProductIndicators" className="carousel slide bg-slate-100 shadow-md py-3 px-0 sm:px-20 md:px-40 lg:px-0" data-bs-ride="carousel">
            <h1 className='text-center font-semibold text-[22px] sm:text-[24px] md:text-[27px] lg:text-3xl'>Our Product Range</h1>
            <div className='flex mt-2 items-center'>
                <button data-bs-target="#carouselProductIndicators" data-bs-slide="prev" className='text-4xl text-sky-500 mx-3'><IoMdArrowDropleftCircle /></button>
                <div className="carousel-inner py-3">
                    <div className="carousel-item active">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-indigo-500 text-white rounded-md py-[6px] sm:px-4'>New Items</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-fuchsia-500 text-white rounded-md py-[6px] sm:px-4'>Therapy Unit</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-lime-600 text-white rounded-md py-[6px] sm:px-4'>Exercise Items</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-red-500 text-white rounded-md py-[6px] sm:px-4'>Rehabilitation Items</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-gray-500 text-white rounded-md py-[6px] sm:px-4'>Commode Wheel Chair</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-500 text-white rounded-md py-[6px] sm:px-4'>Electrotherapy Equipments</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-red-500 text-white rounded-md py-[6px] sm:px-4'>Stretcher</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-slate-500 text-white rounded-md py-[6px] sm:px-4'>Hand Wash</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-yellow-600 text-white rounded-md py-[6px] sm:px-4'>Traction Table</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-teal-500 text-white rounded-md py-[6px] sm:px-4'>Hand Sanitizer</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-indigo-500 text-white rounded-md py-[6px] sm:px-4'>Original Dettol Bath Soap</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-yellow-900 text-white rounded-md py-[6px] sm:px-4'>Safehands - Auto Hand Sanitizer</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-emerald-700 text-white rounded-md py-[6px] sm:px-4 hidden lg:block'>Skin Care Cosmetics</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-blue-700 text-white rounded-md py-[6px] sm:px-4'>Wheel Chair</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-fuchsia-500  text-white rounded-md py-[6px] sm:px-4'>Folding Walker</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-green-600 text-white rounded-md py-[6px] sm:px-4'>Hospital Furniture</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-500 text-white rounded-md py-[6px] sm:px-4'>Ecg Electrode Belts</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-pink-800 text-white rounded-md py-[6px] sm:px-4'>Dettol Liquid Handwash</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-slate-500 text-white rounded-md py-[6px] sm:px-4'>Rehabilitation Equipments</button>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-500 text-white rounded-md py-[6px] sm:px-4'>Dettol</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-800 text-white rounded-md py-[6px] sm:px-4'>Copier Paper</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-indigo-500 text-white rounded-md py-[6px] sm:px-4'>Disinfectant Liquid</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-fuchsia-500 text-white rounded-md py-[6px] sm:px-4'>Motorized Wheelchair</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-red-500 text-white rounded-md py-[6px] sm:px-4'>Medical Surgical Gown</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-green-600 text-white rounded-md py-[6px] sm:px-4'>Steam Vaporizer Machine</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='space-x-0 flex justify-center flex-col items-center space-y-3 lg:space-x-3 lg:space-y-0 lg:items-stretch lg:flex-row'>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-indigo-500 text-white rounded-md py-[6px] sm:px-4'>Hydrocollator</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-lime-900 text-white rounded-md py-[6px] sm:px-4'>Sonography Gel</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-orange-600 text-white rounded-md py-[6px] sm:px-4'>Disinfectant Spray</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-cyan-800 text-white rounded-md py-[6px] sm:px-4'>Massager Machine</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-emerald-700 text-white rounded-md py-[6px] sm:px-4 block lg:hidden'>Skin Care Cosmetics</button>
                            <button className='text-sm px-[7px] sm:text-[14px] md:text-base bg-fuchsia-500 text-white rounded-md py-[6px] sm:px-4'>Physiotherapy Equipments and Tens Unit</button>
                        </div>
                    </div>
                </div>
                <button data-bs-target="#carouselProductIndicators" data-bs-slide="next" className='text-4xl text-sky-500 mx-3'><IoMdArrowDroprightCircle /></button>
            </div>
        </div>
    </div>
  )
}

export default ProductRange