import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SwiperSlider from '../components/SwiperSlider';
import ProductCard from '../components/ProductCard';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <Header />
      <main className="container mx-auto mt-16 p-4">
        <h1 className="text-4xl font-bold text-center mb-15">Bem-vindo à Loja</h1>
        <SwiperSlider />
        <h2 className="text-2xl font-bold text-center my-4">Produtos em Destaque</h2>
        <ProductCard />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

//     <div className="bg-[#727272] min-h-screen">
