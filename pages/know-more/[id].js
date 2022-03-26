import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ProductRange from '../../components/ProductRange'
import {FaRupeeSign} from 'react-icons/fa'
import {AiFillFilePdf} from 'react-icons/ai'

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
            <h2 className='text-center font-bold text-xl my-1 md:text-[22px]'>A <span className='text-sky-500'>Survive</span> <span className='text-green-500'>Pharma</span> Product</h2>
            <hr className='my-2' />
            <div className='lg:hidden'>
                {/*  */}
                <div className='flex flex-col mb-[6px] md:flex-row md:justify-center md:items-center md:space-x-3'>
                    <div className='w-2/5 mx-auto shadow border-t-[1px] rounded-md px-8 mt-3 mb-1 md:mx-0 md:mb-[10px] md:w-1/3'>
                        <Image width={400} height={400} src={'/Images/Electrotherapy.jpeg'} alt={''}></Image>
                    </div>
                    {/*  */}
                    <div>
                        <h3 className='font-semibold text-lg text-center md:text-xl'>Ped-O-Cycle</h3>
                        <h4 className='flex items-center justify-center md:text-lg'><FaRupeeSign /> 130 /Piece</h4>
                        <div className='flex justify-center my-1'>
                            <a href="" className='flex items-center bg-green-500 text-white rounded-md px-3 py-[2px]'><AiFillFilePdf />Product Brochure</a>
                        </div>
                    </div>
                </div>
                <hr />
                {/*  */}
                <div className='mt-[6px] mb-[6px] md:mt-2 md:mb-2'>
                    <h4 className='text-center md:text-lg'>Product Description</h4>
                    <p className='text-sm px-5 mt-1 md:mt-[6px] md:text-base'>
                        The V-4200 series of respirators includes Venus V-4214 SLOV-V, V-414 SLOV-V, V-425 SLOV-V, V-410 S, V410 SL, V-420 SL, V-410 V, V-410 SLV, V-420 SLV, V-430 SLV & 4200 N95. These respirators are of fold flat design with a large surface area for breathing comfort. The filters have a high dust holding capacity which do not get clogged thereby increasing the respirators life. These respirators also come with a special transparent valve cap to demonstrate the performance of the valve. V-4200 series respirators have NR D Anti clogging mark. These series of respirators have passed dolomite test and can resist clogging in very high dust environments.
                    </p>
                </div>
                <hr />
                <div className='bg-teal-100 mt-[6px] py-2 md:mt-2'>
                    <h5 className='text-center md:text-lg'>Interested in this product ?</h5>
                    <h6 className='text-center text-slate-700 text-base md:text-[16px]'><a className='text-blue-700 cursor-pointer' href="tel:+91 8860217140">Call Us</a> or leave your number below and we will call you</h6>
                    <form>
                        <div className='flex px-3 sm:px-40 mt-2 space-x-1 mb-1 md:px-56'>
                            <select className='bg-green-500 text-white border-[1px] rounded outline-sky-500 text-[15px] md:text-base' name="countryCode" id="ccode">
                                <option value="+91">India +91</option>
                                <option value="+1">USA +1</option>
                                <option value="+971">UAE +971</option>
                                <option value="+44">UK +44</option>
                                <option value="+61">Aus +61</option>
                            </select>
                            <input type="number" name='contactNumber' className='rounded-md text-[15px] py-[5px] px-1 w-full md:text-base' placeholder='Contact Number' />
                        </div>
                        <div className='text-center mt-3 mb-1 md:mt-4 md:mb-2'>
                            <button className='bg-sky-500 text-white rounded-md text-base px-2 py-1 md:text-[16px]' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            {/*  */}
            {/*  */}
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
                            <a href='' className={`bg-green-500 text-white flex align-items-center px-2 py-[6px] rounded-md`}><span className='text-[22px]'><AiFillFilePdf /></span>Product Brochure</a>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <h5 className='text-lg'>Product Description</h5>
                    <p className="text-slate-800 mt-1">The V-4200 series of respirators includes Venus V-4214 SLOV-V, V-414 SLOV-V, V-425 SLOV-V, V-410 S, V410 SL, V-420 SL, V-410 V, V-410 SLV, V-420 SLV, V-430 SLV & 4200 N95. These respirators are of fold flat design with a large surface area for breathing comfort. The filters have a high dust holding capacity which do not get clogged thereby increasing the respirators life. These respirators also come with a special transparent valve cap to demonstrate the performance of the valve. V-4200 series respirators have NR D Anti clogging mark. These series of respirators have passed dolomite test and can resist clogging in very high dust environments.</p>
                    <hr className='my-3' />
                    <div className='bg-teal-100 p-4'>
                        <h4 className='text-center text-slate-900 mb-0'>Interested in this product?</h4>
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
    </div>
  )
}

export default Id