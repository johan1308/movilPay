import React from 'react'

export const PLayouts = ({message,icon}:{message:string,icon?:any}) => {
  return (
    <p className="font-semibold text-xl dark:text-white">
        {message}
        {icon}
    </p>
  )
}
