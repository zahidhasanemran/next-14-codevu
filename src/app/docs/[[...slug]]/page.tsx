'use client'
import React from 'react'

function getRandomInit(count: number) {
  return Math.floor(Math.random() * count)
}

const CatchAllRoutes = ({ params }: { params: { slug: string[] } }) => {
  const randomNumber = getRandomInit(2)

  if (randomNumber === 1) {
    throw new Error('Loading Error')
  }

  return (
    <div>
      <h2>Catch All Routes </h2>
      <ul>
        {params?.slug?.map((sm, i) => (
          <li key={i}>{sm}</li>
        ))}
      </ul>
      <p>{randomNumber}</p>
    </div>
  )
}

export default CatchAllRoutes
