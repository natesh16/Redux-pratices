import React, { useState } from 'react'

export default function Customeradd() {
   const[user,setuser] =useState('')

  return (
    <div>
    <h3>Add New Custemer</h3>
    <input type='text'placeholder='Name' onChange={(e) => setuser(e.target.value)}/>
    <button onChange={addcusomer}>Submit</button>
    </div>
  )
}