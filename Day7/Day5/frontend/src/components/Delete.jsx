import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handleDelete = async(e) => {
        e.preventDefault()
        const id = e.target.id.value
        await axios.delete(`https://crud-website-1tc2.onrender.com/users/${id}`)
        alert('Product deleted successfully')
      }
    return (
        <div>
            <h1>Delete User</h1>
            <form onSubmit={handleDelete}>
                <label>User ID:</label><input type="number" name="id" /> <br/>
                <button type='submit'>Delete</button>
            </form>    
        </div>
    )
}
export default Delete