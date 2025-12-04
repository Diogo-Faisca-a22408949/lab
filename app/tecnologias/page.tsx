import Image from 'next/image';
import Link from 'next/link';
import tecnologias from '@/app/data/tecnologias.json';

// Como o ficheiro é JSON puro, o Next.js já devolve um array de objetos
// Não é necessário JSON.parse() quando usas import direto
// (o Next.js faz isso automaticamente)

export default function TecnologiasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 py-12 px-6">
      {/* Botão voltar */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link
          href="/"
          className="inline-block text-white hover:text-cyan-400 transition-colors"
        >
          ← Voltar à Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Tecnologias Exploradas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tecnologias.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              {/* Imagem */}
              <div className="bg-gray-100 p-8 flex justify-center items-center">
                <Image
                  src={`/tecnologias/${tech.image}`}
                  alt={tech.title}
                  width={120}
                  height={120}
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>

                {/* Rating com estrelas */}
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-500 mr-2">Minha nota:</span>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < tech.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}