import React,{ useState} from 'react'



function FoodCard({food,AddToCart}) {
  const {src,name, type,price}=food;
  const [addCart, setAddCart]=useState(true);
  const [quantity,setQuantity]=useState(1)
  const [cartItems,setCartItems]= useState([])
  
  const handleAddCart =()=>{
    setAddCart(false);
  }
  const handleAddedToCart =()=>{
    setAddCart(true);
    // setCartItems([...cartItems,{quantity:quantity}])
    // setCartItems([...cartItems,{ ...food, quantity:quantity}])
    AddToCart(food,quantity,name);
    // console.log("name in",name)
    // console.log("cartItems",cartItems);
    // console.log("added")
  }

  const handleIncrementQuantity =()=>{
    setQuantity(quantity+1);
  }

  const handleDecrementQuantity =()=>{
    setQuantity(quantity-1);
  }
  return (
    <div className=' mt-2 sm:m-6'>
       <div className='relative sm:size-60 size-56'> 
       <div>
        <img src={src} alt="imag" className='w-52 rounded-xl sm:w-60 sm:h-56  object-contain '/>
        {addCart && (<button onClick={handleAddCart} className='absolute py-1 bg-white left-5 sm:left-8 bottom-2   sm:bottom-1  border-2 border-gray-300  px-8   rounded-full flex items-center '>
          <img src="src\assets\images\icon-add-to-cart.svg" alt="" />
        Add to Cart</button>)}</div>
        {!addCart && (<div className='sm:w-48 absolute left-5  bottom-2   sm:bottom-1 border-2  bg-red-600 border-red-600 text-white px-8 py-1 font-bold rounded-full  flex items-center justify-between'>
        <button disabled={quantity==1} onClick={handleDecrementQuantity} className='border  py-2 px-1 text-sm rounded-full'><img src="src\assets\images\icon-decrement-quantity.svg" alt="" /></button>
        <span  onClick={handleAddedToCart}  className=' w-16 text-center'>{quantity}</span>
        <button onClick={handleIncrementQuantity} className='border  py-1 px-1 rounded-full'><img src="src\assets\images\icon-increment-quantity.svg" alt="" /></button>
        </div>)}
        </div>
        <h1 className="text-gray-400">{type}</h1>
        <h1 className='font-bold text-lg'>{name}</h1>
        <h1 className='text-red-500 font-semibold'>{`$${price}`}</h1>
    </div>
  )
}

export default FoodCard