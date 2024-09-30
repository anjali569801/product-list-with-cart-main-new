import React from 'react'
import CartItem from './CartItem';

function Cart({AddToCart,totalItems,food,totalPrice,setConfirm,removeFromCart}) {
  // console.log("food",food)
  
  const handleOnClick=()=>{
        setConfirm(true);
  } 

  return (
    <div className='size-60 mt-10 sm:mt-0 sm:w-80 sm:h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-pink-200 p-4 rounded-lg bg-white '>
        
        <h1 className='text-red-700 font-bold text-xl'>Your Cart {`(${totalItems})`}</h1>
        {totalItems == 0 && (<div className='flex flex-col items-center mt-5'>
            <img src="src\assets\images\illustration-empty-cart.svg" alt="" />
        <h2 className='text-sm font-semibold text-gray-500'> Your added items will appear here</h2>
        </div>)}
        {totalItems != 0 && (
          food.map((item)=>(
            // {console.log("item",item)}
            <CartItem food={item} removeFromCart={removeFromCart}/>
          ))
        )
        }
         
        {totalItems !=0 && (
          <div>
            <div className='flex justify-between items-center mt-4'>
              <h1 className='text-xs '>Order Total</h1>
              <h1 className='font-bold'>{`$${totalPrice}`}</h1>
          </div>
          <div>
             <button onClick={handleOnClick} className='mt-4 font-medium w-52 sm:w-64 text-white bg-orange-600 py-2 rounded-full'>Confirm Order</button>
          </div>
        </div>
        )}
    </div>
  )
}

export default Cart