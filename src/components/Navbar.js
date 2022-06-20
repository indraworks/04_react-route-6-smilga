import { NavLink } from "react-router-dom"

const Navbar = () => {
  //maksud iternary isActive adalah jika active warna biur jika tak active warna abu2 dari cssnya
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? "link active" : "link ")}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? "link active" : "link ")}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? "link active" : "link ")}
      >
        Product
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? "link active" : "link ")}
      >
        Login
      </NavLink>
    </nav>
  )
}

export default Navbar
/*
penggunaan className utk mengetahui apakah active aau tdk dengan mggunakan 
irtenray fucntion isatcive adalah param yg kita masukan yg hasilnya boolean jika benar 
maka tersorot link active  ( bisa liat 2 class ini di css )
actve disitu warna lebih tebal 
ingat ISACTIVE BUKAN ISACTIVATE !!!!
*/
