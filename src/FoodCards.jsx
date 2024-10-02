import React from 'react'
import FoodCard from './FoodCard'

const foods=[
  { 
  src:`src\\assets\\images\\image-waffle-desktop.jpg`,
  type:"Waffle",
  name:"Wafffle with Berries",
  price:"6.50"
},
  { 
  src:`src\\assets\\images\\image-creme-brulee-desktop.jpg`,
  type:"Creme Brulee",
  name:"Vanilla Bean Creme Brulee",
  price:"7.00"},
  { 
  src:`src\\assets\\images\\image-macaron-desktop.jpg`,
  type:"Mcaron",
  name:"Macaron Mix of Five",
  price:"8.00"},
  { 
  src:`src\\assets\\images\\image-tiramisu-desktop.jpg`,
  type:"Tiramisu",
  name:"Classic Tiramisu",
  price:"5.50"},
  { 
  src:`src\\assets\\images\\image-baklava-desktop.jpg`,
  type:"Baklava",
  name:"Pistachino Baklava",
  price:"4.00"},
  { 
  src:`src\\assets\\images\\image-meringue-desktop.jpg`,
  type:"Pie",
  name:"Lemon Meringue Pie",
  price:"5.00"},
  { 
  src:`src\\assets\\images\\image-cake-desktop.jpg`,
  type:"Cake",
  name:"Red Velvet cake",
  price:"4.50"},
  { 
  src:`src\\assets\\images\\image-brownie-desktop.jpg`,
  type:"Brownie",
  name:"Salted Caramel Brownie",
  price:"5.50"},
  { 
  src:`src\\assets\\images\\image-panna-cotta-desktop.jpg`,
  type:"Panna Cotta",
  name:"Vanilla Pnna Cotta",
  price:"6.50"},
  
]


function FoodCards({AddToCart}) {

   
  return (
    <div className='mt-4 flex '>
        {/* <FoodCard></FoodCard> */}
        <div className='m-0 sm:ml-28 flex flex-col sm:flex-row flex-wrap'>
         {foods.map((food)=> <FoodCard food={food} AddToCart={AddToCart}></FoodCard>)}
        </div>
        
    </div>
  )
}

export default FoodCards