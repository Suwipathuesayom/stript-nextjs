import ProductCard from '../components/ProductCard/pages'; // Assuming this is the correct path
import { Product } from '../interfaces/products';

export default function Home() {
  const products: Product[] = [
    { 
      id: 1, 
      name: 'Bonchon', 
      price: 29.99, 
      image: '/images/Bonchon.jpg',
      description: 'ไก่ทอดซอสเกาหลี'
    },
    { 
      id: 2, 
      name: 'Kfc', 
      price: 19.99, 
      image: '/images/kfc.png',
      description: 'ชุดไก่ทอดกรอบ'
    }
  ];

  return (
    <main className="container mx-auto my-7">
      <div className='text-center'>
        <h1>Test Stripe API</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
