import React from "react"

const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Heelo,{user?.name}</h4>
    </section>
  )
}

export default Dashboard
