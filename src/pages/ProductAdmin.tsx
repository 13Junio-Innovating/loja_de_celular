// src/pages/ProductAdmin.tsx
import React, { useState } from 'react';
import axios from 'axios';

const ProductAdmin: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/products', {
        name,
        description,
        price,
        imageUrl,
      });

      if (response.status === 201) {
        alert('Produto cadastrado com sucesso!');
        setName('');
        setDescription('');
        setPrice(0);
        setImageUrl('');
      }
    } catch (error) {
      alert('Erro ao cadastrar o produto');
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-200 flex justify-center items-center">
      <form onSubmit={handleAddProduct} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Cadastrar Produto</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do Produto"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição do Produto"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          placeholder="Preço"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="URL da Imagem"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default ProductAdmin;
