import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} AP Celulares - Manutenção, Assistência Tecnica e Acessórios. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
