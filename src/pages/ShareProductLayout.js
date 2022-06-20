import React from "react"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h3>Products</h3>
      <Outlet />
    </>
  )
}
export default Home
/*
selalu kita beri nama Home sbgai tanda utk 
nah stlah buat diatas maka di AppJs 
kit aharus buat route wrapnya dimana  headernya atau root ataubaaknya route ngarah kesini 
trus buat index
<Route path="products" element={<ShareProdcutLayout/> }>
   <Route index element={<Products/>}  />
   <Route path=":productId" element={<SingleProduct/>}
</Route>

*/
