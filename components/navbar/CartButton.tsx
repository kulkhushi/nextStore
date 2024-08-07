import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LucideShoppingBag } from 'lucide-react'

const CartButton = () => {

  const numItemsInCart = 9;
  return (
    
    <Button variant='outline' size={'icon'} asChild className='relative'>
        <Link href='/cart'>
        <LucideShoppingBag />
        <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
    
  )
}

export default CartButton