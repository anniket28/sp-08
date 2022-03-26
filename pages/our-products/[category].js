import React,{useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProductRange from '../../components/ProductRange'
import {FaRupeeSign} from 'react-icons/fa'
import {MdOutlineDescription} from 'react-icons/md'
import {BsCheckCircle} from 'react-icons/bs'
import Sidebar from '../../components/Sidebar'

const Category = () => {
    // Router
    const router=useRouter()

  return (
    <div>
        {/* Head */}
        <Head>
            <title>Our Products - Category | Survive Pharma</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Survive Pharma Products Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProductRange />

        <Sidebar />

        <div className='my-5'>
          <h2 className='text-center font-semibold text-[22px] md:text-[25px] lg:text-[28px]'>New Items</h2>
          {/*  */}
          <div className='flex flex-wrap flex-col px-3 md:flex-row md:justify-around lg:justify-between lg:flex-row md:px-16 lg:px-20 xl:px-[108px]'>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'know-more'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[1px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'know-more'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'know-more'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[1px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'know-more'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'know-more'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[1px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'know-more'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'know-more'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[1px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'know-more'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'know-more'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[1px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'know-more'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'know-more'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[1px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'know-more'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Category