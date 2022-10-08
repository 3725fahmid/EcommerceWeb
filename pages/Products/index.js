import React from 'react'
import CardProduct from '../../components/CardProduct'

const Product = () => {
  return (
    <div class='flex justify-center items-center p-20'>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
        <div><CardProduct/></div>
      </div>
    </div>
  )
}

export default Product