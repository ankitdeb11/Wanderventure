import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';


const Search = () => {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
            {/* left div  */}
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2>Luxury included vacations for the family!</h2>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quod corporis, obcaecati commodi consequatur in praesentium vel nisi dolore. Iusto sapiente est ipsum! Officia voluptates tenetur asperiores, et molestiae sequi eaque quia corrupti, blanditiis, dolore aliquid explicabo nesciunt aperiam laudantium! A omnis quis ab soluta natus fugiat aperiam reiciendis dolore.</p>
                </div>


                <div className='grid sm:grid-cols-2 gap-8 py-4'>


                    {/* adding 2 divs  */}


                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <RiCustomerService2Fill size={50} />
                        </button>
                        <div>
                            <h3 className='py-2'>Leading Services</h3>
                            <p className='py-1'>All inclusive company for 20 years in a row!</p>
                        </div>


                    </div>


                    {/* think I missed a div here we will scrutinize later  */}


                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <MdOutlineTravelExplore size={50} />
                        </button>
                        <div>
                            <h3 className='py-2'>Leading Services</h3>
                            <p className='py-1'>All inclusive company for 20 years in a row!</p>
                        </div>


                    </div>


                </div>
            </div>





            {/* right div  */}
            <div className='border text-center'>
                <div>
                    <p className='pt-2'>Get an additional 10% OFF</p>
                    <p className='py-4'>12 hours left</p>
                    <p className='bg-gray-800 text-gray-200 py-2'>Book now and save</p>
                </div>


                <form className='w-full '>
                    <div className='flex flex-col my-2'>
                        <label>Destination</label>
                        <select className='border rounded-md p-2' >
                            <option>Lakshadweep</option>
                            <option>Srinagar</option>
                            <option>Manali</option>
                            <option>Darjeeling</option>
                        </select>
                    </div>


                    <div className='flex flex-col my-4'>
                        <label htmlFor="#">Check-In</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>


                    <div className='flex flex-col my-2'>
                        <label htmlFor="#">Check-Out</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>



                    <div>

                    </div>



                    <button className='w-full my-4 '>Rates & Availabilities</button>

                </form>
            </div>


        </div>
    )
}

export default Search