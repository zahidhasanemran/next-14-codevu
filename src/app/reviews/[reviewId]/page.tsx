import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
  params: {
    reviewId: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Review ${params?.reviewId}`,
    description: `Review Des ${params?.reviewId}`,
  }
}

const ReviewSinglePage = ({ params }: Props) => {
  if (Number(params?.reviewId) >= 100) {
    notFound()
  }
  return <div>Review id page {params?.reviewId} </div>
}

export default ReviewSinglePage
