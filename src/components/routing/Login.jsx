import React from 'react'

function Login({userData}) {
  console.log(userData);
  return (
    <div>
      <h1>{`${userData.fn} ${userData.ln} Registerd Successfully please login to Access`}</h1>
    </div>
  )
}

export default Login