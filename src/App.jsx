import React from 'react'
import { useState } from 'react'
import FoodCards from './FoodCards'
import Cart from './Cart'
import ConfirmationCard from './ConfirmationCard'


function App() {

  const [foodItems, setFoodItems]=useState([])
  const [totalItems,setTotalItems]=useState(0)
  const [confirm,setConfirm]=useState(false)

  const AddToCart = (food, quantity,name) => {

      
      const newFoodItems = foodItems.filter((foodItem)=>foodItem.name != name
   );
   const updatedFood = { ...food, quantity };
 
      console.log("new",newFoodItems)
      setFoodItems([...newFoodItems, updatedFood]);
      setTotalItems(totalItems+quantity)
      console.log("fooditems",name)

  };
  const removeFromCart = (name) => {

      
      const newFoodItems = foodItems.filter((foodItem)=>foodItem.name != name
   );
   
 
      console.log("new",newFoodItems)
      setFoodItems([...newFoodItems]);
     
      console.log("fooditems",name)

  };


  
  const totalPrice = foodItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
 

  return (
    <div className='relative sm:pt-5 h-screen flex items-center sm:items-start flex-col sm:flex-row w-screen overflow-y-scroll  bg-pink-100 p-5'>
      <div>
     <h1 className='font-bold text-3xl sm:ml-36 w-24 sm:w-4/5'>Desserts</h1>
      <FoodCards AddToCart={AddToCart}></FoodCards>
     </div>
     <div>
       <Cart removeFromCart={removeFromCart} totalItems={totalItems} setConfirm={setConfirm} food={foodItems} AddToCart={AddToCart} totalPrice={totalPrice}></Cart>
      </div>
     {confirm && (<ConfirmationCard  items={foodItems} totalPrice={totalPrice} setConfirm={setConfirm} ></ConfirmationCard>)}

    </div>
  )
}

export default App


