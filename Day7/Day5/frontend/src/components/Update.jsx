import React from 'react'
import axios from 'axios'
const Update = () => {
    const handleUpdate = async(e) => {
        e.preventDefault()
        const id = e.target.id.value
        const user={
            name: e.target.name.value,
            age: e.target.age.value
        }
        await axios.put(`https://crud-website-1tc2.onrender.com/users/${id}`,user)
        alert('User updated successfully')
      }
  return (
    <div>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
            <label>User ID:</label><input type="number" name="id" />
            <label>Name:</label><input type="text" name="name" />
            <label>Age:</label><input type="number" name="age"/>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default Update