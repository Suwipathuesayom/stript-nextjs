import ProductCard from '../components/ProductCard/pages'; // Assuming this is the correct path
import { Product } from '../interfaces/products';

export default function Home() {
  const products: Product[] = [
    { 
      id: 1, 
      name: 'Bonchon', 
      price: 259, 
      image: '/images/Bonchon.jpg',
      description: 'ไก่ทอดซอสเกาหลี'
    },
    { 
      id: 2, 
      name: 'Kfc', 
      price: 159, 
      image: '/images/kfc.png',
      description: 'ชุดไก่ทอดกรอบ'
    }
  ];

  return (
    <main className="container mx-auto my-7">
      <div className='text-center'>
        <h1>ทดสอบ Stripe API</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
