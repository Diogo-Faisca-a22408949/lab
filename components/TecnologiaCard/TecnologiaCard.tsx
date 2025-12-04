// app/components/TecnologiaCard.tsx
import Image from 'next/image';

interface TecnologiaCardProps {
  title: string;
  image: string;
}

export default function TecnologiaCard({ title, image }: TecnologiaCardProps) {
  return (
    <div className="w-48 h-48 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200">
      <Image
        src={`/tecnologias/${image}`}
        alt={title}
        width={100}
        height={100}
        className="object-contain mb-4 drop-shadow-md"
      />
      <h3 className="text-lg font-bold text-gray-800 text-center">
        {title}
      </h3>
    </div>
  );
}