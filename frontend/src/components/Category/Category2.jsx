import React from 'react'
import Image1 from '../../assets/category/gaming.png'
import Image2 from '../../assets/category/vr.png'
import Image3 from '../../assets/category/speaker.png'
import Button from '../Shared/Button'


const Category2 = () => {
  return (
    <div className='py-8'>
      <div className="container">
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end'>
        <div>
          <div className="space-y-2 mb-4 ml-7">
            <p className='mb-[2px] text-gray-800 font-semibold'>Enjoy</p>
            <p className='text-2xl font-semibold mb-[2px]'>With</p>
            <p className='text-4xl xl:text-5xl font-bold opacity-20 mr-2'>Laptop</p>
            <Button text='Browse' bgColor={'bg-primary'} textColor={'text-white'}></Button>
          </div>
        </div>
        <img src={Image1} alt="" className='w-[350px] absolute top-1/2 pr-9 -translate-y-1/2 -right-0 '/>
        </div>

        <div className='py-10 pl-5 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-3xl relative h-[320px] flex items-end'>
        <div>
          <div className="mb-28">
            <p className='mb-[2px] text-white font-semibold'>Enjoy</p>
            <p className='text-2xl font-semibold mb-[2px]'>With</p>
            <p className='text-4xl xl:text-5xl font-bold opacity-20 mr-2'>Earphone</p>
            <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandGreen'}></Button>
          </div>
        </div>
        <img src={Image2} alt="" className='w-[226px] absolute bottom-0 ml-5'/>
        </div>

        <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/70 to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end'>
        <div>
          <div className="mb-4">
            <p className='mb-[2px] text-white font-semibold'>Enjoy</p>
            <p className='text-2xl font-semibold mb-[2px]'>With</p>
            <p className='text-4xl xl:text-5xl font-bold opacity-40 mr-2'>Gadget</p>
            <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandBlue'}></Button>
          </div>
        </div>
        <img src={Image3} alt="" className='w-[200px] absolute  bottom-28 -right-0 '/>
        </div>

        
      </div>
      </div>
    </div>
  )
}

export default Category2
