import React from 'react'

function RightSideBar(props) {
  return (
    <div className="right">
      <h1>Countries</h1>
      {props.children}
    </div>
  )
}
export default RightSideBar