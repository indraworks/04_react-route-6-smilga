import React from "react"
import { useState } from "react"

//jadi utk reaact router dom yg dibutuhkan adalah BrowserRouter ,
//Routers yg wraping ,route utk masing2 kunjungi page utk link yg dituju
import { BrowserRouter, Routes, Route } from "react-router-dom"
//dengan membuat index berisi smua file2 yg akan dinport maka pathnya langsung dari pages
//tak perlu sebut namanya file stlah folder ./pages
import {
  Home,
  About,
  Products,
  Error,
  ShareLayout,
  SingleProduct,
  Dashboard,
  Login,
  ProtectedRoute,
  ShareProductLayout,
} from "./pages"

const App = () => {
  //declre utk user hooks
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<ShareProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser} />} />

          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
ingaat App.js adaalh pusat kendali navigasi utk smua 
arah link ke masing2 page
initinya ada BrosserRouter,ROutes(wraping),dan Route utk arahkan ke page masing2 /linknya 
di v6 ini kita akan gunaka element temapt utk rendernya 
apakan itu link file atau brupa eleemnt tag html commandnya:

eleemnt={ <namafilenya / namaFunctionJSX-nya/>}
jadi lebih ngarah ke nama contentJSXnya  <namaFucntionJSX-nya /> 
bisa juga element= {<h1> Hello iam element rednering!  </h1>}

jadi intinya jika ada products utk list banyak oroduucts 
nah ada single product yaitu prodct item yg kepilih dari list producrs 
jika kepi lih path='/products/:productId' maka menuju render <SingleProduct/> 
dengna useParams yg udah detect dan dimasukan variable dan variable ngfind  idnya 
ketmu dirender di SingleProduct ini 


*/

/*
/*
INGAT KALAU MAU BUAT NEsteD LOOP ROUTE MAKA DIA HARUS WRAPING ROUTE2 DIBAWAH NYA 
SBB:
    <Route path='/' element={<SharedLayout />}>
       //disini buat index dan juga route anak ada didalam si route path "/"
           <Route index element={<Home />} />
           <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />

    </Route>  //end penutup si nested-Route


///

*/

/*
NAH KIT AMAU BIKIN NESTED LOOP UTK PRODUCT MAKA KITA HARUS BUAT JUGA 
productShareLayout.js sprti diatas dia App.js kuta buat nested route utk products sbb:



*/
