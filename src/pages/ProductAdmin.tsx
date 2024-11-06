import React, { useState, useEffect, FormEvent } from "react";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  image_url: string;
};

const AdminPanel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: "",
    price: 0,
    category: "smartphone",
    stock: 0,
    description: "",
    image_url: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  // Carregar produtos da API
  const loadProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  // Manipular alterações no formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submeter formulário
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/products/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5000/api/products", formData);
      }
      setFormData({
        name: "",
        price: 0,
        category: "smartphone",
        stock: 0,
        description: "",
        image_url: "",
      });
      loadProducts();
    } catch (error) {
      console.error("Erro ao salvar o produto:", error);
    }
  };

  // Editar produto
  const handleEdit = (product: Product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  // Excluir produto
  const handleDelete = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        loadProducts();
      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-2xl font-bold">Painel Administrativo - AP Manutenções</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Adicionar/Editar Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nome do Produto</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Preço</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                step="0.01"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Categoria</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="smartphone">Smartphone</option>
                <option value="accessory">Acessório</option>
                <option value="peripheral">Periférico</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Estoque</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Descrição</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">URL da Imagem</label>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-700 transition"
          >
            {editingId ? "Atualizar Produto" : "Salvar Produto"}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Produtos Cadastrados</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-3 text-left">Nome</th>
              <th className="border-b p-3 text-left">Preço</th>
              <th className="border-b p-3 text-left">Categoria</th>
              <th className="border-b p-3 text-left">Estoque</th>
              <th className="border-b p-3 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border-b p-3">{product.name}</td>
                <td className="border-b p-3">R$ {product.price.toFixed(2)}</td>
                <td className="border-b p-3">{product.category}</td>
                <td className="border-b p-3">{product.stock}</td>
                <td className="border-b p-3">
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-blue-600 mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500"
                  >
                    Excluir
                  </button>
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
