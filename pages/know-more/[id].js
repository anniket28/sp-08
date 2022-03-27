import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProductRange from '../../components/ProductRange'
import {FaRupeeSign} from 'react-icons/fa'
import {AiFillFilePdf} from 'react-icons/ai'
import {BsCheckCircle} from 'react-icons/bs'
import {MdOutlineDescription} from 'react-icons/md'

const Id = () => {
  return (
    <div>
        {/* Head */}
        <Head>
            <title>Product | Survive Pharma</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Survive Pharma Know More Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProductRange />

        <div className='my-10 shadow-md rounded-lg border-t-[1px] mx-5 md:mx-10'>
            <h2 className='text-center px-1 font-bold text-[18px] sm:text-xl my-1 md:text-[22px] lg:text-2xl'>A <span className='text-sky-500'>Survive</span> <span className='text-green-500'>Pharma</span> Product</h2>
            <hr className='my-2' />
            {/* Small Devices */}
            <div className='lg:hidden'>
                {/*  */}
                <div className='mt-5 mb-3 md:flex md:flex-row md:items-center md:justify-center md:space-x-3 md:mb-5'>
                    <div className='shadow border-t-[1px] rounded-md w-4/5 mx-auto md:w-5/12 md:mx-0 md:p-3'>
                        <Image width={500} height={500} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
                    </div>
                    <div className='my-2'>
                        <h3 className='text-center font-semibold text-lg'>Ped-O-Cycle</h3>
                        <h4 className='flex items-center justify-center'><FaRupeeSign /> 130 /Piece</h4>
                        <div className='flex justify-center'>
                            <a href='' className={`bg-green-500 text-white flex items-center px-1 py-1 text-sm rounded-md mt-1`}><span className='text-[22px]'><AiFillFilePdf /></span>Product Brochure</a>
                        </div>
                    </div>
                </div>
                <hr className='my-2' />
                {/*  */}
                <div className='my-3'>
                    <h4 className='text-center md:text-[17px]'>Product Description</h4>
                    <p className='my-1 text-slate-800 text-sm px-[10px] md:text-[15px] md:mt-2 md:mb-2 md:px-10'>The V-4200 series of respirators includes Venus V-4214 SLOV-V, V-414 SLOV-V, V-425 SLOV-V, V-410 S, V410 SL, V-420 SL, V-410 V, V-410 SLV, V-420 SLV, V-430 SLV & 4200 N95. These respirators are of fold flat design with a large surface area for breathing comfort. The filters have a high dust holding capacity which do not get clogged thereby increasing the respirators life. These respirators also come with a special transparent valve cap to demonstrate the performance of the valve. V-4200 series respirators have NR D Anti clogging mark. These series of respirators have passed dolomite test and can resist clogging in very high dust environments.</p>
                </div>
                <hr className='my-2' />
                {/*  */}
                <div className='bg-teal-100 p-4'>
                    <h4 className='text-center text-slate-900 mb-0 text-base md:text-lg'>Interested in this product?</h4>
                    <div className='text-slate-700 text-center text-sm md:text-base'><a className='text-blue-700'>Call Us</a> or leave your number below and we will call you.</div>
                    <form className='mt-2'>
                        <div className='flex mx-auto mb-1 md:w-[36%] md:space-x-1'>
                            <select className='bg-green-500 text-white outline-sky-500 rounded-md bordeer-[1px] text-sm md:text-base' name="countryCode" id="ccode">
                                <option value="+91">India +91</option>
                                <option value="+1">USA +1</option>
                                <option value="+971">UAE +971</option>
                                <option value="+44">UK +44</option>
                                <option value="+61">Aus +61</option>
                            </select>
                            <input type="number" name='contactNumber' className='rounded-md px-2 py-1 w-full text-sm md:text-base' placeholder='Contact Number' />
                        </div>
                        <div className='text-center mt-3'>
                            <button className='bg-sky-500 px-2 py-1 text-white rounded-md text-sm md:text-base' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>

            </div>

            {/*  */}

            {/* Big Devices */}
            <div className='hidden lg:flex flex-row px-10 pt-4 pb-5 space-x-4 items-start'>
                <div className='shadow-md border-t-[1px] rounded-md p-5'>
                    <Image width={400} height={400} src={`/Images/Electrotherapy.jpeg`} alt={''}></Image>
                </div>
                <div className=" w-3/4 py-0">
                    <div className='flex justify-between'>
                        <div>
                            <h3 className="text-xl font-semibold">Ped-O-Cycle</h3>
                            <h5 className='flex items-center text-lg'><FaRupeeSign /> 130 /Piece</h5>
                        </div>
                        <div>
                        {/* ${product.product_brochure===null?"d-none":""} */}
                            <a href='' className={`bg-green-500 text-white flex items-center px-2 py-[6px] rounded-md`}><span className='text-[22px]'><AiFillFilePdf /></span>Product Brochure</a>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <h5 className='text-lg'>Product Description</h5>
                    <p className="text-slate-800 mt-1">The V-4200 series of respirators includes Venus V-4214 SLOV-V, V-414 SLOV-V, V-425 SLOV-V, V-410 S, V410 SL, V-420 SL, V-410 V, V-410 SLV, V-420 SLV, V-430 SLV & 4200 N95. These respirators are of fold flat design with a large surface area for breathing comfort. The filters have a high dust holding capacity which do not get clogged thereby increasing the respirators life. These respirators also come with a special transparent valve cap to demonstrate the performance of the valve. V-4200 series respirators have NR D Anti clogging mark. These series of respirators have passed dolomite test and can resist clogging in very high dust environments.</p>
                    <hr className='my-3' />
                    <div className='bg-teal-100 p-4'>
                        <h4 className='text-center text-slate-900 mb-0 text-xl'>Interested in this product?</h4>
                        <div className='text-slate-700 text-center text-lg'><a className='text-blue-700'>Call Us</a> or leave your number below and we will call you.</div>
                        <form className='mt-2'>
                            <div className='flex mx-auto mb-1 w-1/2'>
                                <select className='bg-green-500 mx-1 text-white outline-sky-500 rounded-md bordeer-[1px] space-x-1' name="countryCode" id="ccode">
                                    <option value="+91">India +91</option>
                                    <option value="+1">USA +1</option>
                                    <option value="+971">UAE +971</option>
                                    <option value="+44">UK +44</option>
                                    <option value="+61">Aus +61</option>
                                </select>
                                <input type="number" name='contactNumber' className='rounded-md px-2 py-1 w-full' placeholder='Contact Number' />
                            </div>
                            <div className='text-center mt-3'>
                                <button className='bg-sky-500 px-2 py-1 text-white rounded-md' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* More Products */}
        <div className='my-5'>
          <h2 className='text-center font-semibold text-[20px] md:text-[22px] lg:text-[24px]'>More Products related to this category - </h2>
          {/*  */}
          <div className='flex flex-wrap flex-col px-3 md:flex-row md:justify-around lg:justify-between lg:flex-row md:px-16 lg:px-20 xl:px-[108px]'>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'/know-more/1'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[2px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'/know-more/1'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'/know-more/1'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[2px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'/know-more/1'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'/know-more/1'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[2px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'/know-more/1'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'/know-more/1'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[2px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'/know-more/1'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'/know-more/1'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[2px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'/know-more/1'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col shadow-md border-t-[1px] rounded-md mx-auto w-[75%] sm:w-[60%] md:w-[40%] lg:w-[30%] my-6'>
              <div className='shadow px-3 rounded-t-md text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
              </div>
              <div className='px-3 md:px-3 lg:px-3 xl:px-5 pt-3 md:h-[150px] lg:h-[140px] xl:h-[130px]'>
                <Link href={'/know-more/1'} passHref><a className='font-semibold text-lg md:text-xl text-slate-800 hover:text-black hover:underline'>Shortwave Diathermy Equipment 500w MACHINE (SWD)</a></Link>
                <h4 className='flex items-center text-lg text-slate-700 mt-[2px]'><FaRupeeSign /> 100 /Piece</h4>
              </div>
              <div className='flex mt-4 px-3 md:mt-0 md:px-3 lg:px-3 xl:px-5 space-x-0 pb-5 flex-col items-center space-y-3 xl:space-y-0 xl:space-x-3 xl:flex-row'>
                <button className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-green-500 text-white rounded-md flex items-center hover:shadow-inner hover:shadow-sky-500'><span className='text-lg mr-[2px]'><BsCheckCircle /></span>Yes I am interested</button>
                <Link href={'/know-more/1'} passHref><a className='px-2 text-[15px] md:text-base py-1 md:px-2 md:py-1 lg:px-2 xl:px-[2.5px] lg:py-1 xl:py-[6px] bg-sky-500 text-white rounded-md flex items-center cursor-pointer hover:shadow-inner hover:shadow-green-500'><span className='text-lg'><MdOutlineDescription /></span>Know More</a></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Id