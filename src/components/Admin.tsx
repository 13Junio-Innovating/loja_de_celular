// import React from 'react';
// import ProductAdmin from '../pages/ProductAdmin'; // Importando o formulário de cadastro de produtos

// const Admin: React.FC = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">Área de Administração</h1>
//       <ProductAdmin />
//     </div>
//   );
// };

// export default Admin;


import React, { useState, useEffect, FormEvent } from 'react';
// import ProductAdmin from '../pages/ProductAdmin';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  image_url: string;
}

const AdminPanel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [formValues, setFormValues] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    category: 'smartphone',
    stock: 0,
    description: '',
    image_url: '',
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: name === 'price' || name === 'stock' ? +value : value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setProducts(prevProducts => prevProducts.map(product => product.id === editingId ? { ...product, ...formValues, id: editingId } : product));
      setEditingId(null);
    } else {
      const newProduct: Product = { id: Date.now(), ...formValues };
      setProducts(prevProducts => [...prevProducts, newProduct]);
    }
    localStorage.setItem('products', JSON.stringify(products));
    setFormValues({ name: '', price: 0, category: 'smartphone', stock: 0, description: '', image_url: '' });
  };

  const editProduct = (id: number) => {
    const product = products.find(p => p.id === id);
    if (product) {
      setEditingId(id);
      setFormValues(product);
    }
  };

  const deleteProduct = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      const updatedProducts = products.filter(p => p.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Painel Administrativo - AP Manutenções</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Adicionar/Editar Produto</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-1">Nome do Produto</label>
            <input type="text" name="name" value={formValues.name} onChange={handleInputChange} required className="border border-gray-300 rounded p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-700 font-medium mb-1">Preço</label>
            <input type="number" name="price" value={formValues.price} onChange={handleInputChange} required className="border border-gray-300 rounded p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="text-gray-700 font-medium mb-1">Categoria</label>
            <select name="category" value={formValues.category} onChange={handleInputChange} required className="border border-gray-300 rounded p-2">
              <option value="smartphone">Smartphone</option>
              <option value="accessory">Acessório</option>
              <option value="peripheral">Periférico</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="stock" className="text-gray-700 font-medium mb-1">Estoque</label>
            <input type="number" name="stock" value={formValues.stock} onChange={handleInputChange} required className="border border-gray-300 rounded p-2" />
          </div>
          <div className="col-span-full flex flex-col">
            <label htmlFor="description" className="text-gray-700 font-medium mb-1">Descrição</label>
            <textarea name="description" value={formValues.description} onChange={handleInputChange} required className="border border-gray-300 rounded p-2 h-24"></textarea>
          </div>
          <div className="col-span-full flex flex-col">
            <label htmlFor="image_url" className="text-gray-700 font-medium mb-1">URL da Imagem</label>
            <input type="url" name="image_url" value={formValues.image_url} onChange={handleInputChange} required className="border border-gray-300 rounded p-2" />
          </div>
          <button type="submit" className="col-span-full bg-blue-600 text-white py-2 rounded mt-4">Salvar Produto</button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Produtos Cadastrados</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2">Nome</th>
              <th className="p-2">Preço</th>
              <th className="p-2">Categoria</th>
              <th className="p-2">Estoque</th>
              <th className="p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b">
                <td className="p-2">{product.name}</td>
                <td className="p-2">R$ {product.price.toFixed(2)}</td>
                <td className="p-2">{product.category}</td>
                <td className="p-2">{product.stock}</td>
                <td className="p-2">
                  <button onClick={() => editProduct(product.id)} className="text-blue-600 mr-2">Editar</button>
                  <button onClick={() => deleteProduct(product.id)} className="text-red-600">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
