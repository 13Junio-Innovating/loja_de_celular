import React from 'react';


const products = [
  { id: 1, name: 'Produto 1', price: 'R$ 700', img: '/images/product1.jpg' },
  { id: 2, name: 'Produto 2', price: 'R$ 400', img: '/images/product2.jpg' },
  { id: 3, name: 'Produto 3', price: 'R$ 900', img: '/images/product3.jpg' },
  { id: 4, name: 'Produto 4', price: 'R$ 800', img: '/images/product4.jpg' },
  { id: 5, name: 'Produto 5', price: 'R$ 1.000', img: '/images/product5.jpg' },
  { id: 6, name: 'Produto 6', price: 'R$ 2.000', img: '/images/product6.jpg' },
  { id: 7, name: 'Produto 7', price: 'R$ 5.500', img: '/images/product7.jpg' },
  { id: 8, name: 'Produto 8', price: 'R$ 1.800', img: '/images/product8.jpg' },
  { id: 9, name: 'Produto 9', price: 'R$ 1.100', img: '/images/product9.jpg' },
  { id: 10, name: 'Produto 10', price: 'R$ 2.200', img: '/images/product10.jpg' },
  { id: 11, name: 'Produto 11', price: 'R$ 3.300', img: '/images/product11.jpg' },
  { id: 12, name: 'Produto 12', price: 'R$ 1.400', img: '/images/product12.jpg' },
];

const ProductCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {products.map((product) => (
        <div key={product.id} className="border border-gray-950 bg-slate-200 rounded shadow-lg p-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded-lg"
            />
          <h3 className="text-lg font-bold text-center">{product.name}</h3>
          <p className="text-black font-semibold">{product.price}</p>
          <button className="mt-4 w-full bg-slate-950 text-white p-2 rounded">
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
