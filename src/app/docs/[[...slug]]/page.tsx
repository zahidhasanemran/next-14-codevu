import React from 'react'

const CatchAllRoutes = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div>
      <h2>Catch All Routes </h2>
      <ul>
        {params?.slug?.map((sm, i) => (
          <li key={i}>{sm}</li>
        ))}
      </ul>
    </div>
  )
}

export default CatchAllRoutes
