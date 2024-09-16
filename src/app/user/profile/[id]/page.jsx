import React from 'react'

function MyProfile({params}) {
    // console.log(params);
  return (
    <div>
      My Profile{params.id}
    </div>
  )
}

export default MyProfile
