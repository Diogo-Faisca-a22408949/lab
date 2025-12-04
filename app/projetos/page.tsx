// app/projetos/page.tsx
import DescricaoProjetos from '@/components/DescricaoProjetos/DescricaoProjetos';
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard';

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          Meus Projetos
        </h1>
        <DescricaoProjetos />
      </div>
    </div>
  );
}