import React from "react"
import { Link } from "react-router-dom"
import products from "../data"

/*
jadi ktika user klik link more info yg 
isi dalamnya :
Link to="/products/${prod.id" 
maka di browser link prod.id ditangkap oleh useParams dari react-router-dom
dan kmudian di buka itu pagenya krn mmbuka page SingleProduct 


*/
const Products = () => {
  return (
    <section className='section'>
      <h2>Products :</h2>
      <div className='products'>
        {products.map((prod) => {
          return (
            <article key={prod.id}>
              <h5>{prod.name}</h5>
              <Link to={`/products/${prod.id}`}>More Info</Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Products
