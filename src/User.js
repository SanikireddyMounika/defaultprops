import React from 'react'

function User(props) {

  return (
    <div>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Address{props.add}</p>
      
    </div>
  )
 
}
User.defaultProps={
    name:"rahul",
    age:"23",
    add:"banglore"
}


export default User
