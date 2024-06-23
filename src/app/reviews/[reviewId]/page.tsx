import { notFound } from 'next/navigation'
import React from 'react'

const ReviewSinglePage = ({ params }: any) => {
  if (params?.reviewId >= 100) {
    notFound()
  }
  return <div>Review id page {params?.reviewId} </div>
}

export default ReviewSinglePage
