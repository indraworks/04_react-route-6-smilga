import React from "react"
//gunakan useParams utk ambil path link di browser
import { Link, useParams } from "react-router-dom"
import products from "../data"
/*
ini jadi crtinanya darii Product.js disama data dari products ( data,js) 
di maping nah jika si user klik pada product namae 
maka akan di link ke :  <Link to={`/products/${prod.id}`}>More Info</Link> 
nah si singleProduct.js yg kita sekarang berada ini 
akan ambil link prod.id tsb  dgn useParams 
const { productId } = useParams()
kita cari idnya di data.js /products 
const product = products.find((product) => product.id === productId)
nah dgn find method ktmu si product tsn nah stlah nya kita render 
yg kita render name dan image dari siproduuct!

*/

const SingleProduct = () => {
  const { productId } = useParams()
  console.log(productId)
  const product = products.find((product) => product.id === productId)
  //destruct name ,image
  const { name, image } = product
  return (
    <>
      <h5>{name}</h5>
      <img src={image} alt={name} />
      <div>
        <Link to='/products'>back to Products List</Link>
      </div>
    </>
  )
}

export default SingleProduct
