import React from 'react'

function Album({id,title}) {


  return (
                <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                </tr>
  )
}

export default Album