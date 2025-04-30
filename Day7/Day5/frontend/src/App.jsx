import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Delete from './components/Delete'
import Update from './components/Update'
import './App.css'
const App = () => {
  return (
    <div>
      <h1>User Registration Form</h1>
      <Register/>
      <Update/>      
      <View/>
      <Delete/>
    </div>
  )
}

export default App