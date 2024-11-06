// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SwiperSlider from '../components/SwiperSlider';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />
      <main className="container mx-auto mt-16 p-4">
        <h1 className="text-4xl font-bold text-center mb-15">Bem-vindo à Loja</h1>
        <SwiperSlider />
        <h2 className="text-2xl font-bold text-center my-4">Produtos em Destaque</h2>
        
        {/* Renderiza os produtos dinamicamente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;


//     <div className="bg-[#727272] min-h-screen">
