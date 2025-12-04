// app/tecnologias/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import tecnologias from '@/app/data/tecnologias.json';
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard';   // ← caminho corrigido e simplificado

export default function TecnologiasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 py-12 px-6">
      {/* Botão voltar */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link
          href="/"
          className="inline-block text-white hover:text-cyan-400 transition-colors font-medium"
        >
          ← Voltar à Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Tecnologias Exploradas
        </h2>

        {/* Grid responsivo com os novos cards simples */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 justify-center">
          {tecnologias.map((tech) => (
            <TecnologiaCard
              key={tech.title}           // ← key mais segura (title é único)
              title={tech.title}
              image={tech.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}