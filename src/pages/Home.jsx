import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


function Home() {
  return (
  <div>
      <Navbar/>
    <div className="flex">
    <Sidebar />
    <main className="flex-1 bg-gray-100 h-screen p-4">
      <h1>Main Content</h1>
    </main>
  </div>
  </div>
  )
}

export default Home