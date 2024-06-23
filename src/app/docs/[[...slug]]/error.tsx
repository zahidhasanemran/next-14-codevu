'use client'
import React from 'react'

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) => {
  return (
    <div>
      <div>{error?.message}</div>
      <button onClick={reset}>Retry</button>
    </div>
  )
}

export default ErrorBoundary
