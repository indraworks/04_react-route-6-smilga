import { NavLink } from "react-router-dom"

const Navbar = () => {
  //maksud iternary isactivate adalah jika active warna biur jika tak active warna abu2 dari cssnya
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActivate }) => (isActivate ? "active" : "link active")}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActivate }) => (isActivate ? "active" : "link active")}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActivate }) => (isActivate ? "active" : "link active")}
      >
        Product
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActivate }) => (isActivate ? "active" : "link active")}
      >
        Login
      </NavLink>
    </nav>
  )
}

export default Navbar
