import React from 'react'
import { Product } from './Product'


const Dashboard = () => {
 let Products = [{} , {}]
 Products.map((Product) => {
  return (
    <Product Products={Products} />
  )
 })
}

export default Dashboard
