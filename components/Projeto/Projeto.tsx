// app/components/Projeto.tsx
type ProjetoProps = {
  nome: string;
  url: string;
};

export default function Projeto({ nome, url }: ProjetoProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition">
      <p className="text-lg text-gray-800">
        Fiz o projeto{' '}
        <strong className="text-indigo-600">{nome}</strong>.{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 hover:underline font-semibold"
        >
          Veja aqui →
        </a>
      </p>
    </div>
  );
}