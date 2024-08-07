import { fetchALlProduct } from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuLayoutGrid, LuList } from 'react-icons/lu';

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout?: string;
  search?: string;
}) => {
  const allProducts = await fetchALlProduct({search: search ?? ""});
  const searchParams = search ? `&search=${search}` : "";
    const totalProducts = allProducts.length;
  return (
    <div>
      <section>
        <div className='flex justify-between items-center'>
          <h4 className='font-medium text-lg'>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
          <div className='flex gap-x-4'>
            <Button
              variant={layout === 'grid' ? 'default' : 'ghost'}
              size='icon'
              asChild
            >
              <Link href={`/products?layout=grid${searchParams}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === 'list' ? 'default' : 'ghost'}
              size='icon'
              asChild
            >
              <Link href={`/products?layout=list${searchParams}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className='mt-4' />
      </section>
      {allProducts.length === 0 ? (
        <h2>No Product available...</h2>
      ) : layout === "list" ? (
        <ProductsList products={allProducts} />
      ) : (
        <ProductsGrid products={allProducts} />
      )}
    </div>
  );
};

export default ProductsContainer;
