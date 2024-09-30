import React from 'react'
import CartItem from './CartItem'
import ConfirmItem from './ConfirmItem'

function ConfirmationCard({items,totalPrice,setConfirm}) {

  const handleClick =()=>{
      setConfirm(false);
  }

  return (
    <div className='w-full h-96 sm:size-96  overflow-x-hidden overflow-y-scroll bg-white p-2 sm:p-8 rounded-md absolute bottom-0 sm:inset-0 m-auto'>
      <img src="src\assets\images\icon-order-confirmed.svg" alt=""  className='size-6'/> 
      <h1 className='font-bold text-3xl'>Order Confirmed</h1>
      <h3 className='text-gray-400 text-sm'>We hope you enjoy your food!</h3>
      {items.length>0 && (
        <div className='pb-3 px-3 bg-pink-50'>
        {items.map((item)=><ConfirmItem  item={item}></ConfirmItem>)}
     <div className='flex justify-between items-center mt-4'>
        <h1 className='text-xs '>Order Total</h1>
        <h1 className='font-bold'>{`$${totalPrice}`}</h1>
     </div>
      </div>
     )}
     
       <button onClick={handleClick} className='mt-4 w-56 font-medium sm:w-64 text-white bg-orange-600 py-2 rounded-full'>Start New Order</button>
    </div>
  )
}

export default ConfirmationCard