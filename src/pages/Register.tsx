// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Register: React.FC = () => {
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       toast.error('As senhas não coincidem');
//     } else {
//       toast.success('Cadastro realizado com sucesso!');
//       navigate('/');
//     }
//   };

//   return (
//     <div className="bg-[#727272] min-h-screen flex items-center justify-center">
//       <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-md">
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
//           <div className="mb-4">
//             <label className="block mb-2" htmlFor="nome">Nome:</label>
//             <input
//               id="nome"
//               type="text"
//               value={nome}
//               onChange={(e) => setNome(e.target.value)}
//               placeholder="Digite seu nome"
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2" htmlFor="email">Email:</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Digite seu email"
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2" htmlFor="password">Senha:</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Digite sua senha"
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2" htmlFor="confirmPassword">Confirme a Senha:</label>
//             <input
//               id="confirmPassword"
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirme sua senha"
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <button type="submit" className="w-full p-2  bg-slate-950 text-white rounded">Cadastrar</button>
//           <p className="mt-4 text-center">
//             Já tem uma conta? <a href="/" className="text-blue-500">Faça login</a>
//           </p>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;

// Register.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import api from '../api'; // Importa o Axios configurado
import 'react-toastify/dist/ReactToastify.css';

const Register: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    try {
      await api.post('/register', { name: nome, email, password });
      toast.success('Cadastro realizado com sucesso!');
      navigate('/'); // Redireciona para o login
    } catch (error) {
      toast.error('Erro ao cadastrar. Tente novamente.');
      console.error("Erro ao fazer cadastro:", error);
    }
  };

  return (
    <div className="bg-[#727272] min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="nome">Nome:</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
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
          <div className="mb-4">
            <label className="block mb-2" htmlFor="confirmPassword">Confirme a Senha:</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme sua senha"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full p-2  bg-slate-950 text-white rounded">Cadastrar</button>
          <p className="mt-4 text-center">
            Já tem uma conta? <a href="/" className="text-blue-500">Faça login</a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
