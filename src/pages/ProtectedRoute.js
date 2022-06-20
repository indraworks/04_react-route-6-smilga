import React from "react"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to='/' />
  }
  return children
}

export default ProtectedRoute

/*
jadinya intinya gini user harus login dulu kalau mau ke page -->dashboard
jika tidak maka akan tertolak dan menuju ke route  home 
coba saja anda ketik localhost:3000/dashboard 
maka otomatsi akan di navigate ke "/"


*/
