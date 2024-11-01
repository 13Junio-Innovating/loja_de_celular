import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login (a lógica real seria uma requisição a uma API)
    if (email === 'saulo@gmail.com' && password === '1234') {
      toast.success('Login bem-sucedido!');
      navigate('/dashboard');
    } else {
      toast.error('Email ou senha incorretos');
    }
  };

  return (
    <div className="bg-[#727272] min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Senha:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full p-2  bg-slate-950 text-white rounded">Entrar</button>
          <p className="mt-4 text-center">
            Não tem uma conta? <a href="/register" className="text-blue-500">Cadastre-se</a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
