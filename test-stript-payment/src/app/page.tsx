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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='text-center'>
        <h1>Test Stripe API</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
