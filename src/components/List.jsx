import React from 'react'

const List = ({className, children}) => {
  return (
    <div className={`flex flex-row justify-between list-none ${className}`}>{children}</div>
  )
}

export default List