import React, { useState } from 'react'

function CartItem({food,removeFromCart}) {

    const handleOnclick =()=>{
      console.log("namein remove",food.name)
      removeFromCart(food.name)
    }
  return (
    <div className='flex justify-between  p-2 border-b py-4'>
        <div>
        <h1 className='font-bold'>{food.name}</h1>
        <div className='flex space-x-4 mt-2 text-sm font-medium'>
        <span className='text-red-700 '>{`${food.quantity}x`}</span>
        <span className='text-gray-400'>{`@${food.price}`}</span>
        <h1 className='text-gray-700'>{`$${food.price*food.quantity}`}</h1>
        </div>
        </div>
        <button onClick={handleOnclick}><img src="src\assets\images\icon-remove-item.svg" alt=""  className='size-3  rounded-full border '/></button>
        {/* <h1 className='font-bold'>iceCream</h1>
        <div className='flex space-x-4 mt-2 text-sm font-medium'>
          <div className={`flex space-x-4  ${confirm?'mr-32':" "}`}>
          <span className='text-red-700 '>1x</span>
          <span className='text-gray-400'>$7.4</span>
          </div>
          <h1 className={`text-gray-700`}>
          $7.4
          </h1 > */}
        
        
    </div>
  )
}

export default CartItem