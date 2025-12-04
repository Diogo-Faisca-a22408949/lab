import Link from 'next/link';

const caracteristicas = [
  'JSX, sintaxe que mistura HTML e JS.',
  'Componentes, funções que retornam JSX.',
  'Componentes Reutilizáveis e Modulares.',
  'Roteamento Automático e APIs.',
  'Hooks: useState, useEffect e useSWR.',
  'Renderização Rápida e SEO Friendly.',
  'TypeScript Seguro e Escalável.',
  'Comunidade Ativa e Popularidade.',
];

export default function CaracteristicasPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Cabeçalho com link de volta */}
      <header className="max-w-4xl mx-auto mb-12">
        <Link 
          href="/" 
          className="text-blue-600 hover:underline text-lg"
        >
          ← Voltar para Home
        </Link>
      </header>

      <main className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Características do React e Next.js
        </h2>

        <ul className="space-y-4 text-lg text-gray-700">
          {caracteristicas.map((caracteristica, index) => (
            <li 
              key={index} 
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {caracteristica}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}