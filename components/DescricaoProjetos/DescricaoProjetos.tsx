// app/components/DescricaoProjetos.tsx
import Projeto from '../Projeto/Projeto';

export default function DescricaoProjetos() {
  return (
    <div className="text-white space-y-10">
      <section className="bg-gray-800/50 backdrop-blur rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Os meus projetos deste ano</h2>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
          Durante o curso realizei vários projetos incríveis. Pode ver todos eles na minha página pessoal:
        </p>
        <a
          href="https://O-TEU-USERNAME.github.io"  // ← muda para o teu GitHub Pages
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-full text-white font-bold text-lg transition"
        >
          Ver todos os meus projetos no GitHub Pages
        </a>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-bold mb-8 text-center">Destaques do curso:</h3>
        <Projeto
          nome="Loja Online com Carrinho"
          url="https://link-da-tua-loja.vercel.app"  // ← coloca o teu link real
        />
        <Projeto
          nome="Site Interativo com JavaScript"
          url="https://link-do-teu-site-js.github.io"  // ← coloca o teu link real
        />
        <Projeto
          nome="Portfolio Pessoal"
          url="https://O-TEU-USERNAME.github.io"
        />
        {/* Adiciona mais se quiseres */}
      </section>
    </div>
  );
}