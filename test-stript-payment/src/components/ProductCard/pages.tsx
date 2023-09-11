// Required imports
import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '../../interfaces/products';
import {checkout} from '@/api/checkout';

// Define the props for the ProductCard component
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  return (
    <div className="border p-4 rounded background-white bg-white">
      
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
      />
      <h2 className="text-xl mt-4">{product.name}</h2>
  
      <p className="mt-2">${product.price.toFixed(2)}</p>

      <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={() => checkout({
          lineItems: [
            {
              price: "price_1Np1OFJiNzERq6mrDzuFtQ3u",
              quantity: 1,
            },
          ],
        })}
      >
        สั่งซื้อ
      </button>
    </div>
  );
}

export default ProductCard;
