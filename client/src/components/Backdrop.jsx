import React from 'react'

export default function Backdrop({isOpen, closeSidebar}) {
  return (
    <div className={isOpen ? 'backdrop backdrop--open' : 'backdrop'} onClick={closeSidebar}>
      
    </div>
  )
}
