import React from 'react'
import { useGetProductQuery } from 'state/api'

const Product = () => {
  const {data } = useGetProductQuery()
  console.log(data)
  return (
    <div>
      Product
    </div>
  )
}

export default Product
