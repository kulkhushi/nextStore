import { fetchFeaturedProduct } from '@/utils/actions'
import React from 'react'
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';

const FeaturedProducts = async () => {
   const fetchFeaturedProducts  = await fetchFeaturedProduct();
   if(fetchFeaturedProducts.length === 0) return <EmptyList/>
  return (
    <section className="">
        <SectionTitle text='Featured Product'/>
        <ProductsGrid products={fetchFeaturedProducts}/>
    </section>
  )
}

export default FeaturedProducts