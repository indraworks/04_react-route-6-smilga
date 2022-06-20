import React from "react"

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
    </section>
  )
}

export default Home

/* PENGRTIAN TENTANG ROUTES GIMANA CARA SETUPNYA DAN SHARE LAYOUTNYA !""
jadi si home ini adalah bagian dari kepala mduia ada ygkit amau share 
disetiap page gimana caranya 
kit ataruh Outlet nah si outlet ini emwakili route2 yg ada di bawah routeny si home
jadi mulai Above sd login ada dibawha Home 
 <Route path='/' element={<ShareLayout />} />
        <Route index element={<Home />} />
        //dari about kebawah ini yg diwakili Outlet!
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<SingleProduct />} />
        <Route path='login' element={<Login setUser={setUser} />} />

        jadi outlet ini mewakili smua page2 yg ada di route nah diaasnya lihat pada bagian return() 
        itu ada h2 Home Page diatas outlet dia ini akan terus muncul di tiap page yg dibuka 
        /yaitu selama kita acess route2 page nah ini lah yg kita sebut sharelayotu kuta

        Nah kita kan udah punya Navbar kita tinggal gantikan saja itu tulisan kita  impor cmponent Navbar
        agar tershare dsma page2 ( Outlate <mewakili Route2 pagenya )
        Nah ini Point pnetingnya jadi kita buat content yg mana tersahre utk itu kita ambil contennya Home saja 
        nah kita buat kita namakan ShareLayOut.js isinya adalah 

                        import { Outlet } from "react-router-dom"
                  import Navbar from "../components/Navbar"

                  const ShareLayout = () => {
                    return (
                      <>
                        <Navbar>
                       
                            <Outlet />
                          </section>
                       
                      </>
                    )
                  }
Nah karena kit audah cpy contennty ahome maka tak perlu lagi kita buat hal yg sama 
sebab shre layout ini akan jadi rujukan page yg akan share smua contennty ke sipa pagenya 
nah dia ngeshare di <Outlet/> hany asaja home adalah fist atau pakang pintu rujukan utk balik 
nah utk itu kita refactor diatas 
<Route path='/' element={<ShareLayout />} /> <--- iji adalah content yg akan slalu muncul di page2

        <Route index element={<Home />} />  <---hoe jadi index 
        //page2 anak dibawah ini :

        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<SingleProduct />} />
        <Route path='login' element={<Login setUser={setUser} />} />

*/
