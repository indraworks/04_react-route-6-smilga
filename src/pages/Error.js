import React from "react"
import { Link } from "react-router-dom"
const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h4>Error Not Found</h4>
      <Link to='/' className='btn'>
        Home
      </Link>
    </div>
  )
}

export default Error
