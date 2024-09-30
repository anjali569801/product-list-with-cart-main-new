import React from 'react'

function ConfirmItem({item}) {
//    console.log("confirm items",item.name)
const {name,quantity,price,src}=item
   
  return (
    <div className='flex space-x-2 items-center py-3 border-b '>
        <img src={src} className='size-10 rounded ' alt="" />
        <div >
        <h1 className='font-bold'>{name}</h1>
        <div className='  flex space-x-20 text-sm font-medium justify-between'>
            <div>
                <span className='text-red-700 '>{`${quantity}x`}</span>
                <span className='text-gray-400 ml-4'>{`@${price}`}</span>
            </div>
            <h1 className='text-gray-700  sm:mx-auto '>{`$${price*quantity}`}</h1>
        </div>
        </div>
    </div>
  )
}

export default ConfirmItem