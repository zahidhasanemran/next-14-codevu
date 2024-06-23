import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <small>Layout from auth</small>
      {children}
    </div>
  )
}

export default AuthLayout
