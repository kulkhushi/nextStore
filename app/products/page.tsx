import ProductsContainer from '@/components/products/ProductsContainer'
import React from 'react'

const Productspage = ({searchParams}:{searchParams?:{layout?:string;search?:string}}) => {
  // console.log(searchParams);
  const prodLayout = searchParams?.layout? searchParams?.layout: 'grid'
  return (
    <ProductsContainer layout={prodLayout} search={searchParams?.search}/>
  )
}

export default Productspage