import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

//ini tempat masuknya dari App utk setUser ini masukan propsny akesini login
//setUser masuk dari App.js pada path router

const Login = ({ setUser }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate() //utk gantikan push history
  //navigate langsung menuju hal page yg dituju
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email) return
    setUser({ name: name, email: email })
    navigate("/dasbboard")
  }

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  )
}

export default Login

/*

Penjesalan utk login dari app.js nya kita lihat utk login ada props setUser
 <Route path='login' element={<Login setUser={setUser} />} />
 <Route path='dashboard'
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />

 element={<Login setUser={setUser} /> 
 nah si jsx function terima 
 const Login =({setUser})=> {} 
 jika benar yg dimasukan maka object prop setUser akan berisi 
 setuser({
  name:name,
  email:email,
  
 })  
 nah ini masuk navigate ke dashboard 
   navigate("/dasbboard") 
   nah route bekerja d App,js 
   sbb:
   <Route path='dashboard'
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
   nah akan menuju ke ProtectedRoute periksa nah liat utk  yg di wraping
    <Dashboard user={user} /> nah ini adlaah children sbgai children jikakita 
    masuk pada page ProtectedRoute krn dia di armpit/wraping sama ProtectedRoute
    nah di ProtectedRotue terlihat:
    ada 2 pilihan si children dan  user nah ProtectedRoute check ini 
    user jika dia bukan user maka balik ke home tertolak,
    nah jika dia benar user maka return menuju children yg artinya :
    <Dashboard user={user} />
    line code:
    const ProtectedRoute = ({ children, user }) => {
        if (!user) {
          return <Navigate to='/' />
        }
        return children}

    -nah jika children berarti :
    <Dashboard user={user} /> 
    maka di Dasboard user sbgai prop sbb:
  <section className='section'>
      <h4>Heelo,{user?.name}</h4>
    </section> 
    nah dari rogram diatas akan merender si user yg login 

*/
